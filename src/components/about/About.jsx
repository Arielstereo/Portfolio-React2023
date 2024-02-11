import "./about.css";
import { AiOutlineStar } from "react-icons/ai";
import { GiDiploma } from "react-icons/gi";
import { BsCheck } from "react-icons/bs";

const About = () => {
  return (
    <section className="container" id="about">
      <h2>About Me</h2>

      <div className="card__group">
        <div className="card">
          <div className="title">
            <GiDiploma className="icon" /> <span>Education </span>
          </div>
          <ul>
            <li>
              <BsCheck className="icon__li" /> <h3>UTN (2021)</h3>
            </li>
          </ul>
        </div>
        <hr />
        <div className="card">
          <div className="title">
            <AiOutlineStar className="icon" /> <span>Experience </span>
          </div>
          <ul>
            <li>
              <BsCheck className="icon__li" /> <h3>Equo (trainee 2022)</h3>
            </li>
            <li>
              <BsCheck className="icon__li" />
              <h3>No Country (emulation 2023)</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
