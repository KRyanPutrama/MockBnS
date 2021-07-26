const initialState = {
    cartValue: 0,
};
  
const Cart = (state = initialState, action) => {
  switch (action.type) {
      case "ADD_CART":
          return {...state, cartValue: state.cartValue + 1};
      default:
        return state;
  }
}

export default Cart;