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
        console.log(res);
        setDrinks(res.data.drinks);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Drinks</h1>
      <blockquote>
        “No amount of physical contact could match the healing powers of a well
        made cocktail.” <i>David Sedaris</i>
      </blockquote>
      <p>
        Welcome to the DCI Drinks page! Here you can find a huge amount of world the best cocktails. Just type a name or ingredient you want, and our Cocktail finder will get you the best cocktail experience.  
      </p>
      <p>
       P.S If you are not sure what to drink, you can check out our Top 5 Alcoholic or Top 5 Non-Alcoholic suggestions</p>
      <p>
        Enjoy your drink!
      </p>
      <div className="cocktail-finder">
        <h4>Cocktail Finder</h4>
        <p>WHAT KIND OF COCKTAIL ARE YOU LOOKING FOR?</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="search-by-name"
        >
          {" "}
          <input
            type="text"
            placeholder="Search by name"
            onChange={onSearchNameHandler}
          />
          <button type="submit" onClick={searchByNameHandler}>
            Search
          </button>
        </form>
        <form onSubmit={(e) => e.preventDefault()} className="search-by-ing">
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
      <div className="top-5nonalc">
        <h3>Top 5 Non-Alcoholic Drinks</h3>
        <Top5 url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" />
      </div>
      <div className="top-5alc">
        <h3>Top 5 Alcoholic Drinks</h3>
        <Top5 url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" />
      </div>
    </div>
  );
};
export default Drinks;
