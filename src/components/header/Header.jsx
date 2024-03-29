import "./header.css";
import HeaderBtn from "./HeaderBtn";
import Dev from "../../assets/logo_transparent.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";
import confetti from 'canvas-confetti'

const Header = () => {
  confetti({
    particleCount: 300,
    spread: 100,
    origin: { y: 0.7 }
  });
  return (
    <header id="#">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 5 }}
          className="img__container"
        >
          <img className="img" src={Dev} alt="Dev-img" />
        </motion.div>
        <motion.div  initial={{ x: 0, opacity: 1}}
        animate={{ x: 1200,opacity:0}}
        transition={{ duration: 15 }} className="loader_pacman"></motion.div>
        <HeaderSocials />
        <HeaderBtn />
      </div>
    </header>
  );
};

export default Header;
