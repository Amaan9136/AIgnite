import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import Nanjeshbennur from "../../images/speakers/Nanjeshbennur.jpg";
import NithinKamath from "../../images/speakers/NithinKamath.jpg";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";
import { div } from "framer-motion/client";

const juryData = [
  {
    title: "Nanjesh Bennur",
    paragraph: "Nanjesh Bennur is a distinguished professional based in Karnataka, India, known for his multifaceted roles as an author, entrepreneur, and chairman of the Youth Red Cross. He has made significant contributions as a committee member of the Karnataka State Committee for IE India and has served as a former assistant professor at AIT in Chikmagalur. Currently, he is affiliated with Selfpage Developers Pvt Ltd, where he continues to foster innovation and development in the tech industry. With a solid educational foundation, Nanjesh holds a Master of Technology (MTech) degree, specializing in Computer Science. His academic and professional journey has been marked by a demonstrated history of working in the computer software industry, where he has honed his skills in various programming languages and technologies.",
    highlights: [
      "Chairman of the Youth Red Cross",
      "Committee member of the Karnataka State Committee for IE India",
      "Former assistant professor at AIT",
      "Master of Technology",
      "Experience in the computer software industry",
      "Distinguished professional",
      "Foster innovation and development in the tech industry",
      "Demonstrated history of working in the computer software industry"
    ],
    image: Nanjeshbennur,
    orderLast: true,
  },
  {
    title: "Nithin Kamath",
    paragraph: "Nithin Kamath is a prominent figure in the technology sector, currently serving as the Executive Director and founder of Capulus Technologies Private Limited based in Karnataka, India. With over a decade of hands-on experience in the tech industry, Nithin has demonstrated a strong commitment to leadership and innovation. His journey at CapulusTech has been fueled by a passion for developing technology-driven solutions that redefine user experiences and address the evolving demands of the market. As a leader, Nithin emphasizes the importance of crafting technology solutions that have a tangible impact on daily life. Under his guidance, the team at Capulus prioritizes expertise in software development, ensuring that the products they deliver not only meet market needs but also contribute meaningfully to technological advancement. This dedication to innovation reflects Nithin's belief in leveraging technology to improve lives and create value.",
    highlights: [
      "Executive Director",
      "Founder of Capulus Technologies Private Limited",
      "Over a decade of hands-on experience",
      "Demonstrated a strong commitment to leadership and innovation",
      "Technology-driven solutions",
      "Tangible impact on daily life",
      "Expertise in software development",
      "Passion for developing technology-driven solutions"
    ],
    image: NithinKamath,
    orderLast: false,
  }
];

const AboutJury = () => {
  const largeScreenRanges = [5700, 5900]
  const smallScreenRanges = [8100, 8200]

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
    <section className="relative lg:mb-28" id="about-jury">
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
          <SectionTitle title={"About Jury's"} />
          
          {juryData.length==0?(<div>
            <p className="text-center mt-10 font-semibold text-xl text-white">Jury details will be updated soon. Stay tuned!</p>
          </div>):juryData.map((jury, index) => (
            <div key={index} className={`flex flex-col gap-10 items-center lg:flex-row mt-[3rem] lg:m-12 ${jury.orderLast ? "lg:flex-row-reverse" : ""}`}>
              <div className={`relative w-[250px] lg:w-[321px]`}>
                <Tilt className="cursor-pointer">
                  <Image src={jury.image} width={550} height={550} alt="" className="rounded-lg shadow-md" />
                </Tilt>
              </div>
              <div className={`flex flex-col gap-11 flex-1 `}>
                <ParagSection2
                  title={jury.title}
                  paragraph={jury.paragraph}
                  highlights={jury.highlights} 
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutJury;
