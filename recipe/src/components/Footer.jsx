import { Link } from "react-router-dom"
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="social-links">
        <Link to="https://www.facebook.com/">facebook</Link>
        <Link to="https://www.instagram.com/">instagram</Link>
        <Link to="https://www.twitter.com/">twitter</Link>
      </div>
      <p> Made {year}  &#169;copyright</p>
    
    </div>
  )
}
export default Footer