import { BsLinkedin, BsGithub } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a className="link__socials" href="https://www.linkedin.com/in/arielstereo/" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a className="link__socials" href="https://github.com/Arielstereo/" target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a className="link__socials" href="mailto:arielstereo@msn.com">
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default HeaderSocials;
