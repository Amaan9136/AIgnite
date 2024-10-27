import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ait from "../../images/sectionsAssets/ait.png";
import hrd from "../../images/sectionsAssets/hrd.jpg";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import Animate from "../helpers/Animate-motion";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";

const AboutEvent = () => {
  const { scrollY } = useScroll();
  const clgData = [
    {
      title: "Adichunchanagiri Institute of Technology",
      img: ait,
      paragraph: "The Adichunchanagiri Institute of Technology (AIT) was founded in Chikkamagaluru in 1980 and is managed by the Sri Adichunchanagiri Shikshana Trust. The institute is spiritually guided by Parama Poojya Jagadguru Sri Sri Dr. Nirmalanandanatha Mahaswamiji and blessed by Parama Poojya Jagadguru Padmabhushana Sri Sri Dr. Balagangadharanatha Mahaswamiji. AIT is affiliated with VTU Belagavi and received an 'A' grade from the NAAC in 2023. It offers 10 research programs, 4 postgraduate (PG) degrees, and 8 undergraduate (UG) courses. The institute boasts state-of-the-art facilities, highly skilled instructors, and a strong commitment to student placements.",
      highlights: [
        "Founded in Chikkamagaluru in 1980.",
        "Managed by the Sri Adichunchanagiri Shikshana Trust.",
        "Spiritually guided by Parama Poojya Jagadguru Sri Sri Dr. Nirmalanandanatha Mahaswamiji.",
        "Blessed by Parama Poojya Jagadguru Padmabhushana Sri Sri Dr. Balagangadharanatha Mahaswamiji.",
        "Affiliated with VTU Belagavi.",
        "Received an 'A' grade from the NAAC in 2023.",
        "Offers 10 research programs, 4 postgraduate (PG) degrees, and 8 undergraduate (UG) courses.",
        "Boasts state-of-the-art facilities, highly skilled instructors, and a strong commitment to student placements."
      ]
    },
    {
      title: "Department of Artificial Intelligence & Machine Learning",
      img: hrd,
      paragraph: "Established in 2021 with an initial intake of 65 students, the Department of Artificial Intelligence & Machine Learning focuses on research and development through its VTU-recognized research centers. The department is led by the esteemed Head, Dr. Sunitha M.R. Each year, we conduct annual seminars, workshops, and training sessions to enhance the knowledge and skills of both students and staff. The faculty comprises highly qualified and experienced educators and researchers who contribute to the department’s success, as reflected in VTU academic rankings. With strong institutional support, the department prioritizes career guidance and has achieved a remarkable success rate in student placements.",
      highlights: [
        "Established in 2021 with an initial intake of 65 students.",
        "Focuses on research and development through its VTU-recognized research centers.",
        "Led by the esteemed Head, Dr. Sunitha M.R.",
        "Conducts annual seminars, workshops, and training sessions to enhance the knowledge and skills of both students and staff.",
        "Comprises highly qualified and experienced educators and researchers.",
        "Contributes to the department’s success, as reflected in VTU academic rankings.",
        "Prioritizes career guidance and has achieved a remarkable success rate in student placements."
      ]
    }
  ];
  
  
  

  const imgTranslateY = useTransform(scrollY, [2800, 3000, 3200], [0, 100, 200]);
  const imgOpacity = useTransform(scrollY, [2800, 3000, 3200], [1, 0.7, 0.3]);

  return (
    <section id="about-event" className="section-container pt-12 lg:pt-24">
      <div className="relative">
        <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px] lg:w-[47px] lg:h-[50px] w-[70px] h-[70px]">
          <Image
            src={atom}
            alt="atom"
          />
        </div>
      </div>
      <SectionTitle title={"Event Location"} delay={12} />

      <div className="relative">
        <div className="absolute top-[460px] right-0 sm:top-[-70px] sm:right-0 lg:top-[-32px] lg:right-0 w-[68px] h-[58px] lg:w-[106px] lg:h-[74px] w-[70px] h-[70px]">
          <Image
            src={GDGAlgiers}
            alt="GDG"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="absolute top-[650px] sm:top-[450px] right-[122px] h-[48px] w-[48px] lg:right-[10px] right-[10px] lg:w-[55px] lg:h-[55px] w-[82px] h-[82px]">
            <Image
              src={globe}
              alt="globe"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[400px] left-[-30px] sm:top-[340px] sm:left-[-30px] h-[53px] w-[56px] lg:h-[66px] lg:w-[70px] w-[105px] h-[99px]">
            <Image
              src={atom}
              alt="atom"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[-35px] left-[-25px] h-[38px] w-[38px] lg:w-[55px] lg:h-[55px] w-[82px] h-[82px]">
            <Image
              src={globe}
              alt="globe"
            />
          </div>
        </div>

        {/* AIT Content */}
        <Animate delay={14} x={-50} y={50} className=" lg:columns-2 mt-[50px] lg:m-4 lg:mt-12 ">
          <Tilt
            className="cursor-pointer"
            scale={1.2}
            transitionSpeed={300}
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {clgData.map((imgdata, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    style={{ opacity: imgOpacity, y: imgTranslateY }}
                    className="flex p-2 z-10 lg:ml-4 cursor-pointer"
                  >
                    <Image
                      className="rounded-lg"
                      src={imgdata.img} // Corrected to use imgdata.img
                      alt={`scroll event image ${index}`}
                      // Add any other Image props here
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Tilt>

          <div className="gap-8 rows-2 p-4 sm:p-4">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {clgData.map((imgdata, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    style={{ opacity: imgOpacity, y: imgTranslateY }}
                    className="flex p-2 z-10 lg:ml-4  cursor-pointer"
                  >
                    <ParagSection2
                      title={imgdata.title}
                      paragraph={imgdata.paragraph} 
                      highlights={imgdata.highlights}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Animate>

        {/* Google Map Iframe */}
        <Animate delay={14} x={-50} y={50} className=" lg:columns-2 mt-[50px] h-[450px] lg:m-4 lg:mt-12 ">
          <motion.div
            style={{ opacity: imgOpacity }}
            className="flex justify-start md:h-[450px] p-2 z-10"
          >
            <iframe
              className="map-outline"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.135193095531!2d75.79563977467208!3d13.341865287008616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77aa342ed7f%3A0xaec39f2826004a0!2sAdichunchanagiri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1729871591468!5m2!1sen!2sin"
              style={{ borderRadius: '20px', border: '1px solid #ccc', marginRight: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <div className="gap-8 rows-2 p-4 sm:p-4">
            <ParagSection2
              title="This is AIgnite Robots"
              paragraph="Adjusted the gap between the title and paragraph for better visual separation. ipsm orem ipsm orem ipsm orem ipsm orem ipsm orem ipsm orem ipsm djusted the gap between the title and paragraph for better visual separation."
              highlights={["orem ", "important text"]}
            />
          </div>
        </Animate>
      </div>

      <div className="relative">
        <div className="absolute invisible sm:visible right-[640px] h-[46px] w-[61px] h-[93px] w-[93]">
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
