import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import AIML_Logo from "../../images/logos/AIML-LOGO-WHITE.png";
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
  return (
    <section id="home" className="min-h-screen hero-bg">
      <div className="section-container pb-24 md:pb-0">
        <Navbar />
        <Animate className="flex flex-col gap-16 lg:gap-0 relative">
          <div className="w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
            <Image src={Atom} />
          </div>
          <div className="w-12 h-12 absolute top-12 left-[90%] lg:top-4 lg:left-1/4">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-16 h-16 absolute top-4 right-16">
            <Image src={Maqam} />
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <Tilt className="cursor-pointer"
                tiltMaxAngleX={15}
                tiltMaxAngleY={30}>
                <Animate delay={7} tag="h1" x={60} className="flex font-bold text-sm justify-center lg:justify-start lg:text-left text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]">
                  AIgnite&nbsp;
                  <Typewriter
                    options={{
                      strings: ["| Code", "| Shark Tech", "| Blow PC's"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Animate>
              </Tilt>

              <Tilt className="cursor-pointer"
                tiltMaxAngleX={30}
                tiltMaxAngleY={15}>
                <Animate delay={12} x={-60} tag="p" className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                  Your chance to discover the Quantum Computing world!
                </Animate>
              </Tilt>
              <Animate delay={13} className="flex items-end cursor-pointer">
                <div className="relative h-[67px] bounce w-[67px] 2xl:w-[101px] 2xl:h-[114px]">
                  <Image src={Arrow} layout="fill" />
                </div>
                <div className="mb-[-50px] 2xl:mb-[-110px] cursor-not-allowed">
                  <Purpulebutton title={"Register Now!"} />
                </div>
              </Animate>
            </div>

            <Animate delay={13} x={-60} y={80} duration={1} className="flex-1 pt-10 lg:pt-0 order-first lg:order-last">
              <Tilt className="cursor-pointer"
                tiltMaxAngleX={60}
                tiltMaxAngleY={40}
                transitionSpeed={500}
              // glareEnable={true}
              // glareMaxOpacity={0.5}
              // glareColor="#fff"
              // glarePosition="top"
              >
                <Image src={AIML_Logo} width={"450px"} height={"450px"} priority={2} />
              </Tilt>
            </Animate>
          </div>

          <CounterContainer countDownLimit="2024-11-08T00:00:00" />

          <div className="w-12 h-12 absolute bottom-16 left-8">
            <Image src={Atom} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-8">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-2/4">
            <Image src={Computer} />
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Hero;
