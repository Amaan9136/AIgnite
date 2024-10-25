import Tilt from "react-parallax-tilt";

const Button = ({ title }) => {
  return (
    <Tilt
      tiltMaxAngleX={60}
      tiltMaxAngleY={40}
      scale={1.1}
      transitionSpeed={250}>
      <button
        disabled={true}
        className="z-2 cursor-pointer"
      >
        <div className="bg-[url('/buttons-svg/purpule_button.svg')] bg-no-repeat bg-center bg-contain z-10">
          <div className="place-content-center flex justify-center">
            <div className="h-[120px] md:h-[140px] mx-[50px] md:mx-[60px] sm:font-medium text-qiskit-white text-[20px] pt-[40px] md:pt-[50px] sm:pt-[40px]">
              {title}
            </div>
          </div>
        </div>
      </button>
    </Tilt>
  );
};

export default Button;
