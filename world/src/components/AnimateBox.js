import { useFrame, useLoader } from '@react-three/fiber';
import React, { useRef, useState } from 'react'
import { TextureLoader } from 'three';
import { useInterval } from 'usehooks-ts';


export function AnimatedBox({props}) {

    const [state, setState] = useState(true)
    useInterval(() => setState((s) => !s), 1500)


    // let t=0;
    // const colorMap = useLoader(TextureLoader, '../assets/img.png');

    const ref =  useRef();
    useFrame( ({clock}) => {
      let temp =  Math.sin(clock.getElapsedTime())/50;
      ref.current.scale.x +=  state ? temp/10 : -1*temp/10;
      ref.current.scale.y +=   state ? temp/10 : -1*temp/10;
      ref.current.scale.z +=  state ? temp/10 : -1*temp/10;
      ref.current.position.x += state ? temp : -temp //Math.sin(clock.getElapsedTime());
      // ref.current.position.y += temp //Math.sin(clock.getElapsedTime());
      // ref.current.position.z += temp //Math.sin(clock.getElapsedTime());
      // while(t < 1){
      //   t += 0.01;
      //   ref.current.position.x = 20*Math.cos(t);
      //   ref.current.position.z = 20*Math.sin(t);
      //
      // }
      // ref.current.position.y = 0.1*(Math.sqrt(ref.current.position.x * ref.current.position.x +0.01))
  
      // state ? (ref.current.position.x +=  state ? temp : -1*temp) : (ref.current.position.y +=  state ? temp : -1*temp)
  
    })
    return (
      <mesh
      {...props}
      ref = {ref}
      scale={[0.1, 0.1, 0.1]}
      >
        <boxBufferGeometry attach="geometry"  />
        <meshLambertMaterial attach="material"  color={state ? "yellow": "white" } />
        {/* <meshStandardMaterial attach="material" map={colorMap}/> */}
      </mesh>
    )
}
export function AnimatedBox2({props}) {

    const [state, setState] = useState(true)
    useInterval(() => setState((s) => !s), 1500)


    // let t=0;

    const ref =  useRef();
    useFrame( ({clock}) => {
      let temp =  Math.sin(clock.getElapsedTime())/50;
      ref.current.scale.x +=  state ? temp/10 : -1*temp/10;
      ref.current.scale.y +=   state ? temp/10 : -1*temp/10;
      ref.current.scale.z +=  state ? temp/10 : -1*temp/10;
      ref.current.position.y += state ? temp : -temp //Math.sin(clock.getElapsedTime());
      // ref.current.position.y += temp //Math.sin(clock.getElapsedTime());
      // ref.current.position.z += temp //Math.sin(clock.getElapsedTime());
      // while(t < 1){
      //   t += 0.01;
      //   ref.current.position.x = 20*Math.cos(t);
      //   ref.current.position.z = 20*Math.sin(t);
      //
      // }
      // ref.current.position.y = 0.1*(Math.sqrt(ref.current.position.x * ref.current.position.x +0.01))

      // state ? (ref.current.position.x +=  state ? temp : -1*temp) : (ref.current.position.y +=  state ? temp : -1*temp)

    })
    return (
      <mesh
      {...props}
      ref = {ref}
      scale={[0.1, 0.1, 0.1]}
      >
        <boxBufferGeometry attach="geometry"  />
        <meshLambertMaterial attach="material"  color={state ? "red": "white" } />
      </mesh>
    )
  }

export default AnimatedBox;