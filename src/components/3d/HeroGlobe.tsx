import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import GlobeScene from "@/components/3d/GlobeScene";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroGlobeProps {
  className?: string;
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
    <div className={`w-full h-full ${className}`} aria-hidden>
      <Suspense fallback={<GlobeFallback />}>
        <Canvas
          camera={{ fov: 44, near: 0.1, far: 200, position: [0, 0, 5.95] }}
          dpr={isMobile ? [1, 1.25] : [1, 1.75]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ReinhardToneMapping;
            gl.toneMappingExposure = 1.65;
            gl.outputColorSpace = THREE.SRGBColorSpace;
          }}
        >
          <GlobeScene reducedMotion={reducedMotion} isMobile={isMobile} />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeroGlobe;
