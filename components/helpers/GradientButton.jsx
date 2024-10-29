import Link from 'next/link';

const GradientButton = ({ title, redirect, color = 'rgba(10, 42, 140, 1)' }) => {
  return (
    <Link href={redirect} target={"_blank"}
        className="inline-block text-white font-semibold px-6 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        style={{
          background: `linear-gradient(to right, rgba(5, 20, 80, 0.8), ${color}, rgba(5, 20, 80, 0.8)`,
        }}
      >
        {title}
    </Link>
  );
};

export default GradientButton;
