import AnimatedBorderCard from "../../components/AnimatedBorderCard";
import Title from "../../components/Title";
import { FiUsers, FiHeart, FiLayers, FiClock, FiTrendingUp } from "react-icons/fi";

const ServicesSection = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        {/* Title section */}
        <Title
          title="Why Branverse?"
          subtitle="We combine creative thinking with proven strategies to help you grow smarter, faster, and stronger."
          text_align="start"
          hColor="#2563EB"
        />

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6 mt-10">
          {/* Left Side - 7 Columns */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6">
            
            {/* Card 1 */}
            <div className="border-2 border-gray-100 rounded-lg shadow-lg p-6 flex flex-col justify-start gap-4 h-full">
              <div className="text-blue-600 text-3xl">
                <FiUsers size={40} />
              </div>
              <h4>Experienced Team</h4>
              <p className="text-gray-600">
                Years of hands-on experience delivering scalable solutions. If
                your needs grow, our experience adapts to meet higher demands.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-gray-100 rounded-lg shadow-lg p-6 flex flex-col justify-start gap-4 h-full">
              <div className="text-blue-600 text-3xl">
                <FiHeart size={40} />
              </div>
              <h4>Client-First Approach</h4>
              <p className="text-gray-600">
                Your goals guide every project decision. We prioritize
                transparency and trust at every stage.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-gray-100 rounded-lg shadow-lg p-6 flex flex-col justify-start gap-4 col-span-2 h-full">
              <div className="text-blue-600 text-3xl">
                <FiTrendingUp size={40} />
              </div>
              <h4>Creative & Strategic</h4>
              <p className="text-gray-600">
                We mix artistic vision with business strategy for results. Our
                strategic insights ensure your brand not only stands out but
                thrives in competitive markets, adapting to changing trends and
                customer needs.
              </p>
            </div>

          </div>

          {/* Right Side - 5 Columns */}
          <div className="col-span-12 lg:col-span-5 bg-blue-600 p-8 flex flex-col justify-center text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-white text-3xl mb-4">
              <FiClock size={40} />
            </div>
            <h4>On-Time Delivery</h4>
            <p className="text-white text-base">
              We respect timelines — no delays, no excuses.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
