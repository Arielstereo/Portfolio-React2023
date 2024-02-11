import Slider from "react-slick";
import "./skills.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaReact, FaNode, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJavascript,
} from "react-icons/si";
import { GiDiploma } from "react-icons/gi";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="container" id="skills">
      <h2>Skills</h2>
      <h4>Education</h4>
      <div className="slider-container">
      <div>
          <div className="title">
          <div className="loader"></div>
            <span className="span-1">FullStack</span> <span className="span-2">Web</span> <span className="span-3">Developer</span>
          </div>
            <div className="description">
            <GiDiploma size={50} /> <h3>UTN (2021)</h3>
            </div>
        </div>
        <Slider {...settings}>
          <div title="react">
            <FaReact size={50} />
          </div>
          <div title="node">
            <FaNode size={60} />
          </div>
          <div title="tailwind">
            <SiTailwindcss size={50} />
          </div>
          <div title="mongoDb">
            <SiMongodb size={50} />
          </div>
          <div title="mySql">
            <SiMysql size={60} />
          </div>
          <div title="git">
            <FaGitAlt size={50} />
          </div>
          <div title="html">
            <FaHtml5 size={50} />
          </div>
          <div title="css">
            <FaCss3Alt size={50} />
          </div>
          <div title="javaScript">
            <SiJavascript size={50} />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
