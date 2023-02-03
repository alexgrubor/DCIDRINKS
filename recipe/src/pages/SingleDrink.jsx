import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/singledrink.css";
import CocktailCardDetailed from "../components/CocktailCardDetailed";
import Top5 from "../components/Top5";

const SingleDrink = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [drink, setDrink] = useState(null);
  useEffect(() => {
    axios
      .get(url)
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
  }, [drink]);

  return (
    <>
      <CocktailCardDetailed drink={drink} />
      
     <div className="similarsuggestions">
      <h2>Similar suggestions</h2>
       {drink && drink.strAlcoholic === "Alcoholic" ? (
        <Top5
          url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
          until={8}
          start={6}
        />
      ) : (
        <Top5
          url="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
          until={8}
          start={6}
        />
      )}
      </div>
    </>
    
  );
};
export default SingleDrink;
