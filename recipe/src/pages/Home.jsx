import { Link } from "react-router-dom";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CocktailCardPreview from "../components/CocktailCardPreview";


const Home = () => {
  const navigate = useNavigate();
  const [drink, setDrink] = useState(null);
  const api = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
  const urlBg = 'https://source.unsplash.com/1600x900/?cocktail&random';
  const defBg = 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1257&q=80'
  const [bg, setBg] = useState(defBg)
  useEffect(
    () => {
      axios.get(urlBg)
        .then((res) => {
          setBg(res.config.url)
        })
        .catch((err) => console.log(err))
    }
  , []
  )
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        if (
          res.data.drinks === null ||
          res.data.drinks === undefined ||
          res.data.drinks.length === 0
        ) {
          navigate("/error");
        }

        setDrink(res.data.drinks[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  
  

  return (
    <div>
      <div className="hero-section" style={
        {backgroundImage: `url(${bg})`}
      }>
          <h1>Welcome to DCI DRINKS</h1>
          <p>The best website for cocktails</p>
          <h3>There’s no problem a cocktail can’t solve</h3>
          <Link to="/drinks">
            <button>Let's start</button>
          </Link>

      </div>
      <div className="random-section">
        <div className="random-text">
          <h2>Our today's suggestion</h2>
        </div>
        <CocktailCardPreview drink={drink} />
      </div>
    </div>
  );
};
export default Home;
