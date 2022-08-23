import React from "react";
import './order.css'
import Chef from './order1.png'
import Cap from './order2.png'

const Order = () => (
   <div className="order-wrapper">
     <div className="order-1">
        <img src={Chef} className='cap'alt="chef's cap" />
        <div className="order-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil quas est officiis nostrum, maxime illo numquam blanditiis doloribus id.</div>

        
    </div>

    <div className="order-2">
        
        <div className="order-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nihil quas est officiis nostrum, maxime illo numquam blanditiis doloribus id.</div>
        <img src={Cap} className='cap'alt="chef's cap" />
    </div>


    
   </div>
)


export default Order