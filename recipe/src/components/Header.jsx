import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/drinks">Drinks</Link>
      </div>
      <div className="logo">
        <img src="https://png.pngtree.com/element_our/sm/20180518/sm_5afe330442a3a.jpg" alt="logo" />
        <h1>DCI DRINKS</h1>
      </div>
    </div>
  )
}
export default Header