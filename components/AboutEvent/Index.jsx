import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import event1 from "../../images/speakers/1.png";
import event2 from "../../images/speakers/2.png";
import event3 from "../../images/speakers/3.png";
import GradientButton from "../helpers/GradientButton";
import SectionTitle from "../helpers/SectionTitle";

const AboutEvent = () => {
  const eventsData = [
    {
      name: "Reverse Hacking",
      form_path: "https://tally.so/r/nGBrxO",
      image: event1,
      color: "#7ce6e2",
      description: "Dive into the art of deconstructing complex systems, discovering their inner workings, and unlocking new perspectives in technology and innovation.",
      closed: true

    },
    {
      name: "Sharkathon",
      form_path: "https://tally.so/r/wb4lq7",
      image: event2,
      color: "#4999D0",
      description: "Experience the thrill of rapid innovation as creative minds pitch groundbreaking tech ideas in a high-stakes environment where innovation meets competition.",
      closed: true

    },
    {
      name: "E-Sports",
      form_path: "https://tally.so/r/nrrK4o",
      image: event3,
      color: "#fe8400",
      description: "Join the excitement of competitive gaming with thrilling matches, elite players, and a vibrant community celebrating the world of esports.",
      closed: true

    },
  ];

  const largeScreenRanges = [1100, 1480]
  const smallScreenRanges = [2150, 2300]

  const { scrollY } = useScroll();
  const [scrollRange, setScrollRanges] = useState(largeScreenRanges);

  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth <= 1200) {
        setScrollRanges(smallScreenRanges); // Mobile
      } else {
        setScrollRanges(largeScreenRanges); // Desktop
      }
    };

    updateRanges();

    window.addEventListener('resize', updateRanges);
    return () => window.removeEventListener('resize', updateRanges);
  }, []);

  const eventOpacity = useTransform(scrollY, scrollRange, [1, 0.3]);

  return (
    <section id="about-event" className="section-container pt-6 mb-20">

      <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px]  lg:w-[47px] lg:h-[50px]">
        <Image
          src={atom}
          alt="atom"
        />
      </div>

      <SectionTitle title={"AIgnite Events"} delay={12} />

      <div className="relative">
        <div className="absolute top-[460px] right-0 sm:top-[-70px] sm:right-0 lg:top-[-32px] lg:right-0  w-[68px] h-[58px] lg:w-[106px] lg:h-[74px]">
          <Image
            src={GDGAlgiers}
            alt="GDG"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="absolute top-[650px] sm:top-[450px] right-[122px]  h-[48px] w-[48px] lg:right-[10px] 2xl:right-[10px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
            <Image
              src={globe}
              alt="globe"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-[-35px] left-[-25px] h-[60px] w-[60px]  lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
            <Image
              src={computer}
              alt="computer"
            />
          </div>

          {/* Events */}
          <motion.div className="flex justify-center items-center" style={{ opacity: eventOpacity }}>
        <div className="relative w-4/5 my-16 flex gap-16 flex-col lg:flex-row justify-between">
          {eventsData.map((eventObj, index) => (
            <div
              key={index}
              onClick={() => !eventObj.closed && window.open(eventObj.form_path, "_blank")}
              className={`flex flex-col items-center group transition-transform duration-300 ${eventObj.closed ? "cursor-not-allowed" : "cursor-pointer"} ${index === 0 || index === 2 ? 'lg:scale-100' : 'lg:scale-[1.2]'}
                ${index === 1 ? 'order-first' : 'order-last'} lg:order-none`}
            >
              <Tilt
                scale={1.2}
                glareEnable
                glareMaxOpacity={0.5}
                glareColor={eventObj.color}
                glarePosition="all"
                className={`relative flex justify-center items-center ${eventObj.closed ? "cursor-not-allowed" : "cursor-pointer"} transition-transform duration-300 ${index === 1 ? "z-100" : "z-0"} group-hover:z-20 group-hover:scale-105`}
              >
                <Image
                  src={eventObj.image}
                  alt={eventObj.name}
                  width={600}
                  height={600}
                  className={`rounded-md shadow-md transition-transform duration-400 group-hover:opacity-25 ${index === 1 ? "lg:scale-[1.15] rounded-xl" : "lg:scale-[0.9]"}`}
                />
                <div className="absolute flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-white text-center lg:mx-6">{eventObj.description}</p>
                </div>
              </Tilt>

              <Tilt
                scale={1.5}
                className={`flex transition-transform duration-300 ${index === 1 ? "z-10" : "z-0"} group-hover:z-20 group-hover:scale-105`}
              >
                <div className={`text-center z-10 ${index == 0 && "w-4/5 mx-auto lg:w-auto"} ${index == 1 ? "lg:-mt-8" : "lg:-mt-16"}`}>
                  <GradientButton title={eventObj.closed ? `${eventObj.name} Closed!` : `Register to ${eventObj.name}`} redirect={eventObj.form_path} color={eventObj.color} closed={eventObj.closed} />
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </motion.div>


        </div>

        <div className="relative">
          <div className="absolute top-[400px] left-[-30px] sm:top-[340px] sm:left-[-30px] h-[53px] w-[56px] lg:h-[66px] lg:w-[70px] 2xl:w-[105px] 2xl:h-[99px]">
            <Image
              src={atom}
              alt="atom"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[-35px] left-[-25px] h-[38px] w-[38px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
            <Image
              src={globe}
              alt="globe"
            />
          </div>
        </div>

      </div>
      <div className="relative">
        <div className="absolute invisible sm:visible right-[640px] h-[46px] w-[61px] 2xl:h-[93px] 2xl:w-[93]">
          <Image
            src={computer}
            alt="computer"
          />
        </div>
      </div>

    </section>

  );
};

export default AboutEvent;