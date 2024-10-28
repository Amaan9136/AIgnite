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
import SectionTitle from "../helpers/SectionTitle";
import YellowButton from "../helpers/YellowButton";

const AboutEvent = () => {
  const eventsData = [
    {
      name: "Reverse Engineering",
      form_path: "https://www.amaan.com",
      image: event1,
      color: "#7ce6e2",
      description: "Dive into the art of deconstructing complex systems, discovering their inner workings, and unlocking new perspectives in technology and innovation."
    },
    {
      name: "Shark Tekz",
      form_path: "",
      image: event2,
      color: "#4999D0",
      description: "Experience the thrill of rapid innovation as creative minds pitch groundbreaking tech ideas in a high-stakes environment where innovation meets competition."
    },
    {
      name: "E-Sports",
      form_path: "",
      image: event3,
      color: "#fe8400",
      description: "Join the excitement of competitive gaming with thrilling matches, elite players, and a vibrant community celebrating the world of esports."
    },
  ];

  const largeScreenRanges = [1000, 1380]
  const smallScreenRanges = [1800, 2650]

  const { scrollY } = useScroll();
  const [scrollRange, setScrollRanges] = useState(largeScreenRanges);

  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth <= 768) {
        setScrollRanges(smallScreenRanges); // Mobile
      } else {
        setScrollRanges(largeScreenRanges); // Desktop
      }
    };

    updateRanges();

    window.addEventListener('resize', updateRanges);
    return () => window.removeEventListener('resize', updateRanges);
  }, []);

  const eventOpacity = useTransform(scrollY, scrollRange, [1, 0]);

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
          <motion.div className="flex justify-center items-center"
          style={{ opacity: eventOpacity }}>
            <div className="relative w-4/5 my-16 flex gap-16 flex-col lg:flex-row justify-between">
              {eventsData.map((eventObj, index) => (
                <div
                  key={index}
                  onClick={()=>window.location.href = eventObj.form_path}
                  className={`flex flex-col items-center ${index === 0 || index === 2 ? 'lg:scale-100' : 'lg:scale-[1.2]'} 
        ${index === 1 ? 'order-first' : 'order-last'}
         lg:order-none`}
                // index === 1 is to make the 2nd image first (Shark Tech) in mobile view
                >
                  <Tilt
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={30}
                    scale={1.1}
                    transitionSpeed={300}
                    glareEnable={true}
                    glareMaxOpacity={2}
                    glareColor={eventObj.color}
                    glarePosition="all"
                    className="cursor-pointer relative group"
                  >
                    {/* Image with hover description */}
                    <Image
                      src={eventObj.image}
                      alt={eventObj.name}
                      width={500}
                      height={500}
                      className="rounded-lg shadow-md"
                    />

                    {/* Description overlay */}
                    <div
                      className="absolute top-10 left-0 w-full bg-black bg-opacity-60 text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <p className="text-xl font-semibold">{eventObj.description}</p>
                    </div>

                  </Tilt>

                  {/* Name Button */}
                  <div className="text-center mt-4 relative w-4/5 mx-auto z-10 -mt-20">
                    {/* <YellowButton title={eventObj.name} /> */}
                    <YellowButton title={eventObj.name} redirect={eventObj.form_path} />
                  </div>

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