import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import Animate from "../helpers/Animate-motion";
import SectionTitle from "../helpers/SectionTitle";

const ContactUs = () => {
  const contactData = [
    { name: "Abhishek", contact: "8310518595", color: "#FFD700",des:"Boys Accomodation" },
    { name: "Karan ", contact: "7975591793", color: "#39FF14" ,des:"Boys Accomodation"},
    { name: "Sagar H D", contact: "9148342588", color: "#FF073A" ,des:"Technical , Registration"},
    { name: "Madan K ", contact: "7975680455", color: "#00FFFF",des:"Registration" },
    { name: "Afnan G N", contact: "6361116966", color: "#FF6EC7" ,des:"Media"},
   { name: "Rakshitha", contact: "7411254225", color: "#FFD700" ,des:"Girls Accomodation"},
    { name: "Manvitha", contact: "9136686666", color: "#39FF14" ,des:"Girls Accomodation"},
    { name: "Sanvi A S  ", contact: "8105113926 ", color: "#FF073A" ,des:"Technical"},
    { name: "Prathiksha", contact: "7338682609", color: "#00FFFF",des:"Registration" },
    { name: "Syed Najam", contact: "6360974247", color: "#FF6EC7",des:"Tech Events" },
  
  ];

  const largeScreenRanges = [4500, 6000]
  const smallScreenRanges = [8000, 9000]

  const { scrollY } = useScroll();
  const [scrollRanges, setScrollRanges] = useState(largeScreenRanges);

  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth <= 1200) {
        setScrollRanges(smallScreenRanges); // Mobile
      } else {
        setScrollRanges(largeScreenRanges); // Desktop
      }
    };

    updateRanges();
    window.addEventListener("resize", updateRanges);
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  const contactOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);

  return (
    <section id="contact-us" className="section-container pt-6">
      <div className="relative">
        <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px] lg:w-[47px] lg:h-[50px] w-[70px] h-[70px]">
          <Image src={atom} alt="atom" />
        </div>
      </div>
      <SectionTitle title={"Contact Us"} delay={12} />

      <div className="relative">
        <div className="absolute top-[460px] right-0 sm:top-[-70px] sm:right-0 lg:top-[-32px] lg:right-0 w-[68px] h-[58px] lg:w-[106px] lg:h-[74px] w-[70px] h-[70px]">
          <Image src={GDGAlgiers} alt="GDG" />
        </div>
      </div>

      <Animate tag="h6" className="m-[26px] text-center lg:text-lg text-gray-400 font-bold">Click the Contacts below to <span className="text-emerald-300">Chat in WhatsApp</span></Animate>
      <Animate delay={12} x={50} y={-50} className="flex sm:scale-0 flex-wrap justify-center space-between">
          {contactData.map((cont, index) => (
            <motion.div
              key={index}
              style={{ opacity: contactOpacity }}
              >
              <Tilt
                className="cursor-pointer rounded-lg  lg:p-8 group p-2"
                tiltMaxAngleY={40}
                transitionSpeed={350}
                glareEnable={true}
                glareMaxOpacity={1.1}
                glareColor={cont.color}
                glarePosition="all"
              >
                <Link href={"https://wa.me/+91" + cont.contact} target="_blank">
                <h2 className="text-2xl lg:text-3xl font-bold leading-tight lg:leading-snug">
                  {cont.name}
                </h2>

                <p style={{color: cont.color}} className="text-sm lg:text-xl font-medium leading-6 lg:leading-8 group-hover:hidden">
                  {cont.contact}
                </p>
                <p style={{color:"whitesmoke"}} className="text-sm lg:text-xl font-medium leading-6 lg:leading-8 group-hover:hidden">
                  {cont.des}
                </p>
                  <span 
                  className="group-hover:opacity-100 opacity-0 text-sm lg:text-xl font-semibold text-center"
                  style={{color: cont.color}}
                  >
                    Chat With {cont.name}
                  </span>
                  </Link>
              </Tilt>
            </motion.div>
          ))}
      </Animate>

      <div className="relative">
        <div className="absolute invisible sm:visible right-[640px] h-[46px] w-[61px] h-[93px] w-[93]">
          <Image src={computer} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
