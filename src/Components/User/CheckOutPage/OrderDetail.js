import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'
const OrderDetail = (props) => {
    const {orderId} = props
    const handleClick = ()=>{
        $('html,body').animate({
            scrollTop: 0
        }, 1500)
    }
    return (
       <div className = "check__order">
             <h4>
            Thank you  for your order
            </h4>
            <span>
            {`Your order number is #${orderId}. We have emailed your order confirmation, and will send you an update when your order has shipped.`}
            </span>

            <div className="link__home" onClick = {handleClick}>
            <ion-icon name="chevron-back-outline"></ion-icon>
                <Link to = "/"> Continue Shopping</Link>
            </div>
       </div>
    )
}


export default OrderDetail;