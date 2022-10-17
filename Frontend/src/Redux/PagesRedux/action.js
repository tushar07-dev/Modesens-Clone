import axios from "axios"

export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const ADD_TO_CART="ADD_TO_CART"
export const DELETE_DATA="DELETE_DATA"
export const GET_CART_DATA="GET_CART_DATA"
export const LOGIN="LOGIN"
export const SIGNUP="SIGNUP"

export const getDataSuccess=(data)=>(
    {
        type:GET_DATA_SUCCESS,
        payload:data
    }
)

export const getData=(payload,page_no)=>(dispatch)=>{
    axios({
        url:"https://modesens-clone-web16.herokuapp.commodesens/beauty",
        method:"GET",
        params:{...payload}
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })
}
// ..................................................................//
export const addtoCartsuccess=(data)=>(
    {
        type:ADD_TO_CART,
        payload:{...data,Price:data.Price}
    }
)

export const addToCart=(payload)=>(dispatch)=>{
    axios({
        url:"https://modesens-clone-web16.herokuapp.commodesens/cart",
        method:"POST",
        data:{
            ...payload
        }
    }).then((res)=>{
        console.log(payload);
        dispatch(addtoCartsuccess(res.data))
    }).catch((err)=>{
        console.log(err)
    })
}

// get cart data..........



// delete products in cart........................///
export const deleteData=(payload)=>(
    {
        type:DELETE_DATA,
        payload
    }
)

export const deleteCartData=(id)=>(dispatch)=>{
    axios({
        url:`https://modesens-clone-web16.herokuapp.commodesens/cart/${id}`,
        method:"DELETE"
    }).then((res)=>{
        dispatch(deleteData(res.data))
    }).catch((err)=>{
        console.log("unable to delete product from ur cart-", err);
    })
}


// login  
const LoginAction=(payload)=>({
    type:LOGIN,
    payload,
})

export const LoginActionSuccess=(val)=>(dispatch)=>{
    dispatch(LoginAction(val))
}


// signup
// const SignAction=(payload)=>({
//     type:SIGNUP,
//     payload,
// })

// export const SignActionSuccess=(val)=>(dispatch)=>{
//     dispatch(SignAction(val))
// }


   
    
