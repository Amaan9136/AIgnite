import Image from "next/image";
import Tilt from "react-parallax-tilt";
// import qBraid from "../../images/logos/qBraid.png";
import Selfypage from "../../images/logos/Selfypage.png";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import SectionTitle from "../helpers/SectionTitle";
// import YellowButton from "../helpers/YellowButton";

const TheyTrustedUs = () => {
  return (
    <section id="they-trusted-us" className="section-container pt-6">
      <div className="relative">
        <div className="mt-24">
          <SectionTitle title={"They Trusted us"} />
        </div>

        <div className="relative mt-14 lg:mt-16 ">
          <div className="w-10 h-10 absolute -left-2 -top-10 right-0 lg:w-14 lg:h-14">
            <Image src={globe} alt="" />
          </div>
        </div>

        <div className="invisible lg:visible h-7 w-7 absolute left-2/3 top-5 right-0 lg:w-12 lg:h-12 lg:-ml-10">
          <Image src={atom} alt="" />
        </div>

        <div className="absolute left-70 -top-24 right-28 h-12 w-14 -mr-20 -mt-0 lg:mt-8 lg:w-28 lg:h-20">
          <Image src={maqam} alt="" />
        </div>

        <div className="flex flex-col justify-center items-center gap-9 lg:ml-40 lg:flex-row lg:mt-20 lg:gap-28 w-3/4 mx-auto ">

          {/* <div className="lg:mt-10">
              <Image src={qBraid} alt="qBraid logo" />
          </div> */}
          <Tilt
            className="cursor-pointer rounded-lg"
            tiltMaxAngleX={30}
            tiltMaxAngleY={20}
            transitionSpeed={300}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor={"#097de0"}
            glarePosition="all"
          >
            <Image className="rounded-lg shadow-md" src={Selfypage} alt="Selfypage logo" width={280} height={280} />
            {/* <div className="text-center mt-4 relative w-4/5 mx-auto z-10 -mt-24">
              <YellowButton redirect={""} title={"Visit our website"} />
            </div> */}
          </Tilt>

        </div>
      </div>

      <div className="relative">
        <div className="invisible lg:visible absolute -left-2 -top-36 right-0 lg:w-16 lg:h-16">
          <Image src={atom} alt="" />
        </div>

        <div className="invisible lg:visible absolute left-1/2 lg:-top-1 lg:-ml-4 right-0 lg:w-16 lg:w-12">
          <Image src={computer} alt="" />
        </div>

        <div className="invisible lg:visible absolute lg:left-1/2 right-0 lg:w-8 lg:h-9">
          <Image src={atom} alt="" />
        </div>

        <div className="invisible lg:visible absolute left-90 -top-10 right-0 lg:w-14 lg:h-14">
          <Image src={globe} alt="" />
        </div>
      </div>

      <div className="visible lg:invisible w-10 h-10 -mt-80 ml-14">
        <Image src={atom} alt="" />
      </div>
      <div className="visible lg:invisible w-10 h-10 mt-64 ml-72">
        <Image src={globe} alt="" />
      </div>
      <div className="visible lg:invisible w-7 h-8 mt-62 ml-28">
        <Image src={atom} alt="" />
      </div>
      <div className="visible lg:invisible w-14 h-10 -mt-9 ml-24">
        <Image src={computer} alt="" />
      </div>
    </section>
  );
};

export default TheyTrustedUs;
