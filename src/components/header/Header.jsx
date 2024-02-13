import "./header.css";
import HeaderBtn from "./HeaderBtn";
import Dev from "../../assets/logo_transparent.png";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const Header = () => {
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
        <motion.div  initial={{ x: 0 }}
        animate={{ x: 2000 }}
        transition={{ ease: "easeOut", duration: 50 }} className="loader_pacman"></motion.div>
        <HeaderSocials />
        <HeaderBtn />
      </div>
    </header>
  );
};

export default Header;
