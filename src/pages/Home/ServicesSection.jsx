import {
  FaArrowRight,
  FaChartLine,
  FaLaptopCode,
  FaPalette,
  FaPhoneAlt,
} from "react-icons/fa";

import React from "react";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaChartLine className="text-4xl mb-4 text-blue-600" />,
      title: "Digital Marketing",
    },
    {
      icon: <FaPhoneAlt className="text-4xl mb-4 text-blue-600" />,
      title: "Business Growth Strategy",
    },
    {
      icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />,
      title: "Web Development",
    },
    {
      icon: <FaPalette className="text-4xl mb-4 text-blue-600" />,
      title: "Graphic Design",
    },
  ];
  return (
    <section className="bg-amber-50">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-3 items-start">
            <h2 className="text-main">
              What We Do Isn't Just Services,
              It's Strategy, Execution, and Results
            </h2>

            <p className="">
              From guide referral websites to telephone-booking meetings, our
              team will work solutions tailored to your unique vision.
            </p>

            <button className="button flex items-center bg-main text-white !px-4">
              Start Here <FaArrowRight className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg  hover:bg-gray-50 transition-colors border border-gray-200 flex flex-col items-center` }
              >
                <div>{service.icon}</div>
                <h5>{service.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
