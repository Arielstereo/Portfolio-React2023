import { useState } from "react";
import { Link } from 'react-scroll';
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
  <nav className="nav">
      <Link
        to="#"
        smooth
        duration={500}
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        Home
      </Link>
      <Link
        to="about"
        smooth
        duration={500}
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}
      >
        About
      </Link>
      <Link
        to="portfolio"
        smooth
        duration={500}
        onClick={() => setActive("portfolio")}
        className={active === "portfolio" ? "active" : ""}
      >
        Portfolio
      </Link>
      <Link
        to="contact"
        smooth
        duration={500}
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : ""}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
