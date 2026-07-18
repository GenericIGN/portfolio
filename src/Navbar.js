const Navbar = (props) => {
  const { tabCallback, selected } = props;

  return (
    <nav className="Navbar">
      <a href="#Home" onClick={() => tabCallback("Home")} className={`NavTab ${selected === 'Home' ? 'Selected' : ''}`}>Home</a>
      <a href="#Skills" onClick={() => tabCallback("Skills")} className={`NavTab ${selected === 'Skills' ? 'Selected' : ''}`}>Skills</a>
      <a href="#Projects" onClick={() => tabCallback("Projects")} className={`NavTab ${selected === 'Projects' ? 'Selected' : ''}`}>Projects</a>
    </nav>
  );
}

export default Navbar;