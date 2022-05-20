import { extend } from '@react-three/fiber'
import {TextGeometry} from 'three/examples/jsm/geometries/TextGeometry'
import macondo_regular from '../assets/Macondo_Regular.json'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

extend({ TextGeometry })


export default function Text(){
    const font = new FontLoader().parse(macondo_regular)
    return(
        <mesh>
            <textGeometry args={['Roy', {font, size:1, height:1}]}/>
            <meshPhysicalMaterial attach="material" color="white"/>
        </mesh>
    )
}