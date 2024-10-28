import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import place1 from "../../images/places/1.jpg";
import place2 from "../../images/places/2.jpg";
import place3 from "../../images/places/3.jpg";
import place4 from "../../images/places/4.jpg";
import place5 from "../../images/places/5.jpg";
import place6 from "../../images/places/6.jpg";
import SectionTitle from "../helpers/SectionTitle";

const Places = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const placesData = [
    {
      name: "Ethina bhuja",
      image: place1,
      color: "#7ce6e2",
      description: `Ethina Bhuja in Mudigere, Karnataka, is a popular trekking spot in the Charmadi range of the Western Ghats. Known as "Ox's Shoulder," it offers a moderately challenging trek with stunning views of green valleys and dense forests. The peak is famous for its unique rock formation resembling an Ox's shoulder.`,
    },
    {
      name: "Hirekolale Lake",
      image: place2,
      color: "#4999D0",
      description: `Hirekolale Lake, located near Chikmagalur in Karnataka, is a picturesque man-made lake surrounded by lush greenery and hills. It offers serene views, especially during sunset, making it a popular spot for nature lovers and photographers. The lake also serves as a water source for the region and provides a peaceful retreat for visitors looking to enjoy the natural beauty of the Western Ghats.`,
    },
    {
      name: "Deviramma Betta",
      image: place3,
      color: "#fe8400",
      description: `Deviramma Betta is a prominent hill located near Chikmagalur in Karnataka, India. Known for its challenging yet rewarding trek, it offers panoramic views of the Western Ghats. The hill is named after the Deviramma Temple situated at the summit, which is a significant pilgrimage site, especially during the annual Deviramma Jatre festival. Trekkers and devotees alike visit Deviramma Betta for its natural beauty, spiritual significance, and the breathtaking scenery that surrounds it.`,
    },
    {
      name: "Ayyankere",
      image: place4,
      color: "#7ce6e2",
      description: `Ayyankere, located near Chikmagalur in Karnataka, is one of the oldest and largest lakes in the region. Surrounded by the Western Ghats, it offers stunning views of lush landscapes and the nearby Shakunagiri Hill. The lake is an important source of irrigation for local agriculture and is a popular spot for fishing and picnics. Visitors come to Ayyankere to enjoy its serene environment and the beautiful sunset views over the water.`,
    },
    {
      name: "Hebbe Falls",
      image: place5,
      color: "#4999D0",
      description: `Hebbe Falls in Chikmagalur, Karnataka, is a picturesque waterfall in the Bhadra Wildlife Sanctuary, cascading 168 meters in two stages: Dodda Hebbe and Chikka Hebbe. Surrounded by lush greenery, it's a popular spot for nature lovers and trekkers, accessible via a forest trek or jeep ride.`,
    },
    {
      name: "Mullayanagiri",
      image: place6,
      color: "#fe8400",
      description: `Mullayanagiri, the highest peak in Karnataka at 1,930 meters, is located in the Chikkamagalur district. Part of the Baba Budangiri range, it's known for stunning views, lush greenery, and trekking trails. The peak features a small Shiva temple, making it a popular destination for nature lovers and adventure enthusiasts.`,
    },
  ];

  const { scrollY } = useScroll();
  const largeScreenRanges = [1700, 2100];
  const smallScreenRanges = [2500, 2950];
  const [scrollRange, setScrollRanges] = useState(largeScreenRanges);

  useEffect(() => {
    const updateRanges = () => {
      setScrollRanges(window.innerWidth <= 768 ? smallScreenRanges : largeScreenRanges);
    };
    updateRanges();
    window.addEventListener("resize", updateRanges);
    setIsMounted(true); 
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  const eventOpacity = useTransform(scrollY, scrollRange, [1, 0]);

  if (!isMounted) {
    return null; 
  }

  return (
    <section id="places" className="section-container pt-6 relative">
      {/* Decorative Images */}

      {/* Section Title */}
      <SectionTitle title="Places Nearby" delay={12} />

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
          {placesData.map((event, index) => (
            <SwiperSlide key={index} className="group my-20">
              <Tilt
                scale={index === activeIndex ? 1.4 : 1}
                glareEnable
                glareMaxOpacity={0.5}
                glareColor={event.color}
                glarePosition="all"
                className={`relative flex justify-center items-center cursor-pointer transition-transform duration-300
                  ${index === activeIndex ? "z-100" : "z-0"} 
                  group-hover:z-20 group-hover:scale-105`}
              >
                <Image
                  src={event.image}
                  alt={event.name}
                  width={600}
                  height={600}
                  className={`rounded-xl transition-transform duration-400 group-hover:opacity-25 ${
                    index === activeIndex ? "scale-[1.2] opacity-[0.9]" : "scale-[0.85] opacity-[0.65]"
                  }`}
                />
                <div className="absolute bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="text-2xl font-semibold text-white text-center px-12">{event.name}</h1>
                  <p className="text-lg font-semibold text-white text-center px-12">{event.description}</p>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Places;
