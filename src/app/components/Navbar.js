import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 backdrop-blur-md bg-transparent bg-dark text-white h-16 p-4 flex justify-center space-x-6">
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
    </nav>
  );
};

export default Navbar;
