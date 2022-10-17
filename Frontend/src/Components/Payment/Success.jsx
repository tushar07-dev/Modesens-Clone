import React from 'react'
import './success.css'
import { useNavigate } from 'react-router-dom'

const Success = () => {
  const navigate=useNavigate()
  return (
    <div>
        <div className="container3">
        <img
          src="https://momentumacademy.net/wp-content/uploads/2020/05/Paymentsuccessful21.png"
          alt=""
        />
        </div>
        <div className='successful'>
            <button onClick={(()=>navigate("/"))} className="btnSucccess">GO BACK TO HOME</button>
            <p className='order'>And</p>
            <p className='order'>Your Order Has Been Placed...</p>
        </div>
    </div>

  )
}

export default Success