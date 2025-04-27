import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  let listItems=<>
    <Link to="/">Home</Link>
    <Link to="/services">Services</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
  </>
  return (
    <header className="bg-main">
      <div className="container !py-2 text-white">
        {/* wrapper */}
        <div className="flex justify-between py-3 items-center">
          {/* logo */}
          <div className="w-10"><img src={'/light_logo.png'} alt="" /></div>
          {/* navlinks */}
          <div>
            <ul className="flex gap-5 items-center text-lg font-semibold">{listItems}</ul>
          </div>
          {/* action buttons */}
          <div>
            <button className="button bg-white text-main">Get Free Quote</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
