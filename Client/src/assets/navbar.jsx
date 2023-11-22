import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <p>SREEVAS</p>
        <div className="nav-links">
        <Link to ="/">Home</Link>
        <Link to="projects">Projects</Link>
        <Link to="skills">Skills</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
