import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import AIgnite from "../../images/sectionsAssets/AIgnite.jpg";
import ait from "../../images/sectionsAssets/ait.png";
import eve from "../../images/sectionsAssets/eve.jpg";
import hrd from "../../images/sectionsAssets/hrd.jpg";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import Animate from "../helpers/Animate-motion";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";

const AboutEvent = () => {

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
      ],
      color: "rgb(174, 60, 89)"
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
      ],
      color: "rgb(10, 109, 140)"
    }
  ];

  const largeScreenRanges = {
    ait: [2500, 2700],
    event: [3400, 3600],
    map: [3400, 3600],
  };
 
  const smallScreenRanges = {
    ait: [3650, 3800],
    event: [4300, 4400],
    map: [5100, 5200],
  };

  const { scrollY } = useScroll();
  const [scrollRanges, setScrollRanges] = useState(largeScreenRanges);

  // Set the scroll ranges based on screen size
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

  // Set opacity transformations based on current ranges
  const aitOpacity = useTransform(scrollY, scrollRanges.ait, [1, 0.3]);
  const eventOpacity = useTransform(scrollY, scrollRanges.event, [1, 0.3]);
  const mapOpacity = useTransform(scrollY, scrollRanges.map, [1, 0.3]);

  return (
    <section id="event-loc" className="section-container pt-6">
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
                    style={{ opacity: aitOpacity }}
                    className="flex p-2 z-10 lg:ml-4 cursor-pointer justify-center"
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
                  style={{ opacity: aitOpacity }}
                  className="cursor-pointer"
                >
                  <ParagSection2
                    title={imgdata.title}
                    paragraph={imgdata.paragraph}
                    highlights={imgdata.highlights}
                    hoverColor={imgdata.color}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Animate>

        {/* Events */}
        <Animate delay={14} x={-50} y={50} className="lg:columns-2 mt-[50px] lg:m-4 lg:mt-12 ">
          {/* SIDE 1: Event Information */}
          <Tilt
            className="cursor-pointer"
            scale={1.1}
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

              <SwiperSlide>
                <motion.div
                  style={{ opacity: eventOpacity }}
                  className="flex p-2 z-10 lg:ml-4 cursor-pointer justify-center"
                >
                  <Image
                    className="rounded-lg"
                    src={AIgnite}
                    alt={`scroll event image 1`}
                  />
                </motion.div>
              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  style={{ opacity: eventOpacity }}
                  className="flex p-2 z-10 lg:ml-4 cursor-pointer justify-center"
                >
                  <Image
                    className="rounded-lg"
                    src={eve}
                    alt={`scroll event image 2`}
                  />
                </motion.div>
              </SwiperSlide>

            </Swiper>
          </Tilt>
          <Tilt
            className="cursor-pointer"
            scale={1.1}
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

              <SwiperSlide>
                <motion.div
                  style={{ opacity: eventOpacity }}
                  className="cursor-pointer"
                >
                  <ParagSection2
                    title="National Level AIgnite Event"
                    paragraph="The AIML Department's first-ever national technical fest aspires to offer attendees a truly hands-on and immersive experience. This event initiates the department's dedication to building a vibrant technical community, bringing together students from various colleges to engage with AIML’s innovative tech culture. We are on a mission to make everyone a part of AIGNITE and to provide something unique for all fellow attendees and savour the experience as a lifelong memory."
                    highlights={[
                      "national technical fest",
                      "Hands-on and immersive experience",
                      "Dedication to building a vibrant technical community",
                      "Engage with AIML’s innovative tech culture",
                      "Mission to make everyone a part of AIGNITE",
                      "Unique experience for all attendees",
                      "Lifelong memory"
                    ]}
                    hoverColor="rgb(174, 60, 89)"
                  />
                </motion.div>

              </SwiperSlide>
              <SwiperSlide>
                <motion.div
                  style={{ opacity: eventOpacity }}
                  className="cursor-pointer"
                >
<ParagSection2
  title="AIgnite Team"
  paragraph="The AIgnite Team consists of passionate volunteers from the AIML Department, all committed to making this national technical fest a resounding success on October 16th and 17th. Working tirelessly behind the scenes, they are driven by a shared vision to offer attendees an immersive, hands-on experience that celebrates the innovative tech culture of AIML. Their mission is to ensure every participant feels part of the AIgnite journey, creating a unique and memorable experience that will resonate for years to come."
  highlights={[
    "passionate volunteers",
    "national technical fest",
    "immersive, hands-on experience",
    "innovative tech culture",
    "dedication to a vibrant technical community",
    "unique experience for all attendees",
    "memorable experience",
    "October 16th and 17th"
  ]}
  hoverColor="rgb(174, 60, 89)"
/>

                </motion.div>

              </SwiperSlide>

            </Swiper>
          </Tilt>


          {/* SIDE 2: Map Date and Time Details */}
          <motion.div
            style={{ opacity: mapOpacity }}
            className="flex justify-center items-center cursor-pointer mt-6 h-[22rem]"
          >
            <iframe
              className="map-outline mb-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.135193095531!2d75.79563977467208!3d13.341865287008616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77aa342ed7f%3A0xaec39f2826004a0!2sAdichunchanagiri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1729871591468!5m2!1sen!2sin"
              style={{ borderRadius: '20px', border: '1px solid #ccc', marginRight: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            style={{ opacity: mapOpacity }}
            className="cursor-pointer"
          >
            <ParagSection2
              title="Event Date and Time"
              paragraph={`Sharkathon (Nov 8-9)
Dive into a 24-hour hackathon starting on Nov 8 at 9 AM, where teams innovate and solve real-world challenges in a transparent, point-based competition. Mentors and judges will guide and score each phase, pushing creativity to new heights.
Reverse Hacking & Esports (Nov 9)
Join the excitement of Reverse Hacking and Esports on Nov 9 from 9 AM to 11 AM. Compete in fast-paced tech and gaming challenges that test skill, strategy, and expertise.
Get ready for two days of innovation, competition, and memorable experiences!`}
              highlights={[
                "Sharkathon (Nov 8-9)",
                "24-hour hackathon",
                "Real-world challenges",
                "Transparent, point-based competition",
                "Reverse Hacking & Esports (Nov 9)",
                "Fast-paced tech and gaming challenges",
                "Two days of innovation",
                "Memorable experiences"
              ]}
              hoverColor="rgb(10, 109, 140)"
            />
          </motion.div>
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
