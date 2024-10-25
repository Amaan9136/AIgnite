const Button = ({ title }) => {
  return (
    <button
      disabled={true}
      className="z-2"
    >
      <div className="bg-[url('/buttons-svg/purpule_button.svg')] bg-no-repeat bg-center bg-contain z-10">
        <div className="place-content-center flex justify-center">
          <div className="h-[120px] md:h-[140px] 2xl:h-[220px] mx-[50px] md:mx-[60px] 2xl:mx-[80px] sm:font-medium text-qiskit-white text-[20px] 2xl:text-[30px] pt-[40px] md:pt-[50px] 2xl:pt-[90px] sm:pt-[40px]">
            {title}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Button;
