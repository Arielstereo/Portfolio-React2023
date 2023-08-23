import "./header.css";
import HeaderBtn from "./HeaderBtn";
import Dev from "../../assets/dev.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="#">
      <div className="container">
        <h1>Ariel Martinez</h1>
        <h2>Web Developer</h2>
        <HeaderBtn />
        <HeaderSocials />
        <div>
          <img className="img" src={Dev} alt="Dev-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
