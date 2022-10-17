import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { deleteCartData } from '../../Redux/PagesRedux/action'
import { useDispatch } from 'react-redux'
import "./nonCart.css"
import Emptycart from '../Empty/Emptycart'
import { useNavigate } from 'react-router-dom'
// import { systemProps } from '@chakra-ui/react'



const ProductCart = () => {
  const dispatch=useDispatch()
  const [Data,setData]=useState([])
  const navigate=useNavigate()
  const getCartData=()=>{
    axios({
        url:`https://modesens-clone-web16.herokuapp.commodesens/cart`,
        method:"GET"
    }).then((res)=>{
      setData(res.data)
      console.log("ji")
    }).catch((err)=>{
        console.log("unable to get product from ur cart-", err);
    })
  }
  useEffect(()=>{
    getCartData()
  },[])

  const removeProduct=(id)=>{
    dispatch(deleteCartData(id))
    setTimeout(()=>{
      getCartData()
    },500)
    console.log(id);
  }
  const orderTotal = Data.reduce((acc,el)=>{
    return acc+el.price
  },0)
  localStorage.setItem("total-amount",orderTotal)
  if(Data.length===0){
    return (<Emptycart/>)
  }
  return (
    <div className='nonEmpty-Container'>
     <div className='nonEmpty-Container-left'>
        <div>
          <h1 className='bagHeadingLabel'>
            SHOPPING BAG
          </h1>
        </div>
        <div className='cart-item-table'>
          <div className='cart-table-header'>
            <div className='cart-table-header-items'>
              <span>ITEMS</span>
            </div>
            <div className='cart-table-header-price'>
              <span>PRICE</span>
            </div>
          </div>
          {/* Item start */}
          <ul className='cart-list-item-container'>
           {Data.map((el)=>(
              <CartProdMapData Id={el._id} image={el.url} name={el.name} price={el.price} handleDelete={removeProduct}/>
           ))}
          </ul>
          <div className='cart-item-total-container'>
            <div>
              <div className='cart-item-total'>
                <div className='cart-item-total-title'>
                  <span>Total</span>
                </div>
                <div className='cart-item-total-price'>
                  <span>$ {orderTotal} USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
     <div className='nonEmpty-Container-right'>
         <div>
            <div className='right-portion-design'>
              <h1>CHECKOUT</h1>
            </div>
            <div className='right-portion-design'>
              <p>Enter your email to login or continue to checkout as a guest.</p>
            </div>
            <div className='right-portion-design'>
              <label htmlFor="email">Email address</label><br />
              <input type="email" className='email-confirmation' />
            </div>
            <div className='right-portion-design'>
              <button className='checkout-button' onClick={()=>navigate("/cart/payment")}>Proceed to Checkout</button>
            </div>
         </div>
     </div>
    </div>
  )
}




const CartProdMapData=({Id,image,name,price,handleDelete})=>{
  console.log(image);
  return(
    
      <li className='cart-itemslist'>
        <div className='cart-itemslist-container'> 
          <div className='cart-itemslist-container-left'>
            <div className='cart-left-image'>
              <img src={image} alt="brand_image" />
            </div>
            <div className='cart-left-description'>
              <div>
                <div>{name}</div>
                <div>soapless Gentle Foaming Cleaning, 85G</div>
              </div>
            </div>
          </div>
          <div className='cart-itemlist-container-right'>
            <div className='cart-item-price-and-remove'>
              <div className='cart-item-price'>
                <div className='discount-price'>$ {price} USD</div>
                {/* <div className='actual-price'>$ {el.actualPrice} USD</div> */}
              </div>
              <div className='cart-item-remove'>
               <a href rel='nofollow'>
               <span className='cart-remove-button' onClick={()=>handleDelete(Id)}>Remove</span>
               </a>
              </div>
            </div>
          </div>
        </div>
      </li>
    
  )
}

export default ProductCart
