import Image from "next/image";
import Tilt from "react-parallax-tilt";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import event1 from "../../images/speakers/1.png";
import event2 from "../../images/speakers/2.png";
import event3 from "../../images/speakers/3.png";
import SectionTitle from "../helpers/SectionTitle";
import YellowButton from "../helpers/YellowButton";

const AboutEvent = () => {
  const eventsData = [
    {
      name: "Reverse Engineering",
      image: event1,
      color: "#cb6ce6"
    },
    {
      name: "Shark Tank",
      image: event2,
      color: "#4999D0"
    },
    {
      name: "E-Sports",
      image: event3,
      color: "#fe8400"
    },
  ]
  return (
    <section id="about-event" className="section-container pt-12 lg:pt-24">

      <div className="relative">
        <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px]  lg:w-[47px] lg:h-[50px]">
          <Image
            src={atom}
            alt="atom"
          />
        </div>
      </div>

      <SectionTitle title={"About The Events"} delay={12} />

      <div className="relative">
        <div className="absolute top-[460px] right-0 sm:top-[-70px] sm:right-0 lg:top-[-32px] lg:right-0  w-[68px] h-[58px] lg:w-[106px] lg:h-[74px]">
          <Image
            src={GDGAlgiers}
            alt="GDG"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="absolute top-[650px] sm:top-[450px] right-[122px]  h-[48px] w-[48px] lg:right-[10px] 2xl:right-[10px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
            <Image
              src={globe}
              alt="globe"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-[-35px] left-[-25px] h-[60px] w-[60px]  lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
            <Image
              src={computer}
              alt="computer"
            />
          </div>

          {/* Events */}
          <div className="flex justify-center items-center">
            <div className="relative w-4/5 my-16 flex gap-8 flex-col lg:flex-row justify-between">
              {eventsData.map((eventObj, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index === 0 || index === 2 ? 'lg:scale-90' : 'lg:scale-[1.1]'} 
        ${index === 1 ? 'order-first' : 'order-last'}
         lg:order-none`}
                // index === 1 is to make the 2nd image first (Shark Tech) in mobile view
                >
                  <Tilt
                    tiltMaxAngleX={40}
                    tiltMaxAngleY={30}
                    scale={1.1}
                    transitionSpeed={300}
                    glareEnable={true}
                    glareMaxOpacity={2}
                    glareColor={eventObj.color}
                    glarePosition="all"
                    className="cursor-pointer"
                  >
                    <Image
                      src={eventObj.image}
                      alt={eventObj.name}
                      width={500}
                      height={500}
                      className="rounded-lg shadow-md"
                    />
                  </Tilt>

                  {/* Name Button */}
                  <div className="text-center mt-4 relative w-4/5 mx-auto z-10 -mt-24 ">
                      <YellowButton title={eventObj.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>

        <div className="relative">
          <div className="absolute top-[400px] left-[-30px] sm:top-[340px] sm:left-[-30px] h-[53px] w-[56px] lg:h-[66px] lg:w-[70px] 2xl:w-[105px] 2xl:h-[99px]">
            <Image
              src={atom}
              alt="atom"
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-[-35px] left-[-25px] h-[38px] w-[38px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
            <Image
              src={globe}
              alt="globe"
            />
          </div>
        </div>

      </div>
      <div className="relative">
        <div className="absolute invisible sm:visible right-[640px] h-[46px] w-[61px] 2xl:h-[93px] 2xl:w-[93]">
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