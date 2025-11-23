import React from 'react'
import './OrderPlacedSuccessfull.css'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const OrderPlacedSuccessfull = () => {
    const navigate = useNavigate();
  return (
    <div className='order-placed'>
        <img src={assets.order_placed_img} alt="" />
        <h2>Order Placed Successfully</h2>
        <p>Your Transaction ID: 6789349202</p>
        <button onClick={()=>navigate('/')}>Back to Home</button>
    </div>
  )
}

export default OrderPlacedSuccessfull
