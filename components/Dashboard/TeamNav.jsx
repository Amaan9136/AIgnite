import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import AIgnite from "../../images/logos/Aignite2.0.png";
import Animate from "../helpers/Animate-motion.jsx";
import Purplebutton from "../helpers/Purpulebutton.jsx";
import NavLinks from "./links";
const TeamNav = ({setActiveTab,team}) => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <header className="pt-8 lg:pt-1 flex flex-col gap-8">
      {/* Desktop menu */}
      <div>
        <div className="flex justify-between items-center">
          <Animate delay={1} className="cursor-pointer">
            <Tilt
              tiltMaxAngleX={60}
              tiltMaxAngleY={40}
              scale={1.5}
              transitionSpeed={250}
            // glareEnable={true}
            // glareMaxOpacity={0.5}
            // glareColor="#fff"
            // glarePosition="all"
            // className="p-4 cursor-pointer"
            >
              <Image src={AIgnite} alt="AIgnite-Logo" width={250} height={250} priority={1} />
            </Tilt>
          </Animate>

          <Animate delay={2} tag="ul" className="hidden lg:flex items-center text-xl gap-16 font-bold text-qiskit-white">
            {NavLinks.map((navLink, idx) => {
              if(navLink.content === "Project PPT Submission" && team.eventName !== "TECHXHIBIT REGISTRATION") {
                console.log(team.eventName);
                return null;
              }
              return (
                <Tilt
                  key={11 + idx}
                  tiltMaxAngleX={60}
                  tiltMaxAngleY={40}
                  scale={1.5}
                  transitionSpeed={250}
                  className="cursor-pointer">
            
                    <Animate    onClick={() =>{ setActiveTab(navLink.content.toLowerCase().replace(" ", ""))}} tag="li" delay={idx + 2} y={idx + 50} x={idx + 50} className="hover:text-qiskit-yellow transition-all duration-500 relative">
                      {navLink.content == "Home" && (
                        <div className="absolute left-0 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                      )}
                      {navLink.content}
                    </Animate>
                 
                </Tilt>
              );
            })}
          </Animate>

          <Animate delay={10} y={55} x={55} className="hidden lg:flex cursor-pointer">
            <Purplebutton title={"Back to Hub"} redirect={"https://aignite.live/"} 
                    needImage={true}
                    />
          </Animate>

          <div
            onClick={() => setIsNavToggled(!isNavToggled)}
            className="flex flex-col cursor-pointer gap-2 lg:hidden"
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isNavToggled && (
        <div className="flex flex-col items-center lg:hidden">
              
          <Animate tag="ul" className="flex flex-col items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
             <Tilt
                  key={22 + 0}
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  scale={1.1}
                  transitionSpeed={200}
                  className="cursor-pointer">
                  
                    <Animate  onClick={() =>{ window.location.href = 'https://aignite.live/'; setIsNavToggled(false);}} 
                      tag="li" delay={0 + 2} y={0 + 80} x={0 + 80}
                      className="cursor-pointer relative transition-all duration-500 hover:text-qiskit-yellow"
                    >
                     
                        <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                    
                      <p>Back to Hub</p>
                    </Animate>
                
                </Tilt>
            {NavLinks.map((navLink, idx) => {
              return (
                <Tilt
                  key={22 + idx}
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  scale={1.1}
                  transitionSpeed={200}
                  className="cursor-pointer">
                  
                    <Animate  onClick={() =>{ setActiveTab(navLink.content.toLowerCase().replace(" ", ""))}} 
                      tag="li" delay={idx+ 1 + 2} y={idx+1 + 80} x={idx+1 + 80}
                      className="cursor-pointer relative transition-all duration-500 hover:text-qiskit-yellow"
                    >
                      {navLink.content == "Home" && (
                        <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                      )}
                      <p>{navLink.content}</p>
                    </Animate>
                
                </Tilt>
              );
            })}
          </Animate>
          
        </div>
      )}
    </header>
  );
};

export default TeamNav;
