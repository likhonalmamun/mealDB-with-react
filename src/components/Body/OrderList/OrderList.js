import React, { useEffect, useState } from "react";

import "../OrderList/OrderList.css";
import OrderedItem from "./OrderedItem/OrderedItem";
const OrderList = ({ orderedMeals, clearAll }) => {
  // console.log(orderedMeals)
  return (
    <div className="Orders">
      <h1>Your Orders</h1>
      {orderedMeals.map((meal) => (
        <OrderedItem key={Math.random() * 10000} meal={meal}></OrderedItem>
      ))}
      <button
        style={
          !orderedMeals[0] ? { display: "none" } : { display: "inline-block" }
        }
        onClick={clearAll}
      >
        CANCEL ALL
      </button>
    </div>
  );
};

export default OrderList;
