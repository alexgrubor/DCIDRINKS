import { CiGlass } from 'react-icons/ci';
import { FaGlassMartini } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CocktailCardPreview(props) {
    const drink = props.drink;

    return (
        drink && (
            <div className="single-drink-container">
                <div className="name">
                    <h3>{drink.strDrink}</h3>
                    {drink.strAlcoholic === 'Alcoholic' ? (
                        <p className="alcoholic">
                            {' '}
                            <FaGlassMartini /> Alcoholic
                        </p>
                    ) : (
                        <p className="non-alcoholic">
                            {' '}
                            <CiGlass /> Non-Alcoholic
                        </p>
                    )}
                </div>

                <div className="single-drink-content">
                    <div className="single-drink-img">
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    </div>
                    <div className="single-drink-details">
                    <Link to={`/drinks/${drink.idDrink}`}>Read more!</Link>
                    </div>
                </div>
            </div>
        )
    );
}

export default CocktailCardPreview;
