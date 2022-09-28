import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Meal/Meal.css";
const Meal = ({ meal, orderNow }) => {
  return (
    <div className="meal">
      <img src={meal.strMealThumb} alt="" />
      <h1>{meal.strMeal}</h1>
      <p>{meal.strInstructions.slice(0, 250)}</p>
      <button onClick={() => orderNow(meal.strMeal)}> 
        Order Now <FontAwesomeIcon icon={faCartPlus}>    </FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Meal;
