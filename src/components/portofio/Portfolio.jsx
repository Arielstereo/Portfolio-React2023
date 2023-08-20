import "./portfolio.css";
import proyects from "../../utils/proyects.json";

const Portfolio = () => {
  return (
    <section className="container" id="portfolio">
      <h2>Portofolio</h2>
      <div className="portfolio__container">
        {proyects.proyects.map((item) => (
          <article key={item.id} className="portfolio__card">
            <div className="portfolio__title">
            <h3>{item.name}</h3>
            <span>{item.description}</span>
            </div>
            <div>
              <img className="portfolio__img" src={item.img} alt="img" />
            </div>
            <div className="btn">
              <a className="btn__primary" href={item.github} target="_blank" rel="noreferrer">
                Github
              </a>
              <a className="btn__secondary" href={item.web} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
