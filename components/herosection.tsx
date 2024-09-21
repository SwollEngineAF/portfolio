import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { FC, useRef } from 'react'
import * as THREE from 'three'

type GLTFResult = {
  scene: THREE.Group
}

const KaripapModel: FC = () => {
  const { scene } = useGLTF('/assets/karipap.glb') as GLTFResult
  const modelRef = useRef<THREE.Group>(null)

  // Auto-rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={modelRef} object={scene} />
}

const HeroSection: FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Canvas for 3D Model */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <KaripapModel />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-5xl font-bold">John Doe</h1>
        <h2 className="text-3xl">I am a <span className="text-primary">Cybersecurity N00b</span></h2>
        <p className="mt-4 max-w-2xl text-center">
          I am a passionate frontend developer with a strong focus on building high-quality, user-friendly web applications. 
          I specialize in modern JavaScript frameworks and libraries, and I am always eager to learn new technologies and techniques.
        </p>
      </div>

      {/* Overlay to darken background */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
    </section>
  )
}

export default HeroSection