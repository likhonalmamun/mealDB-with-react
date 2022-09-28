function getStored() {
  let stored = {};
  let exist = localStorage.getItem("orders");
  if (exist) {
    stored = JSON.parse(exist);
  }
  return stored;
}
const addToDb = (id) => {
  const shoppingCart = getStored();
  // console.log(shoppingCart);
  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
    // console.log("i am in if statement");
  } else {
    shoppingCart[id] = 1;
    // console.log("i am in else statement");
  }
  localStorage.setItem("orders", JSON.stringify(shoppingCart));
};
export { getStored, addToDb };
