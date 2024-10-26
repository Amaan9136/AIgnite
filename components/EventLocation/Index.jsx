import Image from "next/image";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import event3 from "../../images/speakers/3.png";
import Animate from "../helpers/Animate-motion";
import SectionTitle from "../helpers/SectionTitle";


const AboutEvent = () => {
  return (
    <section id="about-event" className="section-container pt-12 lg:pt-24">
      <div className="relative">
        <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px]  lg:w-[47px] lg:h-[50px] 2xl:w-[70px] 2xl:h-[70px]">
          <Image
            src={atom}
            alt="atom"
          />
        </div>
      </div>
      <SectionTitle title={"Event Location"} delay={12} />

      <div className="relative">
        <div className="absolute top-[460px] right-0 sm:top-[-70px] sm:right-0 lg:top-[-32px] lg:right-0  w-[68px] h-[58px] lg:w-[106px] lg:h-[74px] 2xl:w-[70px] 2xl:h-[70px]">
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

        {/* AIT */}

        <Animate delay={14} x={-50} y={50} className="gap-8 row-2 lg:columns-2 mt-[50px] lg:m-4">
        <div className="flex md:h-[600px] p-2">
              <Image
                src={event3}
                alt="event1"
              />
          </div>
          
          <div className="gap-8 rows-2 p-4 sm:p-10">
            <p className="text-xl 2xl:text-3xl lg:text-2xl"><b>The Qiskit Fall Fest</b> is a collection of quantum computing events on college campuses around the world, with support from the entire IBM Quantum team. This year <b>WTM Algiers</b> is one of the 34 communities which are hosting the Qiskit Fall Fest event.</p>
            <div className="gap-4 columns-2 2xl:text-4xl lg:text-3xl text-xl font-bold mt-[15px] pr-2">
              <div className="flex-row">
                <p className="2xl:text-7xl lg:text-6xl text-2xl">1ST</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base">In Africa and</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base">MENA Region</p>
              </div>
              <div className="flex items-start gap-2 ">
                <p className="2xl:text-7xl lg:text-6xl text-2xl">+8</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base mt-[25px]">Talks Workshops Challenges</p>
              </div>
            </div>
          </div>
        </Animate>
        
        <Animate delay={14} x={-50} y={50} className="gap-8 row-2 lg:columns-2 mt-[50px] h-[450px] lg:m-4">
          <div className="flex justify-start md:h-[450px] p-2">
            <iframe
              className="map-outline"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.135193095531!2d75.79563977467208!3d13.341865287008616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad77aa342ed7f%3A0xaec39f2826004a0!2sAdichunchanagiri%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1729871591468!5m2!1sen!2sin"
              style={{ borderRadius: '20px', border: '1px solid #ccc', marginRight: '20px' }}  // Aligns map on the left
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="gap-8 rows-2 p-4 sm:p-10">
            <p className="text-xl 2xl:text-3xl lg:text-2xl"><b>The Qiskit Fall Fest</b> is a collection of quantum computing events on college campuses around the world, with support from the entire IBM Quantum team. This year <b>WTM Algiers</b> is one of the 34 communities which are hosting the Qiskit Fall Fest event.</p>
            <div className="gap-4 columns-2 2xl:text-4xl lg:text-3xl text-xl font-bold mt-[15px] pr-2">
              <div className="flex-row">
                <p className="2xl:text-7xl lg:text-6xl text-2xl">1ST</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base">In Africa and</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base">MENA Region</p>
              </div>
              <div className="flex items-start gap-2 ">
                <p className="2xl:text-7xl lg:text-6xl text-2xl">+8</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base mt-[25px]">Talks Workshops Challenges</p>
              </div>
            </div>
          </div>
        </Animate>

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