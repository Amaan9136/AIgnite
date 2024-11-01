import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import capulus from "../../images/logos/capulus.png";
import iip from "../../images/logos/iip.jpg";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";

const TheyTrustedUs = () => {

  const largeScreenRanges = [8200, 8300]
  const smallScreenRanges = [13500, 13600]

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

  const sectionOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);

  return (
    <section className="relative mb-28" id="they-trusted-us">
      {/* <video
        src="/videos/company.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute object-cover top-20"
      /> */}

      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>
        <motion.div
          style={{ opacity: sectionOpacity }}
          className="section-container pt-6 cursor-pointer"
        >
          <SectionTitle title={"They Trusted Us"} />

          {/* company 1 */}
          <div className="flex flex-col gap-10 items-center lg:flex-row mt-[3rem] lg:m-12">
            <div
              className={`relative w-[250px] lg:w-[321px] lg:order-last`}
            >
              <Tilt
                className="cursor-pointer">
                <Image src={capulus} width={550} height={550} alt="" className="rounded-2xl shadow-md" />
              </Tilt>
            </div>
            <div className="flex flex-col gap-11 flex-1">
              <ParagSection2
                title="Capulus Technologies Pvt Ltd"
                paragraph="Capulus Technologies Pvt Ltd is a forward-thinking tech company specializing in AI-driven solutions for smart cities, public safety, and law enforcement. They provide cutting-edge platforms for smart policing, urban mobility, e-governance, and security surveillance, aiming to enhance public services and streamline operations. Capulus is ISO-certified for quality and information security and holds Startup India recognition, reflecting its commitment to reliability and innovation. Working closely with government and private sector clients, Capulus focuses on impactful technology to improve community safety and infrastructure."
                highlights={[
                  "AI-driven solutions",
                  "smart cities",
                  "public safety",
                  "law enforcement",
                  "smart policing",
                  "urban mobility",
                  "e-governance",
                  "security surveillance",
                  "ISO-certified",
                  "Startup India recognition",
                  "government",
                  "private sector clients",
                  "community safety",
                  "infrastructure",
                  "innovation",
                ]}
              />
            </div>
          </div>

          {/* company 2 */}
          <div className="flex flex-col gap-10 items-center lg:flex-row mt-[3rem] lg:m-12">
            <div
              className={`relative w-[250px] lg:w-[321px]`}
            >
              <Tilt
                className="cursor-pointer">
                <Image src={iip} width={550} height={550} alt="" className="rounded-2xl shadow-md" />
              </Tilt>
            </div>
            <div className="flex flex-col gap-11 flex-1">
              <ParagSection2
                title="Iterative International Publishers"
                paragraph="Selfypage Developers Private Limited (Iterative International Publishers) is a company, registered in Bangalore, Karnataka. Established with an authorized capital of INR 2.5 lakhs, the company maintains a 100% paid-up capital structure, indicating strong financial commitment from its stakeholders within the Community, Personal, and Social Services sector, focusing on delivering impactful and community-oriented solutions. The company remains active in its business operations, striving to make a positive contribution to the communities it serves."
                highlights={[
                  "Iterative International Publishers",
                  "registered in Bangalore",
                  "authorized capital of INR 2.5 lakhs",
                  "100% paid-up capital",
                  "financial commitment",
                  "Community services",
                  "Personal services",
                  "Social services",
                  "impactful",
                  "community-oriented",
                  "positive contribution",
                ]}
              />
            </div>

          </div>
        </motion.div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default TheyTrustedUs;
