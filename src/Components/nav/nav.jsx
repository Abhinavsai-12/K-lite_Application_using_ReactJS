import './nav.css';
import logo from '../assets/klitelogo.png';

import About from './about';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="index.html">
          <img src={logo} alt="k-lite" className="logo" />


        </a>
      </div>
      <div className="navbar-right">
        <a href={About}>About US</a>
        <a href="projects.html">Projects</a>
        <a href="products.html">Products</a>
        <a href="https://klite.in/Downloads.aspx" target="_blank" rel="noopener noreferrer">Downloads</a>
        <a href="contactus.html">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
