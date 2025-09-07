import "./style.css";
import { Canvas } from "@react-three/fiber";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "@/content_option";
import { Link } from "react-router-dom";
import { Suspense, useState } from "react";
import Loader from "@/components/loader";
import Mask from "@/models/mask";

export const Home = () => {
  const adjustMaskForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -25, -40];
    let rotation = [0.1, -0.5, 0];
    if (window.innerWidth < 768) screenScale = [2.5, 2.5, 2];
    else screenScale = [2.5, 2.5, 2];
    return [screenScale, screenPosition, rotation];
  };

  const [maskScale, maskPosition, rotation] = adjustMaskForScreenSize();
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="h_bg-image order-1 order-lg-2 h-100 ">
            <Canvas
              className={`h_bg-image  order-1 order-lg-2 h-100 bg-transparent ${
                isRotating ? "cursor-grabbing" : "cursor-grab"
              }`}
              camera={{ near: 0.1, far: 1000 }}
            >
              <Suspense fallback={<Loader />}>
                <directionalLight position={[1, 1, 1]} intensity={5} />
                <ambientLight intensity={0.5} />
                <hemisphereLight
                  skyColor="#b1e1ff"
                  groundColor="#000000"
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
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
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
                <p className="mb-1x">{introdata.description[0]}</p>
                <p className="mb-1x">{introdata.description[1]}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/projects" className="text_2">
                    <div id="button_h" className="ac_btn btn ">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      About
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
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
