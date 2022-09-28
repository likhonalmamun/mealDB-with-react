import React, { useEffect, useState } from "react";
import { getStored, addToDb } from "../../utility";
import "../Body/Body.css";
import Meals from "./Meals/Meals";
import OrderList from "./OrderList/OrderList";
const Body = () => {
  let [orderedMeals, setOrderedMeals] = useState([]);

  useEffect(() => {
    let storedArray = [];
    let storedData = getStored();
    for (let prop in storedData) {
      // console.log(name)
      if (prop) {
        let oldOrder = {};
        oldOrder.name = prop;
        oldOrder.quantity = storedData[prop];
        storedArray.push(oldOrder);
        // console.log(storedArray);
      }
    }
    setOrderedMeals(storedArray);
  }, []);

  function orderNow(mealName) {
    let added = {
      name: mealName,
    };
    let exist = orderedMeals.find((meal) => meal.name === mealName);

    if (!exist) {
      added.quantity = 1;
      setOrderedMeals([...orderedMeals, added]);
      addToDb(added.name);
    } else {
      let rest = orderedMeals.filter((meal) => meal.name !== mealName);
      exist.quantity = exist.quantity + 1;
      setOrderedMeals([...rest, exist]);
      addToDb(exist.name);
    }
  }
  let clearAll = () => {
    setOrderedMeals([]);
    localStorage.removeItem('orders')
  };
  return (
    <section className="body">
      <Meals orderNow={orderNow}></Meals>
      <OrderList orderedMeals={orderedMeals} clearAll={clearAll}>
      </OrderList>
    </section>
  );
};

export default Body;
