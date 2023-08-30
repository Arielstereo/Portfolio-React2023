import "./header.css";
import HeaderBtn from "./HeaderBtn";
import Dev from "../../assets/logo_transparent.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="#">
      <div className="container">
        <div className="img__container">
          <img className="img" src={Dev} alt="Dev-img" />
        </div>
        <HeaderSocials />
        <HeaderBtn />
      </div>
    </header>
  );
};

export default Header;
