import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import GlobeScene from "@/components/3d/GlobeScene";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  INITIAL_CAMERA_DISTANCE,
  INITIAL_VIEW_LAT,
  INITIAL_VIEW_LNG,
  latLngToVector3,
} from "@/lib/globe-utils";

interface HeroGlobeProps {
  className?: string;
}

/** On mobile portrait, pull camera to fit globe by viewport height (not width). */
function MobileHeightFitCamera({ enabled }: { enabled: boolean }) {
  const { camera } = useThree();

  useEffect(() => {
    if (!enabled) return;

    const fitCamera = () => {
      const height = window.visualViewport?.height ?? window.innerHeight;
      const width = window.visualViewport?.width ?? window.innerWidth;
      const aspect = width / height;

      // Portrait: size globe from viewport height; keep slightly smaller than full-bleed.
      const heightFactor = Math.min(Math.max(height / 667, 0.9), 1.12);
      const portraitBoost = aspect < 1 ? (1 - aspect) * 0.2 : 0;
      const distance = Math.max(
        5.0,
        ((INITIAL_CAMERA_DISTANCE * (1.12 - portraitBoost)) / heightFactor) * 1.1
      );

      const position = latLngToVector3(
        INITIAL_VIEW_LAT,
        INITIAL_VIEW_LNG,
        distance
      );
      camera.position.copy(position);
      camera.updateProjectionMatrix();
    };

    fitCamera();
    window.addEventListener("resize", fitCamera);
    window.visualViewport?.addEventListener("resize", fitCamera);
    return () => {
      window.removeEventListener("resize", fitCamera);
      window.visualViewport?.removeEventListener("resize", fitCamera);
    };
  }, [enabled, camera]);

  return null;
}

function GlobeFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 rounded-full border border-brand/20 border-t-brand animate-spin" />
    </div>
  );
}

const HeroGlobe = ({ className = "" }: HeroGlobeProps) => {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <div className={`w-full h-full max-md:overflow-visible max-md:bg-transparent ${className}`} aria-hidden>
      <Suspense fallback={<GlobeFallback />}>
        <Canvas
          camera={{
            fov: 44,
            near: 0.1,
            far: 200,
            position: [0, 0, isMobile ? 6.15 : 5.95],
          }}
          dpr={isMobile ? [1, 1.25] : [1, 1.75]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ReinhardToneMapping;
            gl.toneMappingExposure = isMobile ? 1.95 : 1.65;
            gl.outputColorSpace = THREE.SRGBColorSpace;
          }}
        >
          {isMobile && <MobileHeightFitCamera enabled />}
          <GlobeScene reducedMotion={reducedMotion} isMobile={isMobile} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeroGlobe;
