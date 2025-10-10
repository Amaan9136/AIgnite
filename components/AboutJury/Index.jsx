import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import rohith from "../../images/speakers/rohith.jpeg";
// import Nanjeshbennur from "../../images/speakers/Nanjeshbennur.jpg";
import aman from "../../images/speakers/aman.jpg";
import NithinKamath from "../../images/speakers/NK.png";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";
import gaurav from "../../images/speakers/gaurav.jpeg";
import instafix_founder from "../../images/speakers/instafix_founder.jpeg";
const juryData = [
  {
    title: "Nithin Kamath",
    paragraph:
      "Nithin Kamath is a prominent figure in the technology sector, currently serving as the Executive Director and founder of Capulus Technologies Private Limited based in Karnataka, India. With over a decade of hands-on experience in the tech industry, Nithin has demonstrated a strong commitment to leadership and innovation. His journey at CapulusTech has been fueled by a passion for developing technology-driven solutions that redefine user experiences and address the evolving demands of the market. As a leader, Nithin emphasizes the importance of crafting technology solutions that have a tangible impact on daily life. Under his guidance, the team at Capulus prioritizes expertise in software development, ensuring that the products they deliver not only meet market needs but also contribute meaningfully to technological advancement. This dedication to innovation reflects Nithin's belief in leveraging technology to improve lives and create value.",
    highlights: [
      "Executive Director",
      "founder of Capulus Technologies Private Limited",
      "over a decade of hands-on experience",
      "strong commitment to leadership and innovation",
      "passion for developing technology-driven solutions",
      "technology solutions that have a tangible impact",
      "expertise in software development"
    ],
    image: NithinKamath,
    orderLast: false,
  },
{
  title: "Amaan Mohammad Khalander",
  paragraph:
    "Amaan Mohammad Khalander is an alumnus of the AI & ML branch at AIT, Karnataka. With strong full-stack and AI/ML expertise, he has a passion for building innovative solutions. He founded Automatech, a government-registered technology startup focused on tools and platforms simplifying software and machine learning development. Key projects include MULTIDE and the Mul-Model platform, a final year project facilitating collaboration on machine learning models. Mul-Model acts like GitHub for ML and data models, offering pretrained models for tasks like command processing, image recognition, and data analysis. Automatech’s Mul-Command provides interactive commands for training, testing, and deploying models for beginners and experts. The company builds machine learning pipelines to automate backend workflows and has been recognized by the Education Excellence Foundation.",
  highlights: [
    "alumnus of the AI & ML branch at AIT",
    "strong full-stack and AI/ML expertise",
    "founded Automatech",
    "government-registered technology startup",
    "tools and platforms simplifying software and machine learning development",
    "MULTIDE and the Mul-Model platform",
    "final year project",
    "Mul-Model acts like GitHub for ML and data models",
    "offering pretrained models for command processing, image recognition, and data analysis",
    "Mul-Command provides interactive commands for model training, testing, and deployment",
    "machine learning pipelines to automate backend workflows",
    "recognized by the Education Excellence Foundation"
  ],
  image: aman,
  orderLast: true
},
  {
    title: "Rohith Krishna G R",
    paragraph:
      "Rohith Krishna G R is a final-year ECE student at Shri Siddhartha Institute of Technology, Tumkur. Driven by his passion for entrepreneurship, he founded a community-based startup, WETEAMRK7, which is incubated at Shri Siddhartha Academy of Higher Education. Through this venture, he is serving multiple clients both in India and abroad.He has already partnered with Adichunchanagiri Institute of Technology, Chikkamagaluru, as the Internship & Learning Partner for Smart Hack - 2K25 (Smart India Internal Hackathon 2025), where he provided internship opportunities and free Udemy access to the top five teams from a pool of 49 teams. Alongside his entrepreneurial journey, he is also contributing to global research initiatives as a NASA Citizen Scientist, reflecting his commitment to both innovation and knowledge-sharing.",
    highlights: [
      "final-year ECE student at Shri Siddhartha Institute of Technology, Tumkur",
      "founded community-based startup, WETEAMRK7",
      "incubated at Shri Siddhartha Academy of Higher Education",
      "serving multiple clients both in India and abroad",
      "partnered with Adichunchanagiri Institute of Technology, Chikkamagaluru",
      "Internship & Learning Partner for Smart Hack - 2K25 (Smart India Internal Hackathon 2025)",
      "provided internship opportunities and free Udemy access to the top five teams",
      "contributing to global research initiatives as a NASA Citizen Scientist",
      "commitment to both innovation and knowledge-sharing"
    ],
    image: rohith,
    orderLast: false,
  },
     {
    title: "Karthick H",
    paragraph:
      "Karthick H, the Founder of InstaFix.in, brings extensive experience in building and optimizing large-scale service networks across India. With a strong background in operations and vendor management, he established InstaFix in Bangalore to redefine reliability and efficiency in in-home service delivery. His career includes serving as the Vendor Supply Head (Pan India) at Housejoy.in, where he mastered scaling and quality control, and as the Lead Source Head at Bro4u.com, where he strengthened vendor acquisition and supply chain frameworks. Passionate about operational excellence and customer satisfaction, Karthick combines strategic vision with hands-on leadership to drive innovation and trust within the service ecosystem. Beyond business, his love for trekking and exploration mirrors his professional approach—always seeking new paths, better solutions, and higher standards. Under his leadership, InstaFix continues to evolve as a customer-centric platform, delivering seamless, technology-driven home services across India.",
    highlights: [
      "Founder of InstaFix.in",
      "extensive experience in building and optimizing large-scale service networks across India",
      "strong background in operations and vendor management",
      "established InstaFix in Bangalore to redefine reliability and efficiency in in-home service delivery",

      "served as the Vendor Supply Head (Pan India) at Housejoy.in",
      "mastered scaling and quality control",
      "Lead Source Head at Bro4u.com",
      "strengthened vendor acquisition and supply chain frameworks",
      "combines strategic vision with hands-on leadership to drive innovation and trust within the service ecosystem",
    ],
    image: instafix_founder,
    orderLast: false,
  },
   {
    title: "Gourav L R",
    paragraph:
      "An alumnus of the Artificial Intelligence & Machine Learning branch at AIT, Karnataka, brings a strong foundation in data-driven decision-making, process optimization, and product innovation. Currently contributing as a Business Analyst at InstaFix, a platform revolutionizing in-home and on-demand service management, Gourav bridges business goals with technical execution. He designs efficient workflows, analyzes user behavior, and leverages data insights to boost operational performance and customer satisfaction. Passionate about turning ideas into impactful business outcomes, he blends his AI/ML expertise with analytical acumen to identify growth opportunities and enhance service efficiency. His focus on innovation, user-centric design, and data intelligence continues to drive scalable, tech-enabled solutions shaping the future of home services.",
    highlights: [
      "alumnus of the Artificial Intelligence & Machine Learning branch at AIT, Karnataka",
      "strong foundation in data-driven decision-making, process optimization, and product innovation",
      "Business Analyst at InstaFix",
      "designs efficient workflows, analyzes user behavior, and leverages data insights",
      " boost operational performance and customer satisfaction",
      "turning ideas into impactful business outcomes",
      "blends AI/ML expertise with analytical acumen",
      "identify growth opportunities and enhance service efficiency",
      "focus on innovation, user-centric design, and data intelligence"
    ],
    image: gaurav,
    orderLast: false,
  },
  
];

const AboutJury = () => {
  const largeScreenRanges = [5700, 5900]
  const smallScreenRanges = [12150, 12250]

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

  // const sectionOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);
  const sectionOpacity = 1;
  return (
    <section className="relative lg:mb-28" id="about-jury">
      <div className="relative">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} fill />
        </div>
        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} fill />
        </div>
        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} fill />
        </div>

        <motion.div
          style={{ opacity: sectionOpacity }}
          className="section-container pt-6 cursor-pointer"
        >
          <SectionTitle title={"About Jury's"} />

          {juryData.length == 0 ? (<div>
            <p className="text-center mt-10 font-semibold text-xl text-white">Jury details will be updated soon. Stay tuned!</p>
          </div>) : juryData.map((jury, index) => (
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
