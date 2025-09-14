import { useEffect } from "react";

const Formpage = ({ formlink }) => {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds(); // ensure Tally initializes the iframe
    }
  }, [formlink]);

  return (
    <div
      className="w-screen h-screen"
      style={{ overflow: "hidden" }} // hide scrollbars
    >
      <iframe
        data-tally-src={formlink}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="TECHXHIBIT REGISTRATION"
      ></iframe>
    </div>
  );
};

export default Formpage;
