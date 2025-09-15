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
import techxhibit from "../../images/speakers/techxhibit.png";
import techEscapeRoom from "../../images/speakers/techEscapeRoom.png";
import event3 from "../../images/speakers/3.png";
import GradientButton from "../helpers/GradientButton";
import SectionTitle from "../helpers/SectionTitle";
import { useRouter } from "next/router";
const AboutEvent = () => {
    const router = useRouter();
  const eventsData = [
    {
      name: "Tech Escape Room",
    
      image: techEscapeRoom,
      color: "#7ce6e2",
      description: "Trapped inside a simulated AI world, you’ll need to crack tech puzzles, decode hidden passwords, and outsmart the system to break free and reach the next round.",
       closed: false

    },
    {
      name: "Techxhibit",
    
      image: techxhibit,
      color: "#4999D0",
      description: "Project Exhibition: A platform to showcase innovative tech projects, from software to hardware, highlighting creativity, problem-solving, and real-world applications.",
      closed: false

    },
      {
      name: "E Sports",
    
      image: techEscapeRoom,
      color: "#7ce6e2",
      description: "Trapped inside a simulated AI world, you’ll need to crack tech puzzles, decode hidden passwords, and outsmart the system to break free and reach the next round.",
       closed: false

    },
    {
      name: "Think N Blink",
    
      image: techxhibit,
      color: "#4999D0",
      description: "Project Exhibition: A platform to showcase innovative tech projects, from software to hardware, highlighting creativity, problem-solving, and real-world applications",
      closed: false

    },
    
      
  ];

  const largeScreenRanges = [1100, 2480]
  const smallScreenRanges = [2150, 5500]

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

  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      console.log('Scroll Y:', value);
    });
    return unsubscribe;
  }, [scrollY]);

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
        <div className="relative w-full max-w-7xl mx-auto my-16 flex gap-12 flex-col sm:flex-col md:flex-row lg:flex-row justify-between px-4 sm:px-6 lg:px-8">
          {eventsData.map((eventObj, index) => (
            <div
              key={index}
              onClick={() => !eventObj.closed && router.push(`/registration/${eventObj.name.toLowerCase().replace(/\s+/g, '-')}`)}
className={`flex flex-col items-center mt-10  gap-4 h-[400px] sm:h-[500px] lg:h-[400px] lg:mr-12 group transition-transform duration-300 ${eventObj.closed ? "cursor-not-allowed" : "cursor-pointer"} lg:scale-[1.2]
                order-first lg:order-none w-full sm:w-1/2 lg:w-1/3`}
            >
              <Tilt
                scale={1.2}
                glareEnable
                glareMaxOpacity={0.5}
                glareColor={eventObj.color}
                glarePosition="all"
                className={`relative flex justify-center items-center ${eventObj.closed ? "cursor-not-allowed" : "cursor-pointer"} transition-transform duration-300 z-100 group-hover:z-20 group-hover:scale-105`}
              >
                <Image
                  src={eventObj.image}
                  alt={eventObj.name}
                  width={600}
                  height={600}
                  className={`rounded-md shadow-md transition-transform duration-400 group-hover:opacity-25 lg:scale-[1.15] rounded-xl`}
                />
                <div className="absolute flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-white text-center text-sm lg:text-sm lg:mx-6">{eventObj.description}</p>
                </div>
              </Tilt>

              <Tilt
                scale={1.5}
                className={`flex transition-transform duration-300 z-10 group-hover:z-20 group-hover:scale-105`}
              >
                <div className={`text-center z-10 sm:mt-2 md:mt-4 lg:mt-0`}>
                  <GradientButton title={eventObj.closed ? `${eventObj.name} Closed!` : `Register to ${eventObj.name}`}  color={eventObj.color} closed={eventObj.closed} />
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