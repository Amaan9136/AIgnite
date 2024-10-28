import Image from "next/image";
import Tilt from "react-parallax-tilt";
import downArrow from "../../images/shapes/Arrow.png";
import Animate from "./Animate-motion";
const SectionTitle = ({ title, delay = 2 }) => {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="cursor-pointer">
      <Animate
        delay={delay}
        x={-50}
        className={`flex gap-4 md:justify-start items-end`}
      >
        <div className="flex md:h-20 md:w-16">
          <div className="relative w-[68px] h-[75px]">
            <Image src={downArrow} alt="" />
          </div>
        </div>
        <h2
          className={`text-4xl lg:text-5xl text-qiskit-blue-normal font-bold`}
        >
          {title}
        </h2>
      </Animate>
    </Tilt>
  );
};

export default SectionTitle;
