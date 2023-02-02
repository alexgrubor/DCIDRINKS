import { CiGlass } from "react-icons/ci";
import { FaGlassMartini } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/randomdrink.css'

function CocktailCardPreview(props) {
  const drink = props.drink;


  return (
    drink && (
      <div className="random-drink">
        <div className="random-drink-img">
          <Link to={`/drinks/${drink.idDrink}`}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </Link>
        </div>
        <div className="random-details">
          <h3>{drink.strDrink}</h3>
          {drink.strAlcoholic === "Alcoholic" ? (
            <p className="alcoholic">
              {" "}
              <FaGlassMartini /> Alcoholic
            </p>
          ) : (
            <p className="non-alcoholic">
              {" "}
              <CiGlass /> Non-Alcoholic
            </p>
          )}
          <p className="details">
            Nice {drink.strAlcoholic} drink, made in {drink.strGlass}
          </p>
          <div className="random-drink">
            <Link to={`/drinks/${drink.idDrink}`}>Read more!</Link>
          </div>
        </div>
      </div>
    )
  );

   

}

export default CocktailCardPreview;
