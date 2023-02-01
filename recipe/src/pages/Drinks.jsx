import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/drinks.css";
import Top10NonAlc from "../components/Top10NonAlc";
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
      <div>
        <h4>Cocktail Finder</h4>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="search-by-name"
        >
          <input
            type="text"
            placeholder="Search by name"
            onChange={onSearchNameHandler}
          />
          <button type="submit" onClick={searchByNameHandler}>
            Search
          </button>
        </form>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="search-by-ingredient"
        >
          <input
            type="text"
            placeholder="Search by ingredient"
            onChange={onSearchIngHandler}
          />
          <button type="submit" onClick={onSearchHandlerByIng}>
            {" "}
            Search
          </button>
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
        <h4>Top 10 Non-Alcoholic Drinks</h4>
        <Top10NonAlc />
      </div>
    </div>
  );
};
export default Drinks;
