"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { FC, useRef } from "react";
import * as THREE from "three";

const Model: FC<{
  url: string;
  position: [number, number, number];
  onClick: () => void;
}> = ({ url, position, onClick }) => {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url) as { scene: THREE.Group };

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.006;
    }
  });

  return (
    <mesh onClick={onClick} position={position}>
      <primitive ref={modelRef} object={scene} />
    </mesh>
  );
};

const HeroSection: FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-[100svh] min-h-[32rem] overflow-hidden bg-background">
      {/* Full-bleed 3D atmosphere */}
      <Canvas
        className="absolute inset-0 h-full w-full"
        camera={{ position: [0, 0.4, 4.2], fov: 42 }}
        dpr={[1, 1.75]}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[2, 5, 2]} intensity={1.05} color="#f5e6c8" />
        <directionalLight position={[-3, 2, -1]} intensity={0.35} color="#c4a35a" />

        <Model
          url="/assets/karipap.glb"
          position={[-1.35, -0.15, 0]}
          onClick={() => scrollToSection("skills")}
        />
        <Model
          url="/assets/laksa.glb"
          position={[1.35, -0.15, 0]}
          onClick={() => scrollToSection("about-me")}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      {/* Soft veil so type stays readable without covering the models */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/70 to-transparent"
        aria-hidden
      />

      {/* Brand composition — one job: introduce Syahiid */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end px-6 pb-16 md:px-12 md:pb-20 lg:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="font-display animate-fade-up text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-foreground">
            Syahiid Rasidi
          </h1>
          <p className="animate-fade-up-delay mt-4 max-w-md text-base text-muted-foreground md:text-lg">
            SCADA · IT · product — solving real systems with quiet precision.
          </p>
          <div className="pointer-events-auto animate-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="border-b border-ochre pb-0.5 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-ochre"
            >
              View work
            </button>
            <a
              href="mailto:syahiid.rasidi@gmail.com"
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-ochre"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
