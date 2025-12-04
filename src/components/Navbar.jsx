import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getDesktopClass = (path) => {
    return location.pathname === path ? "text-kelly" : "text-white";
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={scrollToTop}>
          LogaRaja
          <span className="text-kelly">guru.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-12 text-lg font-medium">
          <li className="hover:text-kelly cursor-pointer text-white" onClick={() => scrollToSection("home")}>Home</li>
          <li className="hover:text-kelly cursor-pointer text-white" onClick={() => scrollToSection("about")}>About</li>
          <li>
            <Link
              to="/projects"
              className={`hover:text-kelly cursor-pointer ${getDesktopClass("/projects")}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="hover:text-kelly cursor-pointer text-white" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Kelly line at the bottom of navbar */}
      <div className="w-full h-0.5 bg-gray-300"></div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-6 text-lg font-medium bg-white px-6 pb-4 md:hidden items-center">
          <li className="cursor-pointer text-black hover:text-kelly text-center w-full" onClick={() => scrollToSection("home")}>Home</li>
          <li>
            <Link
              to="/projects"
              className="cursor-pointer text-black hover:text-kelly text-center w-full"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer text-black hover:text-kelly text-center w-full" onClick={() => scrollToSection("about")}>About</li>
          <li className="cursor-pointer text-black hover:text-kelly text-center w-full" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      )}
    </nav>
  );
}
