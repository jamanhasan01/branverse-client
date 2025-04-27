import React from "react";

const Title = ({ title, subtitle, text_align, hColor, pColor }) => {
  const alignment = text_align || "center"; // default center if not provided

  return (
    <div className={`text-${alignment}`}>
      <h2
        className="mb-2 h2"
        style={{ color: hColor }} // use inline style
      >
        {title}
      </h2>
      <p
        className={`w-1/2 ${alignment === "center" ? "mx-auto" : ""}`}
        style={{ color: pColor }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
