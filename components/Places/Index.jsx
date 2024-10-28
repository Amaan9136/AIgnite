import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import atom from "../../images/shapes/atom.png";
import event1 from "../../images/speakers/1.png";
import event2 from "../../images/speakers/2.png";
import event3 from "../../images/speakers/3.png";
import SectionTitle from "../helpers/SectionTitle";

const Places = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const placesData = [
    {
      name: "Reverse Engineering",
      image: event1,
      color: "#7ce6e2",
      description: "Dive into the art of deconstructing complex systems, discovering their inner workings, and unlocking new perspectives in technology and innovation."
    },
    {
      name: "Shark Tekz",
      image: event2,
      color: "#4999D0",
      description: "Experience the thrill of rapid innovation as creative minds pitch groundbreaking tech ideas in a high-stakes environment where innovation meets competition."
    },
    {
      name: "E-Sports",
      image: event3,
      color: "#fe8400",
      description: "Join the excitement of competitive gaming with thrilling matches, elite players, and a vibrant community celebrating the world of esports."
    },
  ];

  const largeScreenRanges = [1500, 1900];
  const smallScreenRanges = [1800, 2650];

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

    window.addEventListener("resize", updateRanges);
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  const eventOpacity = useTransform(scrollY, scrollRange, [1, 0]);

  return (
    <section id="places" className="section-container pt-6 mb-20">
      <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px] lg:w-[47px] lg:h-[50px]">
        <Image src={atom} alt="atom" />
      </div>

      <SectionTitle title={"Places"} delay={12} />

      <motion.div
        className="flex justify-center items-center"
        style={{ opacity: eventOpacity }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)

            console.log(activeIndex);
            
          }}
          className=""
        >
          {placesData.map((eventObj, index) => (
            <SwiperSlide key={index} className="flex flex-col col-6 items-center mt-28 group">
              <Tilt
                tiltMaxAngleX={40}
                tiltMaxAngleY={30}
                scale={1.1}
                transitionSpeed={300}
                glareEnable={true}
                glareMaxOpacity={2}
                glareColor={eventObj.color}
                glarePosition="all"
                className={`cursor-pointer `}
              >
                <Image
                  src={eventObj.image}
                  alt={eventObj.name}
                  width={500}
                  height={500}
                  className={`rounded-lg shadow-md ${index == activeIndex ? "lg:scale-125" : "lg:scale-90"}`}
                />
              </Tilt>

                <div
                      className="absolute top-10 left-0 w-full bg-black bg-opacity-60 text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                                     <p className={`text-xl font-semibold mt-4 group-hover:opacity-100 transition-opacity duration-300 ${index == activeIndex ? "lg:scale-125" : "lg:scale-90 hidden"}`}>
                  {eventObj.description}
                </p>
                    </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Places;
