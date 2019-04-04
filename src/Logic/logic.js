export function toggle(value) {
  return !value;
}
export function addToCart(cart, itemToAdd) {
  const newCart = [...cart]
  const newItemToAdd = {...itemToAdd}
  const matchingIndex = newCart.findIndex(item => item.id === newItemToAdd.id);
  if (matchingIndex === -1) {
    newItemToAdd.qty = 1;
    newCart.push(newItemToAdd)
  } else {
    newCart[matchingIndex].qty++
  }
  return newCart
}
export function calculateSubTotal() {
  // Build me!
}
export function calculateTotal() {
  // Build me!
}
export function removeItem() {
  // Build me!
}
