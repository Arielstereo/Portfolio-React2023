import "./header.css";
import HeaderBtn from "./HeaderBtn";
import Dev from "../../assets/logo_transparent.png";
import HeaderSocials from "./HeaderSocials";
import Atropos from 'atropos/react';


const Header = () => {
  return (
    <header id="#">
      <div className="container">
        <Atropos>
        <div className="img__container">
          <img className="img" src={Dev} alt="Dev-img" />
        </div>
        </Atropos >
        <HeaderSocials />
        <HeaderBtn />
      </div>
    </header>
  );
};

export default Header;
