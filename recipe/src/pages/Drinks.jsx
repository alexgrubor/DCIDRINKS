import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaGlassCheers } from "react-icons/fa";
import "../styles/drinks.css";
import { HashLink } from "react-router-hash-link";
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
      setQuery('')
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
      setIngQuery('')
  };

  return (
    <div className="drinks-page">
      <blockquote>
        “No amount of physical contact could match the healing powers of a well
        made cocktail.”
      </blockquote>
      <p>
        Welcome to the <span>DCI Drinks </span> page! Here you can find a huge
        amount of world the best cocktails. Just type a name or ingredient you
        want, and our Cocktail finder will get you the best cocktail experience.
      </p>
      <p>
        P.S If you are not sure what to drink, you can check out our{" "}
        <HashLink to="/drinks#top5">Top 5 Alcoholic</HashLink> or{" "}
        <HashLink to="/drinks#top5-non">Top 5 Non-Alcoholic</HashLink>{" "}
        suggestions!
      </p>
      <p className="cheers">
        Enjoy your drink! <FaGlassCheers />
      </p>
      <div className="cocktail-finder">
        <h1>Cocktail Finder</h1>
        <p>WHAT KIND OF COCKTAIL ARE YOU LOOKING FOR?</p>
        <div className="forms">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQuery('')

            }}
            className="search-by-name"
          >
            {" "}
            <input
              type="text"
              placeholder="Search by name"
              onChange={onSearchNameHandler}
              value={query}
            />
            <button type="submit" onClick={searchByNameHandler}>
              Search
            </button>
          </form>
          <form onSubmit={(e) => { e.preventDefault()
            setIngQuery('')}
          } className="search-by-ing">
            <input
              type="text"
              placeholder="Search by ingredient"
              onChange={onSearchIngHandler}
              value={ingQuery}
            />
            <button type="submit" onClick={onSearchHandlerByIng}>
              {" "}
              Search
            </button>
          </form>
        </div>
      </div>
     {isClicked &&
          drinks !== null &&
          drinks !== undefined &&<h3> Search Results</h3> }
      <div className="results">
        {isClicked &&
          drinks !== null &&
          drinks !== undefined &&
          drinks.map((drink) => {
            return (
              <div className="drink" key={drink.idDrink}>
                <Link to={`/drinks/${drink.idDrink}`}>
                  <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <h3>Name: {drink.strDrink}</h3>
                </Link>
              </div>
            );
          })}
      </div>
      <div className="top-5nonalc" id="top5-non">
        <h3>Top 5 Non-Alcoholic Drinks</h3>
        <Top5 url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" />
      </div>
      <div className="top-5alc" id="top5">
        <h3>Top 5 Alcoholic Drinks</h3>
        <Top5 url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic" />
      </div>
    </div>
  );
};
export default Drinks;

