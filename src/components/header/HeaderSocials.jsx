import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const HeaderSocials = () => {
  return (
    <motion.div className="header__socials">
      <motion.a
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="link__socials"
        href="https://www.linkedin.com/in/arielstereo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </motion.a>
      <motion.a
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="link__socials"
        href="https://github.com/Arielstereo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </motion.a>
      <motion.a
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="link__socials"
        href="mailto:arielstereo@msn.com"
      >
        <HiOutlineMail />
      </motion.a>
    </motion.div>
  );
};

export default HeaderSocials;
