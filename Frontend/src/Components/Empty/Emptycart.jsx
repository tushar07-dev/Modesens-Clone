import React from 'react'
import "./cart.css"

const Emptycart = () => {
  return (
    <div className='cart-container'>
       <h1 className='cart-heading'>
       MODESENS CONCIERGE
       </h1>
       <div className='cart-titleMode'>
        Let ModeSens determine which store fulfill your request to get the best price for the product you want
        <br />
        - enjoy a worry free experience with no additional cost to you.
       </div>
       <div>
          <h2 className='cart-bagIsEmpty'>
          YOUR SHOPPING BAG IS EMPTY
          <br />
          You haven't added any pieces to your bag - yet
          </h2>
          <div>
            <img className='cart-hankerImage' src="https://cdn.modesens.com/static/img/20190618_nothing.svg" alt="emptyCart" />
            <div></div>
          </div>
          <div className='cart-buttonForShop'>
            <button>SHOP WOMEN</button>
            <button>SHOP MEN</button>
            <button>SHOP KIDS</button>
          </div>
       </div>
    </div>
  )
}

export default Emptycart