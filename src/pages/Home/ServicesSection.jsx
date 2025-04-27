import {
  FaArrowRight,
  FaChartLine,
  FaLaptopCode,
  FaPalette,
  FaPhoneAlt,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";


const ServicesSection = () => {
  const services = [
    {
      icon: <FaChartLine className="text-4xl mb-4 text-blue-600" />,
      title: "Digital Marketing",
      slug: "digital-marketing", // Add a slug for routing
    },
    {
      icon: <FaPhoneAlt className="text-4xl mb-4 text-blue-600" />,
      title: "Business Growth Strategy",
      slug: "business-growth-strategy",
    },
    {
      icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />,
      title: "Web Development",
      slug: "web-development",
    },
    {
      icon: <FaPalette className="text-4xl mb-4 text-blue-600" />,
      title: "Graphic Design",
      slug: "graphic-design",
    },
  ];
  
  return (
    <section className="bg-amber-50">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-2">
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
                className="relative p-6 py-10 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 flex flex-col items-center group"
              >
                <div>{service.icon}</div>
                <h5 className="text-center">{service.title}</h5>
                
                {/* Overlay div that appears on hover */}
                <div className="absolute inset-0 bg-main bg-opacity-70 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/services/${service.slug}`} className="button bg-white text-main transition-all duration-150">
                  Unlock Potential
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;