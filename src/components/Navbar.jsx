import React, { useState, useEffect } from "react";
import { MdMenuOpen, MdCloseFullscreen } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let location = useLocation();
  useEffect(() => {
    setshowNav(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // NavLink active class using Tailwind
  const navLinkClass = ({ isActive }) =>
    `text-white px-4 py-2 font-semibold relative transition-all duration-300 ${
      isActive
        ? "after:content-[''] after:absolute after:bottom-0 after:left-4 after:w-[40%] after:h-[2px] after:bg-white after:transition-all after:duration-300"
        : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white/50 hover:after:transition-all hover:after:duration-300"
    }`;

  let listItems = (
    <>
      <NavLink onClick={() => setshowNav} to="/" className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="/services" className={navLinkClass}>
        Services
      </NavLink>
      <NavLink to="/portfolio" className={navLinkClass}>
        Portfolio
      </NavLink>
      <NavLink to="/blog" className={navLinkClass}>
        Blog
      </NavLink>
      <NavLink to="/contact" className={navLinkClass}>
        Contact
      </NavLink>
    </>
  );

  return (
    <header
      className={`bg-main fixed left-0 top-0 z-40 w-full transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-blue-600/90 border-b-2 border-white/80" : ""
      }`}
    >
      <div className="container py-0">
        <div className="flex justify-between py-3 items-center">
          {/* Logo */}
          <div className="w-10">
            <img src="/light_logo.png" alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-5 items-center">{listItems}</ul>
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button className="button bg-white text-main hidden md:block">
              Get Free Quote
            </button>
            <button
              className="text-3xl text-white cursor-pointer md:hidden"
              onClick={() => setshowNav(true)}
            >
              <MdMenuOpen />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {showNav && (
        <div className="md:hidden fixed inset-0 bg-main z-50">
          <ul className="flex flex-col gap-6 justify-center items-center h-full p-5 text-xl">
            {React.Children.map(listItems, (child) =>
              React.cloneElement(child, {
                className: `${navLinkClass(
                  child.props
                )} w-full text-center py-3`,
              })
            )}
          </ul>
          <button
            className="absolute right-5 top-5 text-3xl text-white"
            onClick={() => setshowNav(false)}
          >
            <MdCloseFullscreen />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
