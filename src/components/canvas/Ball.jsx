import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Float, useTexture, Decal } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgURL])
  return (
    <div>Ball</div>
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas>
      
    </Canvas>
  )
}

export default Ball