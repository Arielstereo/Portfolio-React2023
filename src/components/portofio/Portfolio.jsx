import "./portfolio.css";
import proyects from "../../utils/proyects.json";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="container" id="portfolio">
      <h2>Portofolio</h2>
      <div className="portfolio__container">
        {proyects.proyects.map((item) => (
          <article key={item.id} className="portfolio__card">
            <div className="portfolio__title">
              <h3>{item.name}</h3>
              <h4>{item.description}</h4>
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
              }}
            >
              <img className="portfolio__img" src={item.img} alt="img" />
            </motion.div>
            <div className="btn">
              <motion.a
                  whileHover={{ 
                    scale: 1.1, 
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px rgb(255,255,255)",
                  }}
                className="btn__primary"
                href={item.github}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.1, 
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                className="btn__secondary"
                href={item.web}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </motion.a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
