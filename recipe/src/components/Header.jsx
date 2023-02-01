import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo_withoutbg.png";
const Header = () => {
  return (
    <div>
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
    </div>
  );
};
export default Header;
