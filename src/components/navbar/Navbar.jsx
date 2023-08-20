import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("#");
  return (
    <nav className="nav">
      <a
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
        href="#"
      >
        Home
      </a>
      <a
        onClick={() => setActive("about")}
        className={active === "about" ? "active" : ""}
        href="#about"
      >
        About
      </a>
      <a
        onClick={() => setActive("portfolio")}
        className={active === "portfolio" ? "active" : ""}
        href="#portfolio"
      >
        Portfolio
      </a>
      <a
        onClick={() => setActive("contact")}
        className={active === "contact" ? "active" : ""}
        href="#contact"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
