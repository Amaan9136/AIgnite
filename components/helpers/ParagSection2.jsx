import Tilt from "react-parallax-tilt";

const ParagSection2 = ({ title = "", paragraph = "", highlights = [], hoverColor = "#4999D0" }) => {
  const renderParagraph = () => {
    const lowerCaseHighlights = highlights.map((highlight) => highlight.toLowerCase());
    const highlightRegex = new RegExp(`(${highlights.join('|')})`, 'gi');

    return paragraph.split('\n').map((line, lineIndex) => {
      const parts = line.split(highlightRegex);

      return (
        <span key={lineIndex} className="block mt-1 text-qiskit-white">
          {parts.map((part, index) => (
            typeof part === 'string' && lowerCaseHighlights.includes(part.toLowerCase()) ? (
              <span key={index} className="font-bold text-qiskit-yellow">{part}</span>
            ) : (
              part
            )
          ))}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col gap-10 items-center lg:flex-row">
      <Tilt
        className="cursor-pointer rounded-lg"
        transitionSpeed={300}
        glareEnable={true}
        glareMaxOpacity={1.5}
        glareColor={hoverColor}
        glarePosition="all"
      >
        <div className="flex flex-col gap-2 flex-1 bg-gray-800 p-4 rounded-lg">
          {title && (
            <h2 className="text-qiskit-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-snug">
              {title}
            </h2>
          )}
          <p className="text-sm lg:text-xl font-medium leading-6 lg:leading-8">
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
  title="Event Highlights"
  paragraph="Welcome to Sharkathon\n24-hour hackathon event\nJoin us for innovation and competition"
  highlights={["Sharkathon", "hackathon", "innovation", "competition"]} 
/>
*/