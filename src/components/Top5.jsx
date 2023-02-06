import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Top5 = ({ url, start, until }) => {
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
      <div className="top5">
        {drinks.slice(start, until).map((drink) => {
          return (
            <div className="top-drink" key={drink.idDrink}>
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

export default Top5;
