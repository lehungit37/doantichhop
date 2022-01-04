import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './SmallCart.scss'
import { UserContext } from "../../../Context/UserProvider";
import SmallCartItem from "./SmallCartItem";
import { formatNumberMoney } from "../../../Function";

export default function SmallViewCart() {
  const { isOpenSmallCart, setIsOpenSmallCart } = useContext(UserContext);
  const { myCart, subTotal, count } = useContext(UserContext);
  const handleCloseSmallCart = () => {
    setIsOpenSmallCart(false);
  };

  return (
    <>
      <div
        onClick={handleCloseSmallCart}
        className={
          isOpenSmallCart ? "opacity__body active__opacity" : "opacity__body"
        }
      />
      <div
        className={
          isOpenSmallCart ? "list__cart active__listcart" : "list__cart "
        }
      >
        <div className="header__cart">
          <div
            className="btn__close"
            title="Close Cart"
            onClick={handleCloseSmallCart}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <h3>Cart</h3>
          <span>{count <=1 ? `${count} item` : `${count} items`}</span>
        </div>
        <div className="list__product">
          {myCart && myCart.length ? (
            myCart.map((value) => {
              return <SmallCartItem value={value} key={value.id} />;
            })
          ) : (
            <div className="notice">Không có sản phẩm nào trong giỏ hàng</div>
          )}
        </div>
        <div className="detail">
          <div className="subtotal">
            <p>Subtotal</p>
            <p className="sub__price">{formatNumberMoney(subTotal)}</p>
          </div>
        </div>
        <div className="control__product">
          <Link
            to="/view-cart"
            className="btn btn-dark"
            onClick={handleCloseSmallCart}
          >
            View Cart
          </Link>
         {
           myCart && myCart.length !== 0 ?
           <Link to = {"/check-out"} onClick = {handleCloseSmallCart} className="btn btn-dark">
           Check Out
         </Link>
         :null
         }
        </div>
      </div>
    </>
  );
}
