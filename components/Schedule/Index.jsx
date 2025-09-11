import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import SectionTitle from "../helpers/SectionTitle";
import { schedule } from "./schedule";

const Schedule = () => {
  const largeScreenRanges = [3700, 5400]
  const smallScreenRanges = [6300, 6400]

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

  const tableOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);

  return (
    <section id="schedule" className="relative section-container pt-6">
      <SectionTitle title={"Schedule"}> </SectionTitle>
      <div className="md:hidden visible absolute left-0 top-0 z-25 sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]">
        <Image src={atom} alt="maqam chahid" layout="fill" />
      </div>
      <div className="md:hidden visible absolute right-0 top-0 z-25 sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]">
        <Image src={maqam} alt="maqam chahid" layout="fill" />
      </div>
      <div className="md:grid grid-cols-6 flex flex-col justify-center relative">
        <div className=" md:flex flex-col hidden md:visible">
          <div className=" absolute top-20 left-10 w-[82px] h-[82px]">
            <Image src={globe} alt="globe" layout="fill" />
          </div>
          <div className=" absolute top-80 left-[-20px] w-[100px] h-[100px]">
            <Image src={atom} alt="atom" layout="fixed" />
          </div>
        </div>

        <motion.div
          style={{ opacity: tableOpacity }}
          className="cursor-pointer col-span-4 flex flex-col mt-[5.5rem]"
        >
          <div className="bg-gradient-b-p bg-opacity-40  w-full md:pl-[50px] pl-[10px] mb-20 pr-[10px] md:pr-[30px] lg:py-[80px] md:py[70px] py-8 border-4 md:border-8 md:mt-[-30px] mt-[-10px]">
            <h1 className="relative top-[-12px] text-center text-3xl lg:text-4xl lg:top-[-30px] font-bold">Thursday-Friday, October 16th-17th</h1>
            <div className="sm:text-xl font-medium md:font-semibold text-xs md:px[10px] ">
              {schedule.map((scheduleInfo, idx) => {
                return (
                  <div
                    key={33 + idx}
                    className={`flex flex-row ${scheduleInfo.center ? "justify-center lg:text-2xl" : "justify-stretch"} mx-auto`}
                  >
                    <div className="flex flex-none py-2.5 md:pl-10">
                      <div className="">{scheduleInfo.Time}</div>
                    </div>
                    <div className="flex pl-2 md:pl-10 py-2.5 ">
                      <div>
                        <span className="text-qiskit-yellow">{scheduleInfo.event && scheduleInfo.event}</span>
                        <span style={{ color: "rgb(6 182 212)" }}> {scheduleInfo.location && scheduleInfo.location}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
        <div className=" md:flex flex-col hidden md:visible">
          <div className=" absolute w-[80px] h-[80px] lg:h-[100px] lg:w-[100px] -top-2 right-0 lg:right-10">
            <Image src={maqam} alt="maqam chahid" layout="fill" />
          </div>
          <div className=" absolute w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] top-60 right-0 lg:right-[-20px]">
            <Image src={globe} alt="globe" layout="fill" />
          </div>
          <div className=" absolute w-[70px] h-[70px] top-[350px] right-[50px] lg:right-[80px] xl:right-[120px]">
            <Image src={computer} alt="computer" layout="fill" />
          </div>
        </div>
        <div className="visible md:hidden absolute w-[60px] h-[60px] -bottom-20 right-0">
          <Image src={globe} alt="globe" layout="fill" />
        </div>
        <div className="visible md:hidden absolute w-[60px] h-[60px] bottom-0 left-0">
          <Image src={atom} alt="atom" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
