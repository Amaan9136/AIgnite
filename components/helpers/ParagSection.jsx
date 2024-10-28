import Image from "next/image";
import Tilt from "react-parallax-tilt";
import YellowButton from "../helpers/YellowButton";
const ParagSection = ({
  keyword1,
  paragraph1,
  keyword2,
  paragraph2,
  img,
  reverse,
  redirect
}) => {
  return (
    <div className="flex flex-col gap-10 items-center lg:flex-row">
      <div className="flex flex-col gap-11 flex-1">
        <p className="text-qiskit-white text-sm lg:text-xl font-medium leading-6 lg:leading-8 lg:pl-8">
          <span className="font-bold text-qiskit-yellow">{keyword1}</span>
          {paragraph1}
          <span className="font-bold text-qiskit-yellow">{keyword2}</span>
          {paragraph2}
        </p>

        <div>
          <YellowButton redirect={redirect} title={"Visit our website"} />
        </div>
      </div>

      <div
        className={`relative w-[250px] h-[250px] lg:w-[321px] ${reverse && "lg:order-first"
          }`}
      >
        <Tilt
          // tiltMaxAngleX={80}
          // tiltMaxAngleY={40}
          // scale={1.1}
          // transitionSpeed={300}
          // glareEnable={true}
          // glareMaxOpacity={2}
          // glareColor="#4999D0"
          // glarePosition="all"
          className="cursor-pointer">
          <Image src={img} width={550} height={550} alt="" className="rounded-lg shadow-md" />
        </Tilt>
      </div>
    </div>
  );
};

export default ParagSection;
