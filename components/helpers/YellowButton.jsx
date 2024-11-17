import Link from "next/link";
import Tilt from "react-parallax-tilt";

const YellowButton = ({ redirect = "", title }) => {
  return (
    <div className="z-20">
      <Tilt
        tiltMaxAngleX={60}
        tiltMaxAngleY={40}
        scale={1.1}
        transitionSpeed={250} className="bg-[url('/buttons-svg/yellow_button.svg')] bg-no-repeat bg-center bg-contain z-10 mt-10 cursor-pointer">
        <Link href={redirect} target="_blank">
          <div style={{ color: "black" }} className="h-[80px] text-center sm:text-[15px] md:text-[15px] lg:text-2xl text-xl p-5 font-semibold">
            {title}
          </div>
        </Link>
      </Tilt>
    </div>
  );
};

export default YellowButton;