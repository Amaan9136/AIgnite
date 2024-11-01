import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import AIML_Logo from "../../images/logos/AIML-LOGO-WHITE.png";
import BackGround from "../../images/sectionsAssets/Hero-background.png";
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
  const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latestScrollY) => {
  //   console.log(latestScrollY);
  // });

  const bgOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const scaleTitle = useTransform(scrollY, [0, 400], [1, 1.2]);
  const titleY = useTransform(scrollY, [0, 470, 800], ["0%", "360px", "340px"]);
  const RegBtnY = useTransform(scrollY, [0, 600], ["0%", "340px"]);
  const RegBtnOpa = useTransform(scrollY, [0, 600], [1, 0]);
  const counterOpacity = useTransform(scrollY, [0, 450], [1, 0]);
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
        <Animate className="flex flex-col lg:gap-0 relative">
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
            <Animate delay={8} className="flex flex-col lg:gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <Tilt className="cursor-pointer" tiltMaxAngleX={15} tiltMaxAngleY={30}>
                <motion.h1
                  style={{ scale: scaleTitle, y: titleY }}
                  className="flex lg:mb-6 lg:m-0 font-bold justify-center lg:justify-start lg:text-left text-4xl lg:text-6xl leading-[4.5rem]"
                >
                  AIgnite&nbsp;
                  <Typewriter
                    options={{
                      strings: [
                        "| Code",
                        "| Build",
                        "| Innovate",
                        "| Inspire",
                        "| Empower",
                        "| Transform",
                        "| Develop",
                        "| Create",
                        "| Explore",
                        "| Solve",
                        "| Hack",
                        "| Engage",
                        "| Lead",
                        "| Master",
                        "| Advance",
                        "| Drive",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </motion.h1>
                <motion.p
                  style={{ scale: scaleTitle, opacity: bgOpacity, y: titleY }}
                  className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl"
                >
                  Empowering Intelligence, Enhancing Humanity.
                </motion.p>

              </Tilt>
                <Animate delay={11} className="flex items-end justify-center lg:justify-start cursor-pointer">
                <motion.div 
                  style={{ opacity: counterOpacity }}
                className="relative lg:h-[67px] bounce h-[50px] w-[50px] lg:w-[67px]">
                  <Image src={Arrow} layout="fill" alt="Arrow" />
                </motion.div>
                <motion.div 
                  style={{ scale: scaleTitle, x: RegBtnY, opacity: RegBtnOpa }}
                className="mb-[-50px] cursor-not-allowed">
                  <Purpulebutton title={"Register Now!"} redirect={"#about-event"}/>
                </motion.div>
              </Animate>
            </Animate>

            <Animate delay={5} x={-60} y={80} duration={1} className="flex-1 pt-10 md:pt-4 lg:pt-0 order-first lg:order-last">
              <Tilt className="cursor-pointer" tiltMaxAngleX={60} tiltMaxAngleY={40} transitionSpeed={500}>
                <motion.div style={{opacity: bgOpacity, scale: scaleTitle}}>
                <Image src={AIML_Logo} width={420} height={420} priority={2} alt="AIML Logo" className="lg:ml-24 w-[12rem] md:w-[350px] lg:w-[380px]"/>
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
