import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Atom from '../../images/shapes/atomWhite.png';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const targetDate = dayjs('2025-10-13T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();
      const diff = targetDate.diff(now);

      if (diff <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section className="relative w-screen min-h-[25vh] md:min-h-screen overflow-hidden ">
      {/* Simple background elements */}
      <div className="absolute inset-0 sm:max-h-[30vh]
">
        <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
          <Image src={Atom} alt="Atom" width={64} height={64} />
        </div>
        <div className="absolute top-20 right-20 w-12 h-12 opacity-15">
          <Image src={Atom} alt="Atom" width={48} height={48} />
        </div>
        <div className="absolute bottom-20 left-20 w-20 h-20 opacity-20">
          <Image src={Atom} alt="Atom" width={80} height={80} />
        </div>
        <div className="absolute bottom-10 right-10 w-14 h-14 opacity-15">
          <Image src={Atom} alt="Atom" width={56} height={56} />
        </div>
      </div>

      {/* Main timer container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="text-center">
          {/* Title */}
          <div className="mb-2 md:mb-8 lg:mb-16">
            <h1 className="text-base md:text-5xl lg:text-6xl font-bold text-white mb-1 md:mb-4">
              Countdown TO AIgnite 2025
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-yellow-400 font-semibold">
              OCTOBER 13TH 2025
            </p>
          </div>

          {/* Timer display */}
          <div className="flex flex-nowrap justify-center gap-1 md:gap-4 lg:gap-8 mt-2 md:mt-8 lg:mt-16">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="flex flex-col items-center">
                <div className="relative bg-gray-800 rounded-2xl p-2 md:p-4 lg:p-8 border border-gray-600 shadow-lg w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32">
                  {/* Timer value */}
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 font-mono tracking-wider">
                      {unit.value}
                    </div>
                    <div className="text-xs md:text-sm text-yellow-400 font-semibold uppercase tracking-widest">
                      {unit.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <div className="mt-2 md:mt-8 lg:mt-16">
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              Get ready for an amazing experience. The countdown has begun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
