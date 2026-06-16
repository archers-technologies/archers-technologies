import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, Line, OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
import {
  getGlobeArcs,
  globeLocations,
  type GlobeLocation,
} from "@/data/globe-locations";
import {
  createArcPoints,
  GLOBE_RADIUS,
  GLOBE_SCENE_OFFSET_X,
  GLOBE_SCENE_OFFSET_Y,
  INITIAL_CAMERA_DISTANCE,
  INITIAL_VIEW_LAT,
  INITIAL_VIEW_LNG,
  latLngToVector3,
} from "@/lib/globe-utils";

const EARTH_TEXTURE =
  "https://unpkg.com/three-globe/example/img/earth-night.jpg";
const BUMP_TEXTURE =
  "https://unpkg.com/three-globe/example/img/earth-topology.png";

/** Page scroll passes through on the left; globe zoom on the right */
const WHEEL_INTERACTION_START = 0.4;

interface GlobeSceneProps {
  reducedMotion: boolean;
  isMobile: boolean;
}

function CameraRig({
  targetX,
  targetY,
}: {
  targetX: number;
  targetY: number;
}) {
  const { camera, gl } = useThree();
  const controlsRef = useRef<React.ElementRef<typeof OrbitControls>>(null);

  useLayoutEffect(() => {
    const position = latLngToVector3(
      INITIAL_VIEW_LAT,
      INITIAL_VIEW_LNG,
      INITIAL_CAMERA_DISTANCE
    );
    camera.position.copy(position);
    camera.lookAt(targetX, targetY, 0);
    camera.updateProjectionMatrix();
  }, [camera, targetX, targetY]);

  useEffect(() => {
    const controls = controlsRef.current;
    const canvas = gl.domElement;
    if (!controls) return;

    controls.enableZoom = false;

    const onWheel = (event: WheelEvent) => {
      const rect = canvas.getBoundingClientRect();
      const xRatio = (event.clientX - rect.left) / rect.width;
      if (xRatio < WHEEL_INTERACTION_START) return;

      event.preventDefault();
      event.stopPropagation();

      const delta = event.deltaY * 0.001 * controls.zoomSpeed;
      if (delta > 0) {
        controls.dollyIn(1 + delta);
      } else {
        controls.dollyOut(1 - delta);
      }
      controls.update();
    };

    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, [gl]);

  return (
    <OrbitControls
      ref={controlsRef}
      target={[targetX, targetY, 0]}
      enableRotate
      enableZoom
      enableDamping
      dampingFactor={0.05}
      minDistance={4.0}
      maxDistance={7.2}
      enablePan={false}
      rotateSpeed={0.5}
      zoomSpeed={0.55}
      autoRotate={false}
    />
  );
}

function Earth({ isMobile }: { isMobile: boolean }) {
  const [colorMap, bumpMap] = useTexture([EARTH_TEXTURE, BUMP_TEXTURE]);

  useEffect(() => {
    colorMap.colorSpace = THREE.SRGBColorSpace;
    colorMap.anisotropy = 8;
    bumpMap.anisotropy = 4;
  }, [colorMap, bumpMap]);

  return (
    <mesh>
      <sphereGeometry args={[GLOBE_RADIUS, 96, 96]} />
      <meshStandardMaterial
        map={colorMap}
        bumpMap={bumpMap}
        bumpScale={0.14}
        emissiveMap={colorMap}
        emissive="#ff5500"
        emissiveIntensity={isMobile ? 1.5 : 1.1}
        color={isMobile ? "#6a7d8d" : "#5a6d7d"}
        roughness={0.48}
        metalness={0.08}
      />
    </mesh>
  );
}

const NEON_CORE = new THREE.Color("#ff4400");
const NEON_MID = new THREE.Color("#ff6600");
const NEON_HOT = new THREE.Color("#ffaa44");

const ATMOS_VERTEX = `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vViewDir = normalize(-mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

function useNeonAtmosphereMaterial() {
  return useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        toneMapped: false,
        uniforms: {
          uTime: { value: 0 },
          uCore: { value: NEON_CORE.clone() },
          uMid: { value: NEON_MID.clone() },
          uHot: { value: NEON_HOT.clone() },
        },
        vertexShader: ATMOS_VERTEX,
        fragmentShader: `
          uniform float uTime;
          uniform vec3 uCore;
          uniform vec3 uMid;
          uniform vec3 uHot;
          varying vec3 vNormal;
          varying vec3 vViewDir;
          void main() {
            float f = 1.0 - max(dot(vViewDir, vNormal), 0.0);
            float pulse = 0.9 + 0.1 * sin(uTime * 1.2);

            float haze  = pow(f, 0.42) * 0.28;
            float bloom = pow(f, 1.05) * 0.32;
            float mist  = pow(f, 1.65) * 0.14;

            // Flatten silhouette peak — kills the hard orange ring line
            float antiRing = 1.0 - smoothstep(0.78, 0.97, f);

            float alpha = clamp((haze + bloom + mist) * antiRing * pulse * 0.8, 0.0, 0.5);
            vec3 col = uMid * (haze + bloom) + uCore * mist * 0.6 + uHot * haze * 0.25;
            gl_FragColor = vec4(col, alpha);
          }
        `,
      }),
    []
  );
}

function NeonAtmosphere({ reducedMotion }: { reducedMotion: boolean }) {
  const atmosMat = useNeonAtmosphereMaterial();

  useFrame((state) => {
    if (atmosMat.uniforms.uTime) {
      atmosMat.uniforms.uTime.value = reducedMotion ? 0 : state.clock.elapsedTime;
    }
  });

  return (
    <mesh scale={1.18} material={atmosMat} renderOrder={1}>
      <sphereGeometry args={[GLOBE_RADIUS, 128, 128]} />
    </mesh>
  );
}

function LocationPin({
  location,
  isMobile,
}: {
  location: GlobeLocation;
  isMobile: boolean;
}) {
  const position = useMemo(
    () => latLngToVector3(location.lat, location.lng, GLOBE_RADIUS + 0.02),
    [location.lat, location.lng]
  );
  const pinRef = useRef<THREE.Mesh>(null);
  const isHQ = location.isHQ;
  const pinSize = isHQ ? 0.034 : 0.026;

  useFrame((state) => {
    if (!pinRef.current) return;
    const wave = Math.sin(state.clock.elapsedTime * 2.5 + location.lng);
    pinRef.current.scale.setScalar(1 + wave * 0.1);
  });

  return (
    <group position={position}>
      <mesh ref={pinRef}>
        <sphereGeometry args={[pinSize, 10, 10]} />
        <meshBasicMaterial
          color={isHQ ? "#ffffff" : "#ff8800"}
          toneMapped={false}
        />
      </mesh>
      <Html
        position={[0, isMobile ? 0.08 : 0.1, 0]}
        center
        distanceFactor={isMobile ? 4.3 : 3.6}
        occlude
        zIndexRange={[0, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div className="hero-globe-pin-card">
          <span className="hero-globe-pin-flag">{location.flag}</span>
          <div className="hero-globe-pin-text">
            <span className="hero-globe-pin-country">
              {location.shortName ?? location.name}
            </span>
            {!isMobile && (
              <span className="hero-globe-pin-city">
                {location.city}
                {isHQ ? " · Main HQ" : ""}
              </span>
            )}
          </div>
        </div>
      </Html>
    </group>
  );
}

function ConnectionArc({
  startLat,
  startLng,
  endLat,
  endLng,
  reducedMotion,
}: {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  reducedMotion: boolean;
}) {
  const lineRef = useRef<THREE.Line>(null);
  const points = useMemo(
    () => createArcPoints(startLat, startLng, endLat, endLng),
    [startLat, startLng, endLat, endLng]
  );

  useFrame(() => {
    if (!lineRef.current?.material || reducedMotion) return;
    const material = lineRef.current.material as THREE.LineDashedMaterial;
    material.dashOffset -= 0.025;
  });

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#ff7700"
      lineWidth={2}
      transparent
      opacity={0.7}
      dashed
      dashScale={1.2}
      dashSize={0.1}
      gapSize={0.04}
      toneMapped={false}
    />
  );
}

function SceneLights({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <hemisphereLight args={["#3a4a5a", "#080604", isMobile ? 0.45 : 0.35]} />
      <ambientLight intensity={isMobile ? 0.32 : 0.22} color="#7788aa" />
      <directionalLight position={[5, 4, 6]} intensity={isMobile ? 2.1 : 1.8} color="#ffe8cc" />
      <directionalLight position={[-4, 1, 3]} intensity={0.4} color="#aabbcc" />
      <pointLight
        position={[3, 1, 5]}
        intensity={isMobile ? 1.15 : 0.8}
        color="#ff6600"
        distance={20}
        decay={1.5}
      />
    </>
  );
}

export default function GlobeScene({ reducedMotion, isMobile }: GlobeSceneProps) {
  const arcs = useMemo(() => getGlobeArcs(), []);
  const offsetX = isMobile ? 0 : GLOBE_SCENE_OFFSET_X;
  const offsetY = isMobile ? 0.08 : GLOBE_SCENE_OFFSET_Y;

  return (
    <group position={[offsetX, offsetY, 0]}>
      <SceneLights isMobile={isMobile} />
      <CameraRig targetX={offsetX} targetY={offsetY} />

      <Stars
        radius={90}
        depth={40}
        count={isMobile ? 600 : 1200}
        factor={2.5}
        saturation={0}
        fade
        speed={0.2}
      />

      <Earth isMobile={isMobile} />
      <NeonAtmosphere reducedMotion={reducedMotion} />

      {arcs.map((arc) => (
        <ConnectionArc
          key={arc.key}
          startLat={arc.startLat}
          startLng={arc.startLng}
          endLat={arc.endLat}
          endLng={arc.endLng}
          reducedMotion={reducedMotion}
        />
      ))}

      {globeLocations.map((location) => (
        <LocationPin
          key={`${location.shortName ?? location.name}-${location.city}`}
          location={location}
          isMobile={isMobile}
        />
      ))}
    </group>
  );
}
