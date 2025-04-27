import React from "react";
import heroImg from "../../assets/hero_image.png";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#2563EB] to-[#1E40AF] rounded-br-[100px]">
      <div className="container mt-10">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          {/*left side contents */}
          <div className=" space-y-6">
            <h1 className=" text-white">
              From Sketch to Success Turning Ideas into Digital Dreams.
            </h1>
            <p className="text-xl text-white">
              Branverse partners with you to transform ideas into reality
              through cutting-edge websites, powerful marketing, and business
              solutions that pave the way for your lasting success and impact
            </p>
            {/* buttons */}
            <div className=" space-x-5">
              <button className="button bg-white text-main">
                Get a Free Quote
              </button>
              <button className="button bg-white text-main">
                See Our Work
              </button>
            </div>
          </div>

          {/*right side  hero image */}
          <div className="flex items-end justify-end">
            <img className="hidden md:block md:w-full lg:w-[80%] xl:w-[70%]" src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
