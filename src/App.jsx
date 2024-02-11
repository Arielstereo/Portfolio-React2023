import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Portfolio from "./components/portofio/Portfolio";
import Contact from './components/contact/Contact'
import Skills from "./components/skills/Skills";


const App = () => (
  <div className="color-change-2x">
    <Header />
    <Navbar />
    <About />
    <Skills/>
    <Portfolio />
    <Contact/>
    <Footer />
  </div>
);

export default App;
