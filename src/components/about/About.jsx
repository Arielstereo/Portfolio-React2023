import "./about.css";
import { AiOutlineStar } from "react-icons/ai";
import { GiDiploma } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


const About = () => {
  return (
    <section className="container" id="about">
      <h2>About Me</h2>
      <Swiper
        className="card__group"
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="card">
          <div className="title">
            <GiDiploma className="icon" /> <span>Education </span>
          </div>
          <ul>
            <li>
              <BsCheck className="icon__li" /> <h2>UTN (2021)</h2>
            </li>
            <h3>Web Developer Full Stack</h3>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="title">
            <AiOutlineStar className="icon" /> <span>Experience </span>
          </div>
          <ul>
            <li>
              <BsCheck className="icon__li" /> <h2>Equo (trainee 2022)</h2>
            </li>
            <li>
              <BsCheck className="icon__li" />{" "}
              <h2>No Country (emulation 2023)</h2>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="title">
            <FaReact className="icon" /> <span>Skills </span>
          </div>
          <ul>
            <li>
              <BsCheck className="icon__li" /> <h2>HTML - CSS - JavaScript</h2>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h2>React.js</h2>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h2>Node.js (Express)</h2>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h2>MongoDB</h2>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h2>Tailwind.css</h2>
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default About;
