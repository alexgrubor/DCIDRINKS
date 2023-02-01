import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Top10NonAlc = () => {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDrinks(res.data.drinks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Top 10 Non-Alcoholic Drinks</h1>
      <div className="drinks">
        {drinks.slice(0, 10).map((drink) => {
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

export default Top10NonAlc;
