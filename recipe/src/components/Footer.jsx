import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="social-links">
        <Link to="https://www.facebook.com/"><BsFacebook/></Link>
        <Link to="https://www.instagram.com/"><BsInstagram/></Link>
        <Link to="https://www.twitter.com/"><BsTwitter/></Link>
      </div>
      <p> Made {year}  &#169;copyright</p>
    
    </footer>
  )
}
export default Footer