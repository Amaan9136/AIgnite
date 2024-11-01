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
import place7 from "../../images/places/7.jpg";
import place8 from "../../images/places/8.jpg";
import SectionTitle from "../helpers/SectionTitle";

const Places = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const placesData = [
    {
      name: "Ethina Bhuja",
      image: place1,
      color: "#9BD4D4",
      description: `Ethina Bhuja in Mudigere, Karnataka, is a popular trekking spot in the Charmadi range of the Western Ghats. Known as "Ox's Shoulder," the peak is famous for its unique rock formation resembling an Ox's shoulder.`,
      map_link: "https://maps.app.goo.gl/Ses24MdEGgxBFuRm7",
    },
    {
      name: "Hirekolale Lake",
      image: place2,
      color: "#4A90E2",
      description: `Hirekolale Lake, located near Chikmagalur in Karnataka, is a picturesque man-made lake surrounded by lush greenery and hills. It offers serene views, especially during sunset, making it a popular spot for nature lovers and photographers.`,
      map_link: "https://maps.app.goo.gl/VZvbsrLUDm4aBKRT6",
    },
    {
      name: "Deviramma Betta",
      image: place3,
      color: "#F29B4E",
      description: `Deviramma Betta is a prominent hill located near Chikmagalur in Karnataka, India. Known for its challenging yet rewarding trek, it offers panoramic views of the Western Ghats.`,
      map_link: "https://maps.app.goo.gl/dM9aBKif5r9SB31s7",
    },
    {
      name: "Ayyankere",
      image: place4,
      color: "#8CC8A5",
      description: `Ayyankere, located near Chikmagalur in Karnataka, is one of the oldest and largest lakes in the region. Surrounded by the Western Ghats, it offers stunning views of lush landscapes and the nearby Shakunagiri Hill.`,
      map_link: "https://maps.app.goo.gl/9xvFkqmTvPoKt8pC8",
    },
    {
      name: "Hebbe Falls",
      image: place5,
      color: "#5DADE2",
      description: `Hebbe Falls in Chikmagalur, Karnataka, is a picturesque waterfall in the Bhadra Wildlife Sanctuary, cascading 168 meters in two stages: Dodda Hebbe and Chikka Hebbe.`,
      map_link: "https://maps.app.goo.gl/1qT187rTs9xUiQWC6",
    },
    {
      name: "Mullayanagiri",
      image: place6,
      color: "#F57C00",
      description: `Mullayanagiri, the highest peak in Karnataka at 1,930 meters, is located in the Chikkamagalur district. Part of the Baba Budangiri range, it's known for stunning views, lush greenery, and trekking trails.`,
      map_link: "https://maps.app.goo.gl/e73T3GXc3JfYjsF28",
    },
    {
      name: "Honnammana Halla",
      image: place7,
      color: "#F4A261",
      description: `Honnammana Halla, located near Chikkamagaluru in Karnataka, is a charming waterfall set amid the Western Ghats. Known for its scenic views, the waterfall flows through a rocky terrain.`,
      map_link: "https://maps.app.goo.gl/LEnfHLgFWzN9ZQzV8",
    },
    {
      name: "Belavadi Veera Narayana Temple",
      image: place8,
      color: "#E76F51",
      description: `Belavadi Veera Narayana Temple, is a magnificent Hoysala-era temple renowned for its intricate architecture and sculptures. Built in the 13th century.`,
      map_link: "https://maps.app.goo.gl/C4xUpP8LkoTPbEQu6",
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
                  className={`rounded-xl transition-transform duration-400 group-hover:opacity-25 ${
                    index === activeIndex
                      ? "lg:scale-[1.2] opacity-[0.9]"
                      : "lg:scale-[0.85] opacity-[0.65]"
                  }`}
                />
                <div className="absolute bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h1 className="text-xl font-semibold text-white text-center px-12">
                    {place.name}
                  </h1>
                  <p className="font-semibold text-white text-center px-12">
                    {place.description}
                  </p>
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
