import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <pointLight intensity={10} />
      <spotLight position={[2, 5, 5]} angle={1} penumbra={1} intensity={150} castShadow shadow-mapSize={1024} /> 
      <primitive object={computer.scene} scale={0.6} position={[1.5, -2.55, -0.75]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
    return (
      <Canvas shadows camera={{position: [20, 3, 5], fov: 22}} gl={{preserveDrawingBuffer: true}} frameloop="demand">
        <Suspense fallback={<CanvasLoader />} >
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    )
}

export default ComputersCanvas