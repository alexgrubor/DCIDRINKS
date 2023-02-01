import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/drinks.css";
const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [query, setQuery] = useState("");
  const [ingQuery, setIngQuery] = useState("");
  const [ing, setIng] = useState([])
  const urlSearchByName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;
  const urlSearchByIng = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingQuery}`;

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
        console.log(res.data);
        setIng(res.data.ingredients);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
    </div>
  );
};
export default Drinks;
