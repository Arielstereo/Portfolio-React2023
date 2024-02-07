import CV from "../../assets/Ariel_Martinez_CV.pdf";
import { motion } from "framer-motion";

const HeaderBtn = () => {
  return (
    <div className="btn">
      <motion.a
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        whileHover={{ 
          scale: 1.2, 
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        href={CV}
        download
        className="btn__primary"
      >
        Download CV
      </motion.a>
      <motion.a
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        whileHover={{ 
          scale: 1.2, 
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        }}
        href="#contact"
        className="btn__secondary"
      >
        Contact
      </motion.a>
    </div>
  );
};

export default HeaderBtn;
