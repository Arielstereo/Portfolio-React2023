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
              <BsCheck className="icon__li" /> <h3>UTN (2021)</h3>
            </li>
            <h4>Web Developer Full Stack</h4>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="card">
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
        </SwiperSlide>
        <SwiperSlide className="card">
          <div className="title">
            <FaReact className="icon" /> <span>Skills </span>
          </div>
          <ul>
            <li>
              <BsCheck className="icon__li" /> <h3>HTML - CSS - JavaScript</h3>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h3>React.js</h3>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h3>Node.js (Express)</h3>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h3>MongoDB</h3>
            </li>
            <li>
              <BsCheck className="icon__li" /> <h3>Tailwind.css</h3>
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default About;
