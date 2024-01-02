import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container__logo">
        <h3 className="logo">Ariel Martinez</h3>
        <h4 className="copyright">
          <AiOutlineCopyrightCircle className="icon__copy" />
          Argentina, Buenos Aires 2023
        </h4>
      </div>
      <ul className="sections">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#porfolio">Porfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="socials__icons">
        <a href="https://www.linkedin.com/in/arielstereo/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin className="socials__icons" />
        </a>
        <a href="https://github.com/Arielstereo/" target="_blank" rel="noopener noreferrer">
          <BsGithub className="socials__icons" />
        </a>
        <a href="mailto:arielstereo@msn.com">
          <HiOutlineMail className="socials__icons" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
