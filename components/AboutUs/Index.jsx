import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import Nacereddine_Belaloui from "../../images/speakers/Nacereddine_Belaloui.jpeg";
import ParagSection from "../helpers/ParagSection";
import SectionTitle from "../helpers/SectionTitle";

const AboutUs = () => {
  const { scrollX, scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], ["0%", "450px"]);

  return (
    <section className="relative" id="about-us">
      <video
        src="/videos/about-bg-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute object-cover"
      />
      {/* <motion.div
        style={{ opacity: bgOpacity, y: -titleY }}
        className="absolute inset-0 -z-10"
      /> */}

      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>
        <div className="section-container pt-12 lg:pt-24">
          <SectionTitle title={"About us"} />
          <div className="flex flex-col gap-12 lg:gap-28 lg:m-4">
            <ParagSection
              keyword1={"WTM Algiers "}
              paragraph1={`also known as the "Women Techmakers Algiers" program, was created to increase visibility, community, and resources for women in technology and also spread learning and build role models globally. It's located at`}
              keyword2={" the National Higher School of Computer science "}
              paragraph2={`and dedicated to anyone who's passionate and motivated about the tech field.`}
              img={Nacereddine_Belaloui}
              reverse={false}
              redirect={"https://www.wtmalgiers.org/"}
            ></ParagSection>
            <ParagSection
              keyword1={"GDG Algiers "}
              paragraph1={`is a local group of developers and students who are interested in Google’s developer technology products. It is located at`}
              keyword2={" the National Higher School of Computer science "}
              paragraph2={`and hosts a variety of events activities for developers through different events that aim to help the developers community get the latest technology updates.`}
              img={Nacereddine_Belaloui}
              reverse={true}
              redirect={"https://www.gdgalgiers.com"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;
