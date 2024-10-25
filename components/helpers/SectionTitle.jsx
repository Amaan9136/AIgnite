import Image from "next/image";
import downArrow from "../../images/shapes/Arrow.png";
import Animate from "./animate-motion";
const SectionTitle = ({ title, delay = 2 }) => {
  return (
    <Animate
      delay={delay}
      x={-50}
      className={`flex gap-4 2xl:gap-6 md:justify-start items-end`}
    >
      <div className="flex md:h-20 md:w-16 2xl:w-28 2xl:h-32">
        <div className="relative w-[68px] h-[75px] 2xl:w-[113px] 2xl:h-[127px]">
          <Image src={downArrow} alt="" />
        </div>
      </div>
      <h2
        className={`text-2xl sm:text-3xl lg:text-5xl 2xl:text-[5rem] text-qiskit-blue-normal font-bold`}
      >
        {title}
      </h2>
    </Animate>
  );
};

export default SectionTitle;
