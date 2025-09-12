import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../images/memories/1.jpeg";
import img2 from "../../images/memories/2.jpeg";
import img3 from "../../images/memories/3.jpeg"; 
import img4 from "../../images/memories/4.jpeg";
import img5 from "../../images/memories/5.jpeg";
import img6 from "../../images/memories/6.jpeg";         
import img7 from "../../images/memories/7.jpeg";
import img8 from "../../images/memories/8.jpeg";
import img9 from "../../images/memories/9.jpeg";
import img10 from "../../images/memories/10.jpeg";
import img11 from "../../images/memories/11.jpeg";
import img12 from "../../images/memories/12.jpeg";
import img13 from "../../images/memories/13.jpeg";
import img14 from "../../images/memories/14.jpeg";
import img15 from "../../images/memories/15.jpeg";
import img16 from "../../images/memories/16.jpeg";
import SectionTitle from "../helpers/SectionTitle";

const Memories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const placesData = [
  
    {
     
      image: img2,
      color: "#4A90E2",
     
    },
    {
     
      image: img3,
      color: "#F29B4E",
   
    },
      {
      
      image: img16,
      color: "#E76F51",
    
    },
    {
    
      image: img12,
      color: "#8CC8A5",
     
    },
    {
    
      image: img4,
      color: "#8CC8A5",
     
    },
      {
      
      image: img13,
      color: "#5DADE2",
   
    },
    {
      
      image: img5,
      color: "#5DADE2",
   
    },
      {
     
      image: img1,
      color: "#9BD4D4",
     
    },
    {
     
      image: img6,
      color: "#F57C00",
    
    },
    {
   
      image: img7,
      color: "#F4A261",
    
    },
    {
      
      image: img8,
      color: "#E76F51",
    
    },
     {
     
      image: img9,
      color: "#9BD4D4",
     
    },
    {
     
      image: img10,
      color: "#4A90E2",
     
    },
    {
     
      image: img11,
      color: "#F29B4E",
   
    },
    
  
    {
     
      image: img14,
      color: "#F57C00",
    
    },
    {
   
      image: img15,
      color: "#F4A261",
    
    },
  
  ];

  const { scrollY } = useScroll();
  const largeScreenRanges = [1800, 2200];
  const smallScreenRanges = [2900, 3000]
  const [scrollRange, setScrollRanges] = useState(largeScreenRanges);

  useEffect(() => {
    const updateRanges = () => {
      setScrollRanges(
        window.innerWidth <= 1200 ? smallScreenRanges : largeScreenRanges
      );
    };
    updateRanges();
    window.addEventListener("resize", updateRanges);
    setIsMounted(true);
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  const eventOpacity = useTransform(scrollY, scrollRange, [1, 0.3]);

  if (!isMounted) {
    return null;
  }

  return (
    <section id="places" className="section-container pt-6 relative">
      {/* Decorative Images */}

      {/* Section Title */}
      <SectionTitle title="Previous year Memories" delay={12} />

      <motion.div style={{ opacity: eventOpacity }}>
        <Swiper
          spaceBetween={30}
          centeredSlides
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }} // Make pagination clickable
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            768: {
              slidesPerView: 1, // 2 slides on small tablets
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger devices
            },
          }}
        >
          {placesData.map((place, index) => (
            <SwiperSlide
              key={index}
              onClick={() => window.open(place.map_link, "_blank")}
              className="group lg:my-20 my-12 "
            >
              <Tilt
                scale={index === activeIndex ? 1.2 : 1}
                glareEnable
                glareMaxOpacity={0.4}
                glareColor={place.color}
                glarePosition="all"
                className={`relative flex justify-center items-center cursor-pointer transition-transform duration-300`}
              >
                <Image
                  src={place.image}
                  alt={place.name}
                  width={600}
                  height={600}
                  className={`lg:w-[400px] w-[300px] lg:h-[400px] h-[300px] object-cover  object-center rounded-xl transition-transform duration-400 group-hover:opacity-80 ${
                    index === activeIndex
                      ? "lg:scale-[1.2] opacity-[0.9]"
                      : "lg:scale-[0.85] opacity-[0.65]"
                  }`}
                />
                <div className="absolute bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <h1 className="text-xl font-semibold text-white text-center px-12">
                    {place.name}
                  </h1> */}
                  {/* <p className="font-semibold text-white text-center px-12">
                    {place.description}
                  </p> */}
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Memories;
