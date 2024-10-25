import Image from "next/image";
import Tilt from "react-parallax-tilt";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import NaceriddineBelaloui from "../../images/speakers/Nacereddine_Belaloui.jpeg";
import ParagSection from "../helpers/ParagSection";
import SectionTitle from "../helpers/SectionTitle";
import YellowButton from "../helpers/YellowButton";

const AboutEvent = () => {
  const eventsData = [
    {
      name: "Amaan1",
      description: "Lorem ipsm Lorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsm",
      image: NaceriddineBelaloui
    },
    {
      name: "Amaan2",
      description: "Lorem ipsm Lorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsm",
      image: NaceriddineBelaloui
    },
    {
      name: "Amaan3",
      description: "Lorem ipsm Lorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsmLorem ipsm",
      image: NaceriddineBelaloui
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
            <div className="relative w-4/5 my-16 flex flex-col lg:flex-row justify-between">
              {eventsData.map((eventObj, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center ${index === 0 || index === 2 ? 'lg:scale-75' : ''} 
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
                    glareColor="#4999D0"
                    glarePosition="all"
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
                  <div className="text-center mt-4">
                    <div className="relative w-4/5 mx-auto z-10 -mt-24 ">
                      <YellowButton title={eventObj.name} />
                    </div>
                    <p className="text-gray-600">{eventObj.description}</p>
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

        <div className="flex flex-col gap-12 lg:gap-28 lg:m-4">
          <ParagSection
            keyword1={"WTM Algiers "}
            paragraph1={`also known as the "Women Techmakers Algiers" program, was created to increase visibility, community, and resources for women in technology and also spread learning and build role models globally. It's located at`}
            keyword2={" the National Higher School of Computer science "}
            paragraph2={`and dedicated to anyone who's passionate and motivated about the tech field.`}
            img={NaceriddineBelaloui}
            reverse={false}
            redirect={"https://www.wtmalgiers.org/"}
          ></ParagSection>
          <ParagSection
            keyword1={"GDG Algiers "}
            paragraph1={`is a local group of developers and students who are interested in Google’s developer technology products. It is located at`}
            keyword2={" the National Higher School of Computer science "}
            paragraph2={`and hosts a variety of events activities for developers through different events that aim to help the developers community get the latest technology updates.`}
            img={NaceriddineBelaloui}
            reverse={true}
            redirect={"https://www.gdgalgiers.com"}
          ></ParagSection>
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