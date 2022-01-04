import React from "react";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../../Context/UserProvider";
import { formatNumberMoney } from "../../../Function";

const SmallCartItem = (props) => {
  const {value} = props
  const {deletItemCart, updateQuantityCartItem} = useContext(UserContext)

  const handleGetIdItem = (id)=>{
    deletItemCart(id)
  }
  
  const handleUpdateQuantity = (id, quantityUpdate, quantity)=>{
    updateQuantityCartItem(id,quantityUpdate, quantity)
  }
  return (
    <div className="item__product">
      <div className="img__product">
        <img src={value.value.Hinh} alt = "clothes-shop" />
        <p>{formatNumberMoney(value.value.Gia)}</p>
      </div>
      <div className="info__product">
        <p className="name__product">{value.value.TenSp}</p>
        <p className="size">
          Size: <span>{value.size}</span>
        </p>
        <div className="change">
          <div className="minus" onClick = {(id, quantityUpdate, quantity)=>handleUpdateQuantity(value.id,-1, value.quantity-1)}>-</div>
          <input type="text" value = {value.quantity} disabled="true" />
          <div className="plus" onClick = {(id, quantityUpdate, quantity)=>handleUpdateQuantity(value.id, 1, value.quantity+1)}>+</div>
          <div className="total">{formatNumberMoney(value.quantity * value.value.Gia)}</div>
        </div>
      </div>
      <div className="btn__delete" onClick = {(id)=> handleGetIdItem(value.id)}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
};

export default SmallCartItem;
