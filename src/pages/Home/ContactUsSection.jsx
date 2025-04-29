import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedBorderCard from "../../components/AnimatedBorderCard";
import { section } from "motion/react-client";

const ContactUsSection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <h2>Contact Us</h2>
            <p className=" my-4">
              Feel free to use the form or drop us an email. Old-fashioned phone
              calls work too.
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-main" />
                <span>01627590939</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-main" />
                <span>branverse@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-main mt-1" />
                <span>Comilla(Dabidwar),Bangladesh </span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <AnimatedBorderCard
            borderRadius="4px"
            borderWidth="2px"
            colors={["#3ABEFF", "#2563EB", "#5EEAD4"]}
          >
            <form className="bg-white space-y-4 p-6">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full  text-main  p-2 border-b-2 border-gray-300 focus:border-[#2563eb] 
            focus:placeholder-[#2563eb] outline-none bg-transparent
            placeholder:text-gray-400"
                />

                <select
                  className="w-full text-main p-2 border-b-2  border-gray-300 focus:border-[#2563eb] 
            focus:placeholder-[#2563eb] outline-none bg-transparent
            placeholder:text-gray-400"
                  name="service"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="web">Website Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="design">Graphic Design</option>
                  <option value="business">Business Growth Consultation</option>
                </select>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full   text-main pb-2 border-b-2 border-gray-300 focus:border-[#2563eb] 
          focus:placeholder-[#2563eb] outline-none bg-transparent
          placeholder:text-gray-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full  text-main pb-2 border-b-2 border-gray-300 focus:border-[#2563eb] 
            focus:placeholder-[#2563eb] outline-none bg-transparent
            placeholder:text-gray-400"
              />
              <textarea
                className="w-full  text-main border-b-2 border-gray-300 focus:border-[#2563eb] 
        focus:placeholder-[#2563eb] outline-none bg-transparent
        placeholder:text-gray-400"
                placeholder="Type your message..."
                required
              ></textarea>
              <button className="button w-full bg-main text-white hover:scale-[1.04]">
                Submit
              </button>
            </form>
          </AnimatedBorderCard>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
