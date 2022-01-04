import React, { useContext } from "react";
import { UserContext } from "../../../Context/UserProvider";
import { formatNumberMoney } from "../../../Function";

const ViewCartItem = (props) => {
  const {value} = props
  const {deletItemCart,updateQuantityCartItem} = useContext(UserContext)

  const handleGetIdItem = (id)=>{
    deletItemCart(id)
  }
  const handleUpdateQuantity = (id, quantityUpdate, quantity)=>{
    updateQuantityCartItem(id,quantityUpdate, quantity)
  }

  return (
    <div className="item-cart">
      <div className="product__cart-img">
        <img src={value.value.Hinh} alt = "clothes-shop" />
      </div>
      <div className="product__cart-info">
        <h3>{value.value.TenSp}</h3>
        <h5>
          Size: <span>{value.size}</span>
        </h5>
      </div>
      <div className="product__cart-price">
       {formatNumberMoney(value.value.Gia)}
      </div>
      <div className="product__cart-quantity">
        <div className="minus" onClick = {(id, quantityUpdate, quantity)=>handleUpdateQuantity(value.id, -1, value.quantity-1)}>
          <i className="fa fa-minus" aria-hidden="true" />
        </div>
        <input
          type="text"
          name
          id="quantity"
          value = {value.quantity}
          disabled="true"
        />
        <div className="plus" onClick = {(id, quantityUpdate, quantity)=>handleUpdateQuantity(value.id, 1, value.quantity+1)}>
          <i className="fa fa-plus" aria-hidden="true" />
        </div>
      </div>
      <div className="product__cart-total">
        {formatNumberMoney(value.quantity * value.value.Gia)}
      </div>
      <div
        className="btn__delete-cart"
        onClick = {(id)=>handleGetIdItem(value.id)}
      >
        <i className="fa fa-times" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ViewCartItem;
