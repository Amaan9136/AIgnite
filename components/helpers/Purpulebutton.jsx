import React from "react";
import Tilt from "react-parallax-tilt";

const Button = ({ title, redirect, disabled = false, needImage = false }) => {
  const handleRedirect = () => {
    if (!disabled && redirect) {
      if (redirect.startsWith("#")) {
        window.location.href = redirect;
      } else {
        const formattedRedirect =
          redirect.startsWith("http://") || redirect.startsWith("https://")
            ? redirect
            : `https://${redirect}`;
        window.open(formattedRedirect, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <Tilt
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      scale={1.1}
      transitionSpeed={250}
    >
      {needImage ? (
        <button
          disabled={disabled}
          className={`z-2 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          onClick={handleRedirect}
          aria-disabled={disabled}
        >
          <div className="bg-[url('/buttons-svg/purpule_button.svg')] bg-no-repeat bg-center bg-contain z-10">
            <div className="h-[120px] md:h-[135px] mx-[50px] md:mx-[60px] sm:font-medium text-qiskit-white text-[20px] pt-[40px] md:pt-[50px] sm:pt-[40px]">
              {title}
            </div>
          </div>
        </button>
      ) : (
        <div className="h-[100px] sm:h-[120px] md:h-[140px] mx-[20px] sm:mx-[30px] mt-[30px] lg:mt-[0px] md:mx-[50px] flex items-center justify-center sm:font-medium text-white text-[16px] md:text-[18px]">
          <button
            disabled={disabled}
            onClick={handleRedirect}
            className={`relative z-2 overflow-hidden rounded-lg p-0 ${disabled
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer px-3 py-3 sm:px-4 sm:py-4 bg-gradient-to-r from-purple-800 to-purple-600 rounded-lg transition duration-300 ease-in-out"
              }`}
            aria-disabled={disabled}
          >
            {title}
          </button>
        </div>

      )}
    </Tilt>
  );
};

export default Button;
