import React from "react";
import "../OrderedItem/OrderedItem.css";
const OrderedItem = ({ meal }) => {
  return (
    <div className="ordered-item">
      <h3>{meal.name}</h3> <h3 style={{ color: "red" }}>{meal.quantity}</h3>
    </div>
  );
};

export default OrderedItem;
