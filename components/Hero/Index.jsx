import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import AIML_Logo from "../../images/logos/AIML-LOGO-WHITE.png";
import BackGround from "../../images/sectionsAssets/Hero-background.png";
// import BackGround from "../../images/sectionsAssets/Hero-background.jpg";
import Arrow from "../../images/shapes/Arrow.png";
import Atom from "../../images/shapes/atomWhite.png";
import Computer from "../../images/shapes/computerWhite.png";
import Globe from "../../images/shapes/globe.png";
import Maqam from "../../images/shapes/MaqamWhite.png";
import Animate from "../helpers/Animate-motion";
import Purpulebutton from "../helpers/Purpulebutton";
import CounterContainer from "./CounterContainer";
import Navbar from "./Navbar";

const Hero = () => {
  const { scrollX, scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scaleTitle = useTransform(scrollY, [0, 300], [1, 1.2]);
  const titleY = useTransform(scrollY, [0, 300], ["0%", "450px"]);
  const titleX = useTransform(scrollX, [0, 300], ["0%", "-450px"]);

  const RegBtnY = useTransform(scrollY, [0, 300], ["0%", "340px"]);
  const RegBtnX = useTransform(scrollX, [0, 300], ["0%", "-340px"]);

  const counterOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const counterX = useTransform(scrollY, [100, 500], ["0%", "-10%"]);


  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated background image with opacity transition */}
      <motion.div
        style={{ opacity: bgOpacity, y: -titleY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={BackGround}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full blur-sm"
        />
      </motion.div>

      <div className="section-container pb-24 md:pb-0 mb-6 lg:mb-0">
        <Navbar />
        <Animate className="flex flex-col gap-16 lg:gap-0 relative">
          <div className="w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
            <Image src={Atom} alt="Atom" />
          </div>
          <div className="w-12 h-12 absolute top-12 left-[90%] lg:top-4 lg:left-1/4">
            <Image src={Globe} alt="Globe" />
          </div>
          <div className="hidden lg:block w-16 h-16 absolute top-4 right-16">
            <Image src={Maqam} alt="Maqam" />
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            {/* Animated title and subtitle */}
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <Tilt className="cursor-pointer" tiltMaxAngleX={15} tiltMaxAngleY={30}>
                <motion.h1
                  style={{ scale: scaleTitle, y: titleY, x: titleX }}
                  className="flex font-bold text-sm justify-center lg:justify-start lg:text-left text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]"
                >
                  AIgnite&nbsp;
                  <Typewriter
                    options={{
                      strings: ["| Code", "| Shark Tech", "| Blow PC's"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </motion.h1>
              </Tilt>

              <Tilt className="cursor-pointer" tiltMaxAngleX={30} tiltMaxAngleY={15}>
                <motion.p
                  style={{ scale: scaleTitle, opacity: bgOpacity, y: titleY }}
                  className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]"
                >
                  Your chance to discover the Quantum Computing world!
                </motion.p>
              </Tilt>

              <Animate delay={13} className="flex items-end cursor-pointer">
                <motion.div 
                  style={{ opacity: counterOpacity }}
                className="relative h-[67px] bounce w-[67px] 2xl:w-[101px] 2xl:h-[114px]">
                  <Image src={Arrow} layout="fill" alt="Arrow" />
                </motion.div>
                <motion.div 
                  style={{ scale: scaleTitle, y: RegBtnY, x: RegBtnX, opacity: bgOpacity }}
                className="mb-[-50px] 2xl:mb-[-110px] cursor-not-allowed">
                  <Purpulebutton title={"Register Now!"} />
                </motion.div>
              </Animate>
            </div>

            <Animate delay={13} x={-60} y={80} duration={1} className="flex-1 pt-10 lg:pt-0 order-first lg:order-last">
              <Tilt className="cursor-pointer" tiltMaxAngleX={60} tiltMaxAngleY={40} transitionSpeed={500}>
                <motion.div style={{opacity: bgOpacity, x: RegBtnX, scale: scaleTitle}}>
                <Image src={AIML_Logo} width={450} height={450} priority={2} alt="AIML Logo" className="lg:ml-24"/>
                </motion.div>
              </Tilt>
            </Animate>
          </div>

          <motion.div style={{ opacity: counterOpacity, x: counterX, scale: scaleTitle }}>
            <CounterContainer countDownLimit="2024-11-08T00:00:00" />
          </motion.div>

          <div className="w-12 h-12 absolute bottom-16 left-8">
            <Image src={Atom} alt="Atom" />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-8">
            <Image src={Globe} alt="Globe" />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-2/4">
            <Image src={Computer} alt="Computer" />
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Hero;
