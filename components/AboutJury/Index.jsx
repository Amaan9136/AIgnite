import Image from "next/image";
import Tilt from "react-parallax-tilt";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
import Nacereddine_Belaloui from "../../images/speakers/Nacereddine_Belaloui.jpeg";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";

const AboutJury = () => {

  return (
    <section className="relative mb-28" id="about-jury">
      {/* <video
        src="/videos/jury.mp4"
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
        <div className="section-container pt-6">
          <SectionTitle title={"About Jury's"} />

{/* jury 1 */}
          <div className="flex flex-col gap-10 items-center lg:flex-row mt-[3rem] lg:m-12">
            <div className="flex flex-col gap-11 flex-1">
              <ParagSection2
                title="Event Highlights"
                paragraph="Welcome to Sharkathon\n24-hour hackathon event\nJoin us for innovation and competition"
                highlights={["Sharkathon", "hackathon", "innovation", "competition"]}
              />
            </div>

            <div
              className={`relative w-[250px] h-[250px] lg:w-[321px]`}
            >
              <Tilt
                className="cursor-pointer">
                <Image src={Nacereddine_Belaloui} width={550} height={550} alt="" className="rounded-lg shadow-md" />
              </Tilt>
            </div>
          </div>

{/* jury 2 */}
          <div className="flex flex-col gap-10 items-center lg:flex-row mt-[50px] lg:m-12">
            <div className="flex flex-col gap-11 flex-1">
              <ParagSection2
                title="Event Highlights"
                paragraph="Welcome to Sharkathon\n24-hour hackathon event\nJoin us for innovation and competition"
                highlights={["Sharkathon", "hackathon", "innovation", "competition"]}
              />
            </div>

            <div
              className={`relative w-[250px] h-[250px] lg:w-[321px] lg:order-first`}
            >
              <Tilt
                className="cursor-pointer">
                <Image src={Nacereddine_Belaloui} width={550} height={550} alt="" className="rounded-lg shadow-md" />
              </Tilt>
            </div>

          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutJury;
