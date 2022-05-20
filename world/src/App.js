import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import './App.css'


function Sphere({props}){

  // const [hover, setHover] = useState(false)

  const sphRef = useRef();

  useFrame( ({clock}) => {
    // sphRef.current.rotation.x += 0.01;
    sphRef.current.rotation.y += 0.01;
    // sphRef.current.rotation.z += 0.1;
    // sphRef.current.scale += 0.1;
    sphRef.current.position.y = -1-Math.sin(clock.getElapsedTime())/4;
  })

  return(
    <mesh
      {...props}
      ref = {sphRef}
      rotation-x = {Math.PI *0.25}
      rotation-y = {Math.PI *0.25}
      rotation-z = {Math.PI *0.25}
      // scale = {2}
      position={[-2,-1.5,0]}
      // onClick = {(e) => Box()}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e)=> setHover(false)}
    >

      <sphereBufferGeometry
        // args={[2,2,2]}
        attach="geometry" />
      <meshLambertMaterial attach="material"  color={"blue"} />
    </mesh>
  )
}


function Box({props}){

  const [hover, setHover] = useState(false)
  // const [strike, setStrike] = useState(false)

  const boxRef = useRef();

  useFrame( ({clock}) => {
    // boxRef.current.rotation.x = Math.sin(clock.getElapsedTime());
    boxRef.current.rotation.y = Math.sin(clock.getElapsedTime())/2;
    boxRef.current.rotation.z = Math.sin(clock.getElapsedTime())/2;
    // boxRef.current.scale += 0.1;
    // boxRef.current.position.x += 0.01;
  })

  return(
    <mesh
      {...props}
      ref = {boxRef}
      rotation-x = {Math.PI *0.25}
      rotation-y = {Math.PI *0.25}
      rotation-z = {Math.PI *0.25}
      // scale = {2}
      position={[-1,0,0]}
      // onClick = {(e) => Box()}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e)=> setHover(false)}
    >
      <boxBufferGeometry
        args={[2,0.2,0.2]}
        attach="geometry" />
      <meshLambertMaterial attach="material"  color={hover ? "red" : "green"} />
      {/* <sphereBufferGeometry
        // args={[2,2,2]}
        attach="geometry" />
      <meshLambertMaterial attach="material"  color={hover ? "red" : "green"} /> */}
    </mesh>
  )
}

function App() {
  return (
    <Canvas>
      <OrbitControls/>
      <Stars/>
      <ambientLight intensity={0.5}/>
      {/* <directionalLight color="blue" position={[0, 0, 5]} /> */}
      <spotLight position={[10,15,10]} angle={0.3} />
      <Box />
      <Sphere/>
    </Canvas>
  )
}

export default App