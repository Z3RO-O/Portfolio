import { Canvas } from '@react-three/fiber';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introdata, meta } from '@/content_option';
import { Link } from 'react-router-dom';
import { Suspense, useState } from 'react';
import Loader from '@/components/common/Loader';
import Mask from '@/components/models/mask';

const Home = () => {
  const adjustMaskForScreenSize = (): [
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ] => {
    const screenScale: [number, number, number] = [2.5, 2.5, 2];
    const screenPosition: [number, number, number] = [0, -25, -40];
    const rotation: [number, number, number] = [0.1, -0.5, 0];

    return [screenScale, screenPosition, rotation];
  };

  const [maskScale, maskPosition, rotation] = adjustMaskForScreenSize();
  const [, setCurrentStage] = useState<number | null>(1);
  const [isRotating, setIsRotating] = useState<boolean>(false);

  return (
    <HelmetProvider>
      <section
        id='home'
        className='home flex-1 relative w-full transition-all duration-500 ease-in'
      >
        <Helmet>
          <meta charSet='utf-8' />
          <title> {meta.title}</title>
          <meta name='description' content={meta.description} />
        </Helmet>
        <div className='h-screen min-h-[700px] -mt-[60px] block lg:flex lg:items-center max-lg:h-auto'>
          <div className='w-full lg:w-1/2 order-1 lg:order-2 h-full bg-cover bg-center min-h-[700px] relative saturate-50 max-lg:h-[600px] max-lg:min-h-[75vh] max-lg:mb-[30px]'>
            <Canvas
              className={`h-full bg-transparent ${
                isRotating ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={5} />
                <ambientLight intensity={0.5} />
                <hemisphereLight
                  color='#b1e1ff'
                  groundColor='#000000'
                  intensity={1}
                />
                <Mask
                  scale={maskScale}
                  rotation={rotation}
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                  setCurrentStage={setCurrentStage}
                  position={maskPosition}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className='w-full lg:w-1/2 order-2 lg:order-1 h-full lg:flex lg:justify-center'>
            <div className='self-center'>
              <div className='max-w-[450px] mx-auto max-lg:max-w-[700px] max-lg:px-5'>
                <h2 className='mb-2 text-3xl font-bold'>{introdata.title}</h2>
                <h1 className='text-3xl mb-8 font-bold'>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className='mb-4'>{introdata.description[0]}</p>
                <p className='mb-8'>{introdata.description[1]}</p>
                <div className='flex flex-wrap gap-6'>
                  <Link
                    to='/projects'
                    className='text-(--secondary) hover:text-(--secondary) no-underline'
                  >
                    <div className='btn-animated inline-block py-1 px-[19px] text-(--secondary) relative border-2 border-(--secondary) overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.55,0,0.1,1)] cursor-pointer rounded-none hover:shadow-[8px_8px_0px_var(--secondary),-8px_-8px_0px_var(--secondary)] group'>
                      <span className='relative z-10'>My Projects</span>
                      <div className='absolute w-full h-full bg-black top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.55,0,0.1,1)] -z-40'></div>
                      <div className='absolute w-full h-full bg-(--primary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
                      <div className='absolute w-full h-full bg-(--secondary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
                    </div>
                  </Link>
                  <Link
                    to='/about'
                    className='text-(--secondary) hover:text-(--secondary) no-underline'
                  >
                    <div className='inline-block py-1 px-[19px] text-(--primary) relative border-2 border-(--secondary) overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.55,0,0.1,1)] cursor-pointer rounded-none bg-(--secondary) hover:shadow-[8px_8px_0px_var(--secondary),-8px_-8px_0px_var(--secondary)] group'>
                      About
                      <div className='absolute w-full h-full bg-black top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.55,0,0.1,1)] -z-40'></div>
                      <div className='absolute w-full h-full bg-(--primary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
                      <div className='absolute w-full h-full bg-(--secondary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
                    </div>
                  </Link>
                  <Link to='/contact' className='no-underline'>
                    <div className='btn-animated inline-block py-1 px-[19px] text-(--secondary) relative border-2 border-(--secondary) overflow-hidden transition-all duration-600 ease-[cubic-bezier(0.55,0,0.1,1)] cursor-pointer rounded-none hover:shadow-[8px_8px_0px_var(--secondary),-8px_-8px_0px_var(--secondary)] group'>
                      <span className='relative z-10'>Contact Me</span>
                      <div className='absolute w-full h-full bg-black top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.55,0,0.1,1)] -z-40'></div>
                      <div className='absolute w-full h-full bg-(--primary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
                      <div className='absolute w-full h-full bg-(--secondary) top-0 left-0 translate-y-[90px] group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.55,0,0.1,1)] -z-30'></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default Home;
