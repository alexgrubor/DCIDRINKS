import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/drinks.css";
import Top5 from "../components/Top5";
const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [query, setQuery] = useState("");
  const [ingQuery, setIngQuery] = useState("");
  const urlSearchByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
  const urlSearchByIng = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingQuery}`;

  const onSearchNameHandler = (e) => {
    setQuery(e.target.value);
  };

  const searchByNameHandler = () => {
    setIsClicked(true);
    axios
      .get(urlSearchByName)
      .then((res) => {
        setDrinks(res.data.drinks);
      })
      .catch((err) => console.log(err));
  };
  const onSearchIngHandler = (e) => {
    setIngQuery(e.target.value);
  };
  const onSearchHandlerByIng = () => {
    setIsClicked(true);
    axios
      .get(urlSearchByIng)
      .then((res) => {
        setDrinks(res.data.drinks);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Drinks</h1>
      <div className="cocktail-finder">
        <h4>Cocktail Finder</h4>
        <p>WHAT KIND OF COCKTAIL ARE YOU LOOKING FOR?</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="search-by-name"
        >
          <div>
            {" "}
            <input
              type="text"
              placeholder="Search by name"
              onChange={onSearchNameHandler}
            />
            <button type="submit" onClick={searchByNameHandler}>
              Search
            </button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search by ingredient"
              onChange={onSearchIngHandler}
            />
            <button type="submit" onClick={onSearchHandlerByIng}>
              {" "}
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="results">
        {isClicked &&
          drinks !== null &&
          drinks !== undefined &&
          drinks.map((drink) => {
            return (
              <div className="drink" key={drink.idDrink}>
                <Link to={`/drinks/${drink.idDrink}`}>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <h3>{drink.strDrink}</h3>
                </Link>
              </div>
            );
          })}
      </div>
      <div className="top-10nonalc">
        <h3>Top 5 Non-Alcoholic Drinks</h3>
        <Top5 url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" />
      </div>
      <div className="top-10alc">
        <h3>Top 5 Alcoholic Drinks</h3>
        <Top5 url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" />
      </div>
    </div>
  );
};
export default Drinks;
