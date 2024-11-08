import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Atom from "../../images/sectionsAssets/Atom.png";
import Animate from "../helpers/Animate-motion";

const CounterAtom = ({ delay, time, timeleft, isHidden = false }) => {
  return (
    <Animate delay={delay} className={`${isHidden && 'hidden md:flex'} relative -mt-12`}>
      <Tilt
        tiltMaxAngleX={50}
        tiltMaxAngleY={25}
        scale={1.1}
        transitionSpeed={250}
        className="cursor-pointer">
        <Image src={Atom} height={160} width={160} />
        <div className="absolute top-1/3 right-[40%] lg:right-[40%]">
          <p style={{ color: "black" }} className="font-bold text-center text-base lg:text-4xl text-[14px]">{timeleft}</p>
          <p style={{ color: "black" }} className="text-center text-[16px] sm:text-sm">{time}</p>
        </div>
      </Tilt>
    </Animate>
  );
};

export default CounterAtom;