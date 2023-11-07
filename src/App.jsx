/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import Planet from './Planet';
function App ()
{
  return ( <div style={ { width: window.innerWidth, height: window.innerHeight } }>
    <Canvas camera={ { position: [ 0, 100, 250 ] } } style={ { height: window.innerHeight, width: window.innerWidth } }>
      <directionalLight color="#f48037" intensity={ .6 } position={ [ -100, 100, 0 ] } />
      <directionalLight color="white" intensity={ 2 } position={ [ -100, 100, 0 ] } />
      <ambientLight intensity={ .1 } />
      <OrbitControls />
      <Planet />
    </Canvas>
  </div> )
}

export default App
