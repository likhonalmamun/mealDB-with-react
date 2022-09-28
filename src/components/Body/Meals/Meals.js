import React, { useEffect, useState } from "react";
import "../Meals/Meals.css";
import Meal from "./Meal/Meal";
const Meals = ({ orderNow }) => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("mealApi.json")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div>
      <h1 style={{ margin: "35px auto 0" }}>Find your today's meal here</h1>
      <div className="meals">
        {meals.map((meal) => (
          <Meal meal={meal} key={meal.idMeal} orderNow={orderNow}></Meal>
        ))}
      </div>{" "}
    </div>
  );
};

export default Meals;
