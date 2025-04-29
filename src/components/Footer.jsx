import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-main mb-2">Branverse</h2>
          <p className="text-sm text-gray-500 mb-4">
            Empowering your brand with stunning websites, smart marketing, and bold ideas.
          </p>
          <div className="flex gap-4 text-xl text-main">
            <FaFacebookF className="hover:scale-110 transition" />
            <FaTwitter className="hover:scale-110 transition" />
            <FaLinkedinIn className="hover:scale-110 transition" />
            <FaInstagram className="hover:scale-110 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-main">Home</a></li>
            <li><a href="#" className="hover:text-main">About</a></li>
            <li><a href="#" className="hover:text-main">Services</a></li>
            <li><a href="#" className="hover:text-main">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-main">Web Development</a></li>
            <li><a href="#" className="hover:text-main">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-main">Graphic Design</a></li>
            <li><a href="#" className="hover:text-main">Business Growth</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm space-y-2 text-gray-500">
            <li>Email: <a href="mailto:info@branverse.com" className="hover:text-main">info@branverse.com</a></li>
            <li>Phone: <a href="tel:+8801627590939" className="hover:text-main">+880 1627 590 939</a></li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Branverse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
