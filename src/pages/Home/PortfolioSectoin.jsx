import { Link } from "react-router-dom";
import AnimatedBorderCard from "../../components/AnimatedBorderCard";
import Title from "../../components/Title";

const projects = [
  {
    id: 1,
    title: "GetEarn Platform",
    description:
      "A micro-tasking and earning platform with role-based dashboards.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1751500800&v=beta&t=QOc-tC6gseyWOhz75JzZM1WoRMXG3SNfoOTgVKl-TvU ", // Replace with real images
    link: "https://getearn-18654.web.app/",
  },
  {
    id: 2,
    title: "Branverse Agency Site",
    description:
      "A full-stack agency website offering web, marketing, and branding services.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1751500800&v=beta&t=QOc-tC6gseyWOhz75JzZM1WoRMXG3SNfoOTgVKl-TvU",
    link: "#",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description:
      "A sleek React portfolio showcasing animations, projects, and contact tools.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQGVw0sVZ7Kj-g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1673636348356?e=1751500800&v=beta&t=QOc-tC6gseyWOhz75JzZM1WoRMXG3SNfoOTgVKl-TvU",
    link: "#",
  },
];

const PortfolioSection = () => {
  return (
    <section className="container">
      <Title
        title={" Our Work"}
        subtitle={`        Here are a few projects we've worked on recently. Want to see more?
          Let’s connect!`}
      ></Title>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map(({  title, description, image, }) => (

            <div className="space-y-4 p-4 border border-gray-200 rounded-xl shadow-2xl">
              <img
                src={image}
                alt={title}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h5>{title}</h5>
              <p>{description}</p>
              <Link
              
              >
               <button  className="button bg-main text-white">
               View Project →
               </button>
              </Link>
            </div>
      
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
