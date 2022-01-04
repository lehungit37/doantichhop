import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { formatNumberMoney, stringToSlug } from "../../../Function";
import $ from "jquery";
import { UserContext } from "../../../Context/UserProvider";
import useRandomKey from "../../../Hooks/useRandomKey";
export default function ProductsItem(props) {
  const { value } = props;
  const [hover, setHover] = useState(false);
  const { addToCart } = useContext(UserContext);

  const handleonMouseOver = () => {
    setHover(true);
  };
  const handleonMouseOut = () => {
    setHover(false);
  };

  const handleClick = () => {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  };

 const doc = useRandomKey()
  const handleAddToCart = () => {
    const data = {
      value,
      quantity: 1,
      size: "S"
    }
    addToCart(data, doc);
  };

  return value ? (
    <div
      className="product__item"
      onMouseOver={handleonMouseOver}
      onMouseOut={handleonMouseOut}
    >
      <div className="product__img">
        <Link to={`/detail-product/${stringToSlug(value.TenSp)}/${value.MaSp}`}>
          <img src={value.Hinh} alt="clothes-shop" />
        </Link>
     
        <div
          className={
            hover ? "product__handle active__hover" : "product__handle"
          }
        >
          <div className="btn__handle btn__addCart" onClick={handleAddToCart}>
            <i className="fa fa-cart-plus" aria-hidden="true" />
          </div>
          <Link
            onClick={handleClick}
            to={`/detail-product/${stringToSlug(value.TenSp)}/${value.MaSp}`}
            className="btn__handle btn__view"
          >
            <i className="fas fa-eye" />
          </Link>
        </div>
      </div>
      <div className="infor">
        <div className="product__name">
          <Link
            to={`/detail-product/${stringToSlug(value.TenSp)}/${value.MaSp}`}
          >
            {value.TenSp}
          </Link>
        </div>
        <div className="product__price">{formatNumberMoney(value.Gia)}</div>
      </div>
    </div>
  ) : null;
}
