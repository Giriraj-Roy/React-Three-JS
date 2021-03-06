import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
// import Text from './components/Text';
import { extend } from '@react-three/fiber'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'
import macondo_regular from './assets/Macondo_Regular.json'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import {useInterval} from 'usehooks-ts'
import {AnimatedBox, AnimatedBox2} from './components/AnimateBox'

extend({ TextGeometry })
const font = new FontLoader().parse(macondo_regular);

// function Sphere({props}){

//    const [hover, setHover] = useState(false)

//   const sphRef = useRef();

//   useFrame( ({clock}) => {
//     sphRef.current.rotation.x += 0.01;
//     sphRef.current.rotation.y += 0.01;
//     sphRef.current.rotation.z += 0.1;
//     sphRef.current.scale += 0.1;
//     sphRef.current.position.y = -1-Math.sin(clock.getElapsedTime())/4;
//   })

//   return(
//     <mesh
//       {...props}
//       ref = {sphRef}
//       rotation-x = {Math.PI *0.25}
//       rotation-y = {Math.PI *0.25}
//       rotation-z = {Math.PI *0.25}
//       scale = {2}
//       position={[-2,-1.5,0]}
//       onClick = {(e) => Box()}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e)=> setHover(false)}
//     >

//       <sphereBufferGeometry
//         args={[2,2,2]}
//         attach="geometry" />
//       <meshLambertMaterial attach="material"  color={"blue"} />
//     </mesh>
//   )
// }

// function AnimatedText({props}) {

//   const [state, setState] = useState(true)
//   useInterval(() => setState((s) => !s), 1000)

//   const ref =  useRef();
//   useFrame( ({clock}) => {
//     let temp = Math.cos(clock.getElapsedTime())/30;
//     ref.current.scale.x +=  state ? temp : -1*temp;
//     ref.current.scale.y +=   state ? temp : -1*temp;
//     ref.current.scale.z +=  state ? temp : -1*temp;
//     ref.current.position.x += temp //Math.sin(clock.getElapsedTime());
//     ref.current.position.y += temp //Math.sin(clock.getElapsedTime());
//     ref.current.position.z += temp //Math.sin(clock.getElapsedTime());
//     ref.current.position.x = temp;
//     ref.current.position.y = 0.1*(Math.sqrt(ref.current.position.x * ref.current.position.x +0.01))
//     console.log(ref.current.position.y);
//     state ? (ref.current.position.x +=  state ? temp : -1*temp) : (ref.current.position.y +=  state ? temp : -1*temp)

//   })
//   extend({ TextGeometry })
//   return (
//     <mesh
//     {...props}
//     ref = {ref}
//     scale={[0.1, 0.1, 0.1]}
//     >
//       <textGeometry args={['ROY', {font, size:1, height:1}]}/>
//       <meshPhysicalMaterial attach="material" color="white"/>
//     </mesh>
//   )
// }


// function Box({props}){

//   const [hover, setHover] = useState(false)
//   // const [strike, setStrike] = useState(false)
//   const [state, setState] = useState(true)
//   useInterval(() => setState((s) => !s), 1000)

//   const boxRef = useRef();
//   // const reFlow = useReflow();

//   useFrame( ({clock}) => {
//     boxRef.current.rotation.x = Math.sin(clock.getElapsedTime());
//     boxRef.current.rotation.y = Math.sin(clock.getElapsedTime())/2;
//     boxRef.current.rotation.z = Math.sin(clock.getElapsedTime())/2;
//     // boxRef.current.scale.x = 1 + Math.sin(clock.getElapsedTime());
//     // boxRef.current.scale.y = 1 + Math.sin(clock.getElapsedTime());
//     // boxRef.current.scale.z = 1 + Math.sin(clock.getElapsedTime());
//     boxRef.current.position.x += state ? 0.001: -0.001;
//   })

//   return(
//     <mesh
//       {...props}
//       ref = {boxRef}
//       rotation-x = {Math.PI *0.25}
//       rotation-y = {Math.PI *0.25}
//       rotation-z = {Math.PI *0.25}
//       scale = {[0.5,0.5,0.5]}
//       // position={[-1,0,0]}
//       // onClick = {(e) => Box()}
//       onPointerOver={(e) => setHover(true)}
//       onPointerOut={(e)=> setHover(false)}
//     >
//       <boxBufferGeometry
//         args={[2,2,2]}
//         attach="geometry" />
//       <meshLambertMaterial attach="material"  color={hover ? "red" : "white"} />
//       {/* <textGeometry args={['ROY', {font, size:1, height:1}]}/>
//       <meshPhysicalMaterial attach="material" color="white"/> */}
//     </mesh>
//   )
// }




function App() {
  return (
    <>
      <Navbar/>
      <Canvas>
        <OrbitControls/>
        {/* <Stars/> */}
        {/* <Text/> */}
        <ambientLight intensity={0.5}/>
        <directionalLight color="red  " position={[0, 0, 5]} />
        <spotLight position={[1,1,1]} angle={0.1} />
        {/* <Box position={[0,0,0]} /> */}
        {/* <Sphere/> */}
        <AnimatedBox position={[-10,-10,0]}/>
        <AnimatedBox2 position={[-10,-10,0]}/>
        <AnimatedBox position={[-100,10,0]}/>
        <AnimatedBox2 position={[-100,10,0]}/>
        {/* <AnimatedText position={[100,0,0]}/> */}
      </Canvas>
    </>
  )
}

export default App