import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.25} groundColor="black" />
      <pointLight intensity={1} position={[1, 0.1, 1]} />
      <spotLight position={[2, 5, 5]} angle={1} penumbra={1} intensity={150} castShadow shadow-mapSize={1024} /> 
      <primitive 
      object={computer.scene}
      scale={isMobile ? 0.5 : 0.6}
      position={isMobile ? [0, -2, -1.6] : [1.5, -2.55, -0.75]}
      rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
      // Check if the user is on a mobile device
      const mediaQuery = window.matchMedia('(max-width: 500px)')
      // Set the state to the result of the media query
      setIsMobile(mediaQuery.matches)
      // Create a function to handle the change of the media query
      const handleMediaQueryChange = (e) => {setIsMobile(e.matches)}
      // Add the event listener to the media query
      mediaQuery.addEventListener('change', handleMediaQueryChange)
      // Remove the event listener when the component is unmounted
      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }, [])

    return (
      <Canvas shadows camera={{position: [20, 3, 5], fov: 22}} gl={{preserveDrawingBuffer: true}} frameloop="demand">
        <Suspense fallback={<CanvasLoader />} >
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    )
}

export default ComputersCanvas