import Tilt from "react-parallax-tilt";

const ParagSection2 = ({ title = "", paragraph = "", highlights = [], hoverColor = "#4999D0" }) => {
  const renderParagraph = () => {
    const highlightRegex = new RegExp(`(${highlights.join('|')})`, 'gi');
    const parts = paragraph.split(highlightRegex);
    return parts.map((part, index) =>
      highlights.includes(part) ? (
        <span key={index} className="font-bold text-qiskit-yellow">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-col gap-10 items-center lg:flex-row">
<Tilt
  className="cursor-pointer rounded-lg"
  scale={1.1}
  transitionSpeed={300}
  glareEnable={true}
  glareMaxOpacity={0.5} 
  glareColor={hoverColor} 
  glarePosition="all"
>
        <div className="flex flex-col gap-5 flex-1 h-[250px] lg:h-[321px] bg-gray-800 p-4 rounded-lg">
          {title && (
            <h2 className="text-qiskit-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-snug">
              {title}
            </h2>
          )}
          <p className="text-qiskit-white text-sm lg:text-xl font-medium leading-6 lg:leading-8">
            {renderParagraph()}
          </p>
        </div>
      </Tilt>
    </div>
  );
};

export default ParagSection2;

// Example Usage
/*
<ParagSection2 
  title="Important Information"
  paragraph="This is a sample paragraph that contains text to highlight and another important text."
  highlights={["text to highlight", "important text"]} 
/>
*/
