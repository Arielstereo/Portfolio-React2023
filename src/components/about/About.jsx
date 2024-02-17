import "./about.css";
import { BsCheck } from "react-icons/bs";

const About = () => {
  return (
    <section className="container" id="about">
      <h2>About Me</h2>
      <h4>Experience</h4>
      <div className="card__group">
        <img className="desktop-img" src="./laptop.png" alt="pc" />
        <img className="mobile-img" src="./phone.png" alt="phone" />
        <div className="card">
          <ul>
            <li>
              <BsCheck className="icon__li" /> <h3>Equo (trainee 2022)</h3>
            </li>
            <li>
              <BsCheck className="icon__li" />
              <h3>No Country (emulation 2023)</h3>
            </li>
            <li>
              <div className="loader_about"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
