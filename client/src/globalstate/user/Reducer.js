const Reducer = (currState, action) => {
  switch (action?.type) {
    case "SETDATA":
      return {
        ...currState,
        id: action?.id,
        username: action?.username,
        email: action?.email,
        access: action?.access,
      };
    
    case "SETPRODUCTS": 
      return {
        ...currState,
        products:action?.products
      }
    case "ADDTOCART":
      let updatedCart = [...currState.cart]
      let total = currState.total
      total=total+action?.product.price

      updatedCart.push(action?.product)
      return {
        ...currState,
        cart:[...updatedCart],
        total:total
      };

    case "SETQTY":
      const price = action?.price
      let utotal = currState.total
      utotal+=price
      return {
        ...currState,
        total:utotal
      };
    
    case "REMOVE_PRODUCT":
      let cart = [...currState.cart]

      let updatedCar=cart.filter((prod)=>prod.id!=action?.id)
      let cost = currState.total
      cost -=  action?.price
      return{
        ...currState,
        cart:updatedCar,
        total:cost
      }
    
    case "EMPTY_CART":
      return{
        ...currState,
        cart:[],
        total:0
      }
    default:
      return currState;
  }
};
export default Reducer;