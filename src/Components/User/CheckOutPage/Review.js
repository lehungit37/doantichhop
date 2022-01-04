import React, { useContext } from "react";
import { formatNumberMoney } from "../../../Function";

const Review = (props) => {
  const { myCart, address } = props;
  return (
    <div className="review">
      <h4>Order Summary</h4>
      <div className="list__order">
        {myCart ? (
          myCart.map((item) => {
            return (
              <div className="item__order">
                <div className="info__product">
                  <div className="img__product">
                    <img src={item.value.Hinh} alt="clothes-shop" />
                  </div>
                  <div className="name__product">{item.TenSp}</div>
                </div>
                <div className="total__item">
                <div className="quantity">{item.quantity}</div>
                  {formatNumberMoney(item.quantity * item.value.Gia)}
                </div>
              </div>
            );
          })
        ) : (
          <div className="notice">Loading ...</div>
        )}
      </div>

      <div className="info__shipping">
        <div className="address">
          <h4>Shipping</h4>
          <div className="name__user">
            {address.name}
          </div>
          <div className="address__user">
            {
              `${address.addressHouse}, ${address.nameWard}, ${address.nameDistric}, ${address.nameCity}`
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
