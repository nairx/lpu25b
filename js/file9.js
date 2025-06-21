//arrays
// const score = [2, 1, 7, 5, 3];
// console.log(score)
// console.log(score[0])
// score.push(9)
// console.log(score)
// console.log(score.length)
// const newScore = [...score,9]
// console.log(newScore)
// const cart = {
//   1: 5,
//   5: 3,
// };
// const newCart = ({...cart,2:1})
// console.log(newCart)

let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 2", price: 75 },
];
//const newProducts = [...products,{id:4,name:"Product 4",price:56}]
function addToCart(id) {
  cart = { ...cart, [id]: 1 };
}
addToCart(1)
console.log(cart)
addToCart(3)
console.log(cart)

