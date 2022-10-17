import { ADD_TO_CART, DELETE_DATA, GET_CART_DATA, GET_DATA_SUCCESS, LOGIN, SIGNUP } from "./action"

const init={
  products:[],
  cartData:[],
  cartTotal:0,
  login:false,
  // signup:false
}
const reducer = (state=init, action) => {
  switch (action.type){
    case GET_DATA_SUCCESS:
      return{
        ...state,
        products:action.payload
      }
    case ADD_TO_CART:
      let cartProducts=[...state.cartData,action.payload]
      let cartSum=action.payload.Price
      return{
        ...state,
        cartData:cartProducts,
        cartTotal:cartSum
      }
    case DELETE_DATA:
      return{
        ...state,
        cartData:action.payload
      }
    case LOGIN:
      return{
        ...state,
        login:action.payload
      }
    // case SIGNUP:
    //   return{
    //     ...state,
    //     signup:action.payload
    //   }
    default :
      return state
  }
}

export default reducer