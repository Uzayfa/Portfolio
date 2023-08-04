import { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Today {29th of july 2023} I worked on the Adamhead 3D model, while working on it, we were running into syntax error and we spent//
// almost 45mins looking for solution, fortunately we found it after over 45mins search, it was the curly bracket//
// {} these brackets were added in the export in the index.js file//
// not that the {} bracket was wrong, it was the path we called it from (from './canvas';) we added//
// from './canvas/Adamhead'; hence the problem.//
// if we were to add the Adamhead at the end of the path, we need to remove these {} and it will run//

const Adamhead = ( { isMobile }) => {
  const head = useGLTF('./Adam_head/adamHead.gltf');
 
  return (
   <mesh>
    <hemisphereLight intensity={-100}
    groundColor='default' />
    <pointLight intensity={100} position={[0, 0, 0]} />
    <spotLight 
      position={[-20, 50, 10]}
      angle={0}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <primitive 
      object={head.scene}
      scale={isMobile ? 0.85 : 0.75}
      position={isMobile ? [0, -2.5, 0] : [0.5, -2.5, 3]}
      rotation={[-0.01, -0.2, -0.1]}
     />
   </mesh>
  )
}

const AdamheadCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Adamhead isMobile={isMobile}/>
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default AdamheadCanvas