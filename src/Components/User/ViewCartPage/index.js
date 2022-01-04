import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../../Context/UserProvider";
import { formatNumberMoney } from "../../../Function";
import ViewCartItem from "./ViewCartItem";

const ViewCartPage = () => {
  const { myCart, count, subTotal } = useContext(UserContext);
  return (
    <div>
      <div className="info__page">
        <div className="container">
          <div className="page__title">Danh sách hoá đơn</div>
        </div>
      </div>
      <div className="view__cart-header">
        <div className="container">
          <Link to="/" className="back-home">
            <i className="fa fa-angle-left" aria-hidden="true" /> Continue
            Shoppping
          </Link>
          <h3>Cart</h3>
          <span>{count <= 1 ? `${count} item` : `${count} items`}</span>
        </div>
      </div>
      <div className="view__cart-main">
        <div className="container">
          <div className="list-cart">
            {myCart && myCart.length ? (
              myCart.map((value) => {
                return <ViewCartItem value={value} key={value.id} />;
              })
            ) : (
              <div className="notice">Không có sản phẩm nào trong giỏ hàng</div>
            )}
          </div>
        </div>
      </div>
      <div className="view__cart-bottom">
        <div className="container">
          <div className="your__note">
            <div className="form-group">
              <label htmlFor="textarea" className="control-label">
                Note with your order
              </label>
              <div className="col-sm-12">
                <textarea
                  name
                  id="textarea"
                  className="form-control"
                  rows={4}
                  placeholder="Note with your order"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="into__money">
            <h5>
              Subtotal <span>{formatNumberMoney(subTotal)}</span>
            </h5>

            {myCart && myCart.length !== 0 ? (
              <div className="btn btn-dark">
                <Link to="/check-out">Check out</Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCartPage;
