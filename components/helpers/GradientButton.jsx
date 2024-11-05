import Link from 'next/link';

const GradientButton = ({ title, redirect, color = 'rgba(10, 42, 140, 1)', closed = false }) => {
  return (
    <Link
      href={closed ? "#about-event" : redirect} 
      target="_blank"
      className={`inline-block text-white font-semibold px-6 py-2 rounded-md transition duration-300 ease-in-out transform ${
        closed ? 'cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'
      }`}
      style={{
        background: closed 
          ? 'rgba(128, 128, 128)' // Gray background to indicate disabled state
          : `linear-gradient(to right, rgba(5, 20, 80, 0.9), ${color}, rgba(5, 20, 80, 0.9))`,
        pointerEvents: closed ? 'none' : 'auto', // Disable clicks if closed
      }}
    >
      {title}
    </Link>
  );
};

export default GradientButton;
