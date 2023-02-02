import { CiGlass } from "react-icons/ci";
import { FaGlassMartini } from "react-icons/fa";

function CocktailCardDetailed(props) {
  const drink = props.drink;

  const ings = [
    drink?.strIngredient1,
    drink?.strIngredient2,
    drink?.strIngredient3,
    drink?.strIngredient4,
    drink?.strIngredient5,
    drink?.strIngredient6,
    drink?.strIngredient7,
    drink?.strIngredient8,
  ];
  const measure = [
    drink?.strMeasure1,
    drink?.strMeasure2,
    drink?.strMeasure3,
    drink?.strMeasure4,
    drink?.strMeasure5,
    drink?.strMeasure6,
    drink?.strMeasure7,
    drink?.strMeasure8,
  ];
  return (
    drink && (
      <div className="single-drink-container">
        <div className="intro">  
            <div className="name">
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
        </div>
        <div className="cup">
              <h3>Glass Type:</h3>
              <p>{drink.strGlass}</p>
            </div>
            </div>
       
        <div className="single-drink-content">
       
          <div className="single-drink-img">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
          <div className="single-drink-details">
            <ul>
              {" "}
              <p>Ingredients</p>
              {ings.map((ing, index) => {
                if (ing !== null) {
                  return <li key={index}>{ing}</li>;
                }
              })}
            </ul>
            <ul>
              <p>Measure</p>
              {measure.map((m, index) => {
                if (m !== null) {
                  return <li key={index}>{m}</li>;
                }
              })}
            </ul>
          </div>
        </div>

        <div className="instr">
          <h3>Instructions</h3>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    )
  );
}

export default CocktailCardDetailed;
