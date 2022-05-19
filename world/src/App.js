import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import './App.css'

function Box(){

  const [hover, setHover] = useState(false)

  return(
    <mesh
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e)=> setHover(false)}
    >
      <boxBufferGeometry  attach="geometry" />
      <meshLambertMaterial attach="material"  color={hover ? "red" : "green"} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls/>
      <ambientLight intensity={0.5}/>
      <spotLight position={[10,15,10]} angle={0.3} />
      <Box/>
    </Canvas>
  )
}

export default App