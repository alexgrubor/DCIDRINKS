import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo_withoutbg.png";
import { useState } from "react";
import { VscThreeBars, VscClose} from 'react-icons/vsc'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerMenuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/drinks">Drinks</NavLink>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>DCI DRINKS</h1>
      </div>
      <div className="contact">
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <button onClick={hamburgerMenuHandler}>
      {
        isOpen ? <VscClose/> : <VscThreeBars />
      }
      </button>
      {isOpen && (
        <div className="hamburger-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/drinks">Drinks</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
      
    </nav>
  );
};
export default Header;
