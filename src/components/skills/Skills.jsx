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
import { motion } from "framer-motion";

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <section className="container" id="skills">
      <h2>Skills</h2>

      <h4>Education</h4>
      <div className="slider-container">
        <div>
          <div className="description">
            <img className="img_utn" src="./utn_logo.jpg" alt="utn" />
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
      <div className="title_skill">
        <motion.span whileHover={{ scale: 1.2 }} className="span-1">
          FullStack
        </motion.span>
        <motion.span whileHover={{ rotate:360}} className="span-2">Web</motion.span>
        <motion.span whileHover={{scale:1.2}} className="span-3">Developer</motion.span>
        <div className="loader"></div>
      </div>
    </section>
  );
};

export default Skills;
