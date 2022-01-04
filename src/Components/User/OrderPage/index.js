import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../../Context/UserProvider";
import { formatNumberMoney } from "../../../Function";
import useFireStore from "../../../Hooks/useFireStore";
import "./OrderPage.scss";
import $ from "jquery";

const OrderPage = () => {
  const { uid } = useContext(UserContext);
  const conditionOrder = useMemo(() => {
    return {
      fieldName: "uid",
      operator: "==",
      compareValue: uid,
    };
  }, [uid]);

  const myOrder = useFireStore("DonHang", conditionOrder);

  const handleClick = () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  };

  const diplayStatus = (number)=>{
    number = Number(number)

    if(number === 0) return "Đang xử lý"
    else if(number === 1) return "Đang giao hàng"
    else return "Đã giao hàng"
  }
  return (
    <div className="order__page">
      <div className="container">
        <h4>Đơn hàng của tôi</h4>

        <div className="list__order">
          {myOrder && myOrder.length !== 0
            ? myOrder.map((item) => {
                return item.myCart.map((value) => {
                  return (
                    <div className="order__item">
                      <div className="order__item-img">
                        <img src={value.value.Hinh} alt="clothes-shop" />
                      </div>
                      <div className="order__item-name" onClick={handleClick}>
                        <Link
                          to={`/detail-product/${value.value.TenSp}/${value.value.MaSp}`}
                        >
                          {value.value.TenSp}
                        </Link>
                      </div>
                      <div className="order__item-total">
                        {formatNumberMoney(value.value.Gia * value.quantity)}
                      </div>
                      <div className="order__item-quantity">
                        {value.quantity}
                      </div>
                      <div className="order__item-status">
                        {diplayStatus(value.isCheck)}
                      </div>
                    </div>
                  );
                });
              })
            : <div className = "notice">Không có sản phẩm nào trong đơn hàng</div>}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
