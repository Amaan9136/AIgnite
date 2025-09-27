import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const EventUpdates = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Default sample data if no updates provided
  const data = [
    {
      text: "PPT submission deadline extended to 8th October. Submit now!",
      link: "/registration/techxhibit"
    },
      {
      text: "Jury panel revealed! Meet our expert judges.",
      link: "/#about-jury"
    },
    // {
    //   text: "Workshop on AI/ML fundamentals scheduled for next week. Stay tuned!",
    //   link: "/schedule"
    // },
    // {
    //   text: "New sponsor announcement: TechCorp joins as Platinum Sponsor.",
    //   link: "/sponsors"
    // },
  
    // {
    //   text: "Event location updated: Check the new venue details.",
    //   link: "/location"
    // }
  ];

 

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(timer);
  }, [data.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleSlideClick = (link) => {
    router.push(link);
  };
  if (data.length === 0) {
    return null; // Don't render the section if there are no updates
  }
  return (
    <div className="section-container py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-qiskit-white mb-4">
          Event Updates
        </h2>
        <p className="text-gray-300 text-lg">
          Stay updated with the latest news and announcements
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="relative h-64 overflow-hidden rounded-lg bg-gray-900/50 border border-gray-700">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            dragMomentum={false}
            onDragEnd={(event, info) => {
              if (info.offset.x < -50) {
                nextSlide();
              } else if (info.offset.x > 50) {
                prevSlide();
              }
            }}
            className="cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ x: direction * 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -direction * 300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-8 cursor-pointer"
                onClick={() => handleSlideClick(data[currentIndex].link)}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-qiskit-blue-normal to-qiskit-purple-lighter rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">!</span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed hover:text-qiskit-white transition-colors">
                    {data[currentIndex]?.text}
                  </p>
                  <div className="mt-6 text-qiskit-yellow font-medium text-sm opacity-0 hover:opacity-100 transition-opacity">
                    Click to learn more →
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white md:p-4 p-3 rounded-full shadow-lg transition-colors"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white md:p-4 p-3 rounded-full shadow-lg transition-colors"
        >
          ›
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-qiskit-yellow'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventUpdates;
