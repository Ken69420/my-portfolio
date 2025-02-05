import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the burger menu

  return (
    <nav className="fixed top-0 left-0 w-full z-10 backdrop-blur-md bg-transparent text-white h-16 px-4 flex justify-between items-center">
      {/* Title (Logo) */}
      <div className="text-xl font-bold cursor-pointer">Dewn</div>

      {/* Burger Menu Button (Visible on Small Screens) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)} // Toggle the burger menu
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Navigation Links (Hidden on Small Screens, Visible on Large Screens) */}
      <div className={`hidden md:flex space-x-6 items-center`}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
        >
          Projects
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
        >
          Education
        </Link>
        <Link
          to="papers"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
        >
          Academic Papers
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
        >
          Contact Me
        </Link>
      </div>

      {/* Mobile Navigation Links (Visible when Burger Menu is Open) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-dark p-4`}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="block cursor-pointer hover:text-accent transition-colors mb-2"
          activeClass="active"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="block cursor-pointer hover:text-accent transition-colors mb-2"
          activeClass="active"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className="block cursor-pointer hover:text-accent transition-colors mb-2"
          activeClass="active"
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className="block cursor-pointer hover:text-accent transition-colors mb-2"
          activeClass="active"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          className="block cursor-pointer hover:text-accent transition-colors mb-2"
          activeClass="active"
          onClick={() => setIsOpen(false)}
        >
          Education
        </Link>
        <Link
          to="papers"
          spy={true}
          smooth={true}
          duration={500}
          className="block cursor-pointer hover:text-accent transition-colors mb-2"
          activeClass="active"
          onClick={() => setIsOpen(false)}
        >
          Academic Papers
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="block cursor-pointer hover:text-accent transition-colors"
          activeClass="active"
          onClick={() => setIsOpen(false)}
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
