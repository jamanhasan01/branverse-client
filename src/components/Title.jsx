import React from "react";

const Title = ({ title, subtitle, hColor, pColor }) => {
  return (
    <div className="w-full mx-auto text-center">
      <h2
        className="mb-4"
        style={{ color: hColor }} // use inline style
      >
        {title}
      </h2>
      <p
        className={`w-full md:w-1/2 text-xl mx-auto text-gray-500`}
        style={{ color: pColor }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
