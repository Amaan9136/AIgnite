import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import automatech from "../../images/logos/automatech.jpeg";
import capulus from "../../images/logos/capulus.png";
import huco from "../../images/logos/huco.jpg";
import kmf from "../../images/logos/kmf.jpg";
import ktech from "../../images/logos/ktech.jpg";
import watermark from "../../images/logos/watermark.jpeg";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";
import cakecorner from "../../images/logos/cakecorner.png";
import lucent from "../../images/logos/lucent.png"
import atok from "../../images/logos/atok.jpeg"
const sponsorsData = [
  {
    category: "Financial Sponsors",
    sponsors: [
      {
        name: "Capulus Technologies Pvt Ltd",
        logo: capulus,
        paragraph: "Capulus Technologies Pvt Ltd is a forward-thinking tech company specializing in AI-driven solutions for smart cities, public safety, and law enforcement. They provide cutting-edge platforms for smart policing, urban mobility, e-governance, and security surveillance, aiming to enhance public services and streamline operations. Capulus is ISO-certified for quality and information security and holds Startup India recognition, reflecting its commitment to reliability and innovation. Working closely with government and private sector clients, Capulus focuses on impactful technology to improve community safety and infrastructure. Additionally, Capulus offers valuable internship opportunities to students.",
        highlights: [
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
          "internship opportunities",
        ],
      },
      {
        name: "Karunadu Technologies Pvt. Ltd.",
        logo: ktech,
        paragraph: "Karunadu Technologies Pvt. Ltd., founded in 2018 and headquartered in Bangalore, Karnataka, is a private IT and Embedded solutions company. With an authorized capital of INR 10 lakhs and a paid-up capital of INR 1 lakh, the company is actively engaged in delivering high-quality technology services including software development, web applications, IoT and embedded systems, as well as IT staffing and training. Their mission emphasizes innovation, customer value, and skill development, empowering communities through knowledge while maintaining strong standards and 24×7 support.",
        highlights: [
          "Karunadu Technologies Pvt. Ltd.",
          "founded in 2018",
          "headquartered in Bangalore",
          "authorized capital of INR 10 lakhs",
          "paid-up capital of INR 1 lakh",
          "software & embedded solutions",
          "web design & application development",
          "IoT boards & hardware",
          "IT staffing & training",
          "innovation & customer value",
          "skill development",
          "nation building contribution",
        ],
      },
       {
  name: "Lucent The Luxury Hotel",
  logo: lucent,
  paragraph:
    "Lucent The Luxury Hotel — a luxury hotel with homely blend in Chikkamagaluru featuring a refreshing swimming pool, cozy rooms, homely and tasty food. Enjoy modern comfort in a warm ambience, perfect for tourists, students, and teachers exploring the city’s attractions. lucentthehomelystay.in | Google – https://share.google/DzLgiaSSt6yzW7wWZ",
  highlights: [
    "Lucent The Luxury Hotel",
    "luxury hotel",
    "homely blend",
    "Chikkamagaluru",
    "refreshing swimming pool",
    "cozy rooms",
    "tasty food",
    "modern comfort",
    "warm ambience",
    "tourists",
    "students",
    "teachers",
    "lucentthehomelystay.in",

  ],
  link: "https://share.google/DzLgiaSSt6yzW7wWZ",
}

    ],
  },
  {
    category: "Internship Partners",
    sponsors: [
      {
        name: "Capulus Technologies Pvt Ltd",
        logo: capulus,
        paragraph: "Capulus Technologies Pvt Ltd is a forward-thinking tech company specializing in AI-driven solutions for smart cities, public safety, and law enforcement. They provide cutting-edge platforms for smart policing, urban mobility, e-governance, and security surveillance, aiming to enhance public services and streamline operations. Capulus is ISO-certified for quality and information security and holds Startup India recognition, reflecting its commitment to reliability and innovation. Working closely with government and private sector clients, Capulus focuses on impactful technology to improve community safety and infrastructure. Additionally, Capulus offers valuable internship opportunities to students.",
        highlights: [
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
          "internship opportunities",
        ],
      },
      {
        name: "AUTOMATECH",
        logo: automatech,
        paragraph: "Automatech, founded by Amaan Mohammad Khalander, creates tools and platforms to simplify software and machine learning development. A key project is MULTIDE, an integrated development environment within the Mul-Model platform (https://mul-model.vercel.app/), which started as a final-year project. Mul-Model is like GitHub for machine learning, offering pretrained models for tasks like command processing, image recognition, and data analysis. Users can customize or create models, while Mul-Command provides interactive commands for easy training, testing, and deployment for beginners and experts. Automatech also builds ML pipelines to automate backend workflows, improving project efficiency. Officially registered as a Micro enterprise (Udyam KR-09-0034931) and recognized by the Education Excellence Foundation, Automatech delivers practical, user-friendly solutions for students and developers to turn ideas into actionable ML projects.",
        highlights: [
          "Technology company simplifying software and ML development",
          "founded by Amaan Mohammad Khalander",
          "creator of MULTIDE IDE",
          "part of the Mul-Model platform (https://mul-model.vercel.app/)",
          "access to pretrained models for command processing, image recognition, and data analysis",
          "customizable models and creation of new models",
          "Mul-Command for interactive training, testing, and deployment",
          "builds ML pipelines to automate backend workflows",
          "officially registered Micro enterprise (Udyam KR-09-0034931)",
          "recognized by Education Excellence Foundation",
          "focus on practical, user-friendly ML solutions",
          "supports students and developers in turning ideas into projects",
        ],
      },
      {
        name: "WETEAMRK7",
        logo: watermark,
        paragraph: "WETEAMRK7 is a community-based startup managed by students and incubated at Shri Siddhartha Academy of Higher Education. They are into many domains mainly freelancing, software management, software development, product development, and research as well. The startup serves many clients in India and abroad, as well.",
        highlights: [
          "WETEAMRK7 startup",
          "founded by Rohith Krishna G R",
          "incubated at Shri Siddhartha Academy of Higher Education",
          "community-based venture",
          "clients in India and abroad",
          "partnered with AIT Chikkamagaluru",
          "Internship & Learning Partner – Smart Hack 2K25",
          "internship opportunities for students",
          "Udemy access for top teams",
          "NASA Citizen Scientist",
          "focus on innovation",
          "commitment to knowledge-sharing",
        ],
      },
    ],
  },
  {
    category: "Goodies Providers",
    sponsors: [
       {
        name: "HAMUL – Hassan Co-operative Milk Producers’ Societies Union Ltd.",
        logo: kmf,
        paragraph: "HAMUL, part of the Nandini-KMF family, has been nourishing communities in Hassan, Chikkamagaluru, and Kodagu since the 1970s. With strong cooperative roots, ISO-certified quality, and an ever-expanding lineup of dairy offerings—from pure milk and curds to traditional sweets and ghee—they bridge rural farmers and urban tables. Their mission? Fair pay for producers, safe and wholesome dairy for consumers, and sustainable growth across the region.",
        highlights: [
          "HAMUL (Hassan Union)",
          "established 1977 under KMF",
          "operates in Hassan, Chikkamagaluru & Kodagu",
          "ISO-22000 food safety certified",
          "milk procurement & processing",
          "chilling centres: Holenarsipur, Kudige, Birur etc",
          "dairy products: milk, curds, butter, ghee, sweets",
          "traditional & modern dairy tech",
          "fair price to farmers",
          "ensuring quality & hygiene",
          "community upliftment",
          "sustainable rural income",
        ],
      },
      {
        name: "Huco Chocolates",
        logo: huco,
        paragraph: "Huco Chocolates is a handcrafted chocolate brand known for its premium dark chocolate blends. Their 60% cocoa natural dark chocolate reflects a commitment to authenticity, taste, and quality. Each bar is carefully crafted to deliver a rich and indulgent experience, bringing together tradition and modern chocolate-making artistry. With a focus on natural ingredients and artisanal methods, Huco stands as a brand dedicated to delivering wholesome indulgence with every bite.",
        highlights: [
          "Huco Chocolates",
          "Handcrafted chocolates",
          "60% cocoa natural dark chocolate",
          "Premium quality",
          "Authentic taste",
          "Artisanal methods",
          "Focus on natural ingredients",
          "Tradition meets modern chocolate-making",
          "Wholesome indulgence",
        ],
      },
      {
        name: "Cake Corner",
        logo: cakecorner,
        paragraph: "Cake Corner is a valued sponsor providing delightful sweets for the event, enhancing the experience for all participants. Located at AIT Circle, Jyothinagar, Chikkamagalur.",
        highlights: [
          "Cake Corner",
          "Sweets sponsor",
          "Delightful sweets",
          "Enhancing event experience",
          "AIT Circle",
          "Jyothinagar",
          "Chikkamagalur",
        ],
      },
    ],
  },
  {
    category: "Trophy Sponsors",
    sponsors: [
      {
        name: "ATOK Esports",
        logo: atok,
        paragraph: "ATOK ESPORTS Rakesh Autokar T is Founder and Owner of ATOK Esports, ATOK esports is gaming and Content based Organisation.ATOK esports won Fight S1,S4 of FIGHT NIGHT Showdown. STICK Esports #6 in Jharkhand And JCL S1 #3",
        highlights: [
          "ATOK Esports",
          "Founder and Owner: Rakesh Autokar T",
          "gaming and content based organisation",
          "won Fight S1, S4 of FIGHT NIGHT Showdown",
          "STICK Esports #6 in Jharkhand",
          "JCL S1 #3",
        ],
        link: "https://www.youtube.com/@Godinosuke"
      },
    ],
  },
];

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

  // const sectionOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);
