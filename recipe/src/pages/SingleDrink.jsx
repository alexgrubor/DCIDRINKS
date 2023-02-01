import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
const SingleDrink = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const [drink, setDrink] = useState(null)
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (
          res.data.drinks === null ||
          res.data.drinks === undefined ||
          res.data.drinks.length === 0
        ) {
          navigate("/error")
        }

        setDrink(res.data.drinks[0])
      })
      .catch((err) => console.log(err))
  }, [])
   

  
  return (
    drink && <div>
      <div className="single-drink-img">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div className="single-drink-details">
        <h3>{drink.strDrink}</h3>
        <ul> Ingredients
          <li>{drink.strIngredient1}</li>
          <li>{drink.strIngredient2}</li>
          <li>{drink.strIngredient3}</li>
          <li>{drink.strIngredient4}</li>
          <li>{drink.strIngredient5}</li>
          <li>{drink.strIngredient6}</li>
          <li>{drink.strIngredient7}</li>
          <li>{drink.strIngredient8}</li>
        </ul>
      </div>
    </div>
  )
}
export default SingleDrink