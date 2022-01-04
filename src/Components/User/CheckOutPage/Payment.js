import React, { useState } from "react";

const Payment = (props) => {
  const { typePay, setTypePay } = props;

  const handleChangeTypePay = (type)=>{
    setTypePay(type)
  }

  return (
    <div className="payment">
      <h4>Payment method</h4>
      <div className="type__payment">
        <div className="item">
          <div className="icon" onClick = {(type)=>handleChangeTypePay(0)}>
            {typePay === 0 ? (
              <i class="fas fa-chevron-circle-down checked"></i>
            ) : (
              <i class="far fa-circle "></i>
            )}
          </div>
          <div className="cart-main">
            <img
              src="https://laz-img-cdn.alicdn.com/tfs/TB1ZP8kM1T2gK0jSZFvXXXnFXXa-96-96.png"
              alt="cart icon"
              className="cart-icon"
            />
            <div className="cart-title">Thanh toán khi nhận hàng</div>
          </div>
          <div className="cart-footer">
            <span>Thanh toán khi nhận hàng</span>
          </div>
        </div>
        <div className="item">
          <div className="icon" onClick = {(type)=>handleChangeTypePay(1)}>
            {typePay === 1 ? (
              <i class="fas fa-chevron-circle-down checked"></i>
            ) : (
              <i class="far fa-circle "></i>    
            )}
          </div>
          <div className="cart-main">
            <img
              src="https://laz-img-cdn.alicdn.com/tfs/TB1Iey_osKfxu4jSZPfXXb3dXXa-96-96.png"
              alt="cart icon"
              className="cart-icon"
            />
            <div className="cart-title">Thẻ tín dụng / Thẻ ghi nợ</div>
          </div>
          <div className="cart-footer">
            <span>Thanh toán trực tuyến</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
