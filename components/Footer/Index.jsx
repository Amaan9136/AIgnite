import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import AIgnite from "../../images/logos/Aignite2.0.png";
import Arrow from "../../images/shapes/Arrow.png";
import AlgeriaSymbol from "../../images/shapes/GDGAlgiers.png";
import GlobeShape from "../../images/shapes/globe.png";
import { socialsMedia } from "./data";

const Footer = () => {
  return (
    <footer className="mt-32 footer-bg text-qiskit-white flex flex-col gap-6 relative" id="footer">
      <div className="hidden lg:block absolute top-4 left-[33rem]">
        <Image src={GlobeShape} height={42} width={42} />
      </div>
      <div className="flex flex-col gap-6 items-center">
        {/* LOGOS */}
        <div className="flex items-center gap-7 justify-center">
          <Tilt className="cursor-pointer" tiltMaxAngleX={15} tiltMaxAngleY={30}>
            <Image src={AIgnite} width={"180px"} height={"60px"} />
          </Tilt>
        </div>

        <Tilt className="cursor-pointer" tiltMaxAngleX={30} tiltMaxAngleY={15}>
          <p
            className="font-medium text-center leading-[2rem] lg:text-2xl"
          >
            Empowering Intelligence, Enhancing Humanity.
          </p>
        </Tilt>

        <Tilt className="flex gap-10 justify-center items-center"> {/* Centering applied here */}
          <div
            className="mb-10 h-[67px] bounce w-[67px]">
            <Image src={Arrow} layout="fill" alt="Arrow"/>
          </div>
          {socialsMedia.map((socialMedia, idx) => {
            return (
              <Link
                href={socialMedia.redirect}
                target="__blank"
                key={idx}
                className="cursor-pointer"
              >
                <Image src={socialMedia.logo} />
              </Link>
            );
          })}
        </Tilt>
      </div>
      {/* Copyrights */}
      <div className="flex justify-center px-4">
        <p className="text-[0.9375rem] pb-2 text-center">
          Copyright © 2024 WeXCode - AIgnite. All Rights Reserved.
        </p>
      </div>

      <div className="absolute bottom-[4rem] -left-10 lg:bottom-0 lg:left-0">
        <Image src={AlgeriaSymbol} height={74} width={107} />
      </div>
      <div className="absolute bottom-[4rem] right-0 lg:bottom-0 lg:right-1/4">
        <Image src={GlobeShape} height={42} width={42} />
      </div>
    </footer>
  );
};

export default Footer;
