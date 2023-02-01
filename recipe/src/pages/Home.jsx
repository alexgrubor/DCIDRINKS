import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to DCI DRINKS</h1>
          <p>The best website for cocktails</p>
          <h3>
          There’s no problem a cocktail can’t solve
          </h3>
          <Link to='/drinks'><button>Let's start</button></Link>
        </div>
        <div className="hero-img">

        </div>
      </div>
      <div className="random-section">
        <div className="random-text">
          <h2>Our today's suggestion</h2>
        </div>
        <div className="random-img">
          {/*img*/}
        </div>
        <div className="random-cocktail-details">
          <h3>name</h3>
          <ul>ingredients</ul>
        </div>
      </div>
    </div>
  )
}
export default Home