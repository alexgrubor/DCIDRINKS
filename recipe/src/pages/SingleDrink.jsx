import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/singledrink.css";
import CocktailCardDetailed from "../components/CocktailCardDetailed";


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
  }, []);




  return (<> 
          <CocktailCardDetailed drink={drink}/>
          </>
    )

};
export default SingleDrink;
