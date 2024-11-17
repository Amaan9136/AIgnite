import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function ThanksForParticipating() {
  return (
    <div className="flex justify-center grow mt-20 lg:mt-0 lg:mr-[20rem]">
      <div className="flex items-center gap-8 lg:gap-8 lg:flex-row 2xl:gap-24">
        <Tilt
          tiltMaxAngleX={50}
          tiltMaxAngleY={25}
          scale={1.1}
          transitionSpeed={250}
          className="cursor-pointer"
        >
          <div className="p-4">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#908026] to-[#E7C400] text-[20px] sm:text-[24px] md:text-[30px] font-semibold text-center">
              Thank you for Participating!
            </p>
          </div>

        </Tilt>
      </div>
    </div>
  )
}
