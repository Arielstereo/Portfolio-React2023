import CV from '../../assets/Ariel_Martinez_CV.pdf'

const HeaderBtn = () => {
  return (
    <div className="btn">
      <a href={CV} download className='btn__primary'>Download CV</a>
      <a href="#contact" className='btn__secondary'>Contact</a>
    </div>
  );
};

export default HeaderBtn;