const sectionOpacity = 1;
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
          <SectionTitle title={"They Trusted Us"} />

          {sponsorsData.map((categoryData, categoryIndex) => (
            <div key={categoryIndex} className="mt-12">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">{categoryData.category}</h2>
              <div className="flex flex-col gap-8">
                {categoryData.sponsors.map((sponsor, sponsorIndex) => (
                  <div key={sponsorIndex} className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-center mb-4">
                      <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {categoryData.category.replace(" Sponsors", "").replace(" Partners", "").replace(" Providers", "")}
                      </span>
                    </div>
                    <div className="flex justify-center mb-4">
                      {sponsor.link ? (
                        <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                          <Tilt className="cursor-pointer">
                            <Image src={sponsor.logo} width={150} height={150} alt={`${sponsor.name} Logo`} className="rounded-2xl shadow-md" />
                          </Tilt>
                        </a>
                      ) : (
                        <Tilt className="cursor-pointer">
                          <Image src={sponsor.logo} width={150} height={150} alt={`${sponsor.name} Logo`} className="rounded-2xl shadow-md" />
                        </Tilt>
                      )}
                    </div>
                    <ParagSection2
                      title={sponsor.name}
                      paragraph={sponsor.paragraph}
                      highlights={sponsor.highlights}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default TheyTrustedUs;
