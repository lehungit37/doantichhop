import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../../../Context/AuthProvider";
import { UserContext } from "../../../Context/UserProvider";
import "./Menu.scss";

export default function Menu(props) {
  const { setStringSearch, setIsOpenSmallCart, count } = useContext(UserContext);
  const { signOut } = useAuth();
  const history = useHistory()
  const { LoaiHang, currentUser } = props;

  const [textSearchProduct, setTextSearchProduct] = useState("");
  const [isOpenControl, setIsOpenControl] = useState(false);

  const handleOnChangrTextSearch = (e) => {
    const value = e.target.value;
    setTextSearchProduct(value);
  };

  const handleOnClickSubmitSearch = (e) => {
    e.preventDefault();
    setStringSearch(textSearchProduct);
    setTextSearchProduct("");
  };

  const handleChangeControl = () => {
    setIsOpenControl(!isOpenControl);
  };
  const handleSignOut = () => {
    signOut();
    setIsOpenControl(false);
    history.push("/")
  };
  var user = null;
  if (currentUser) {
    user = currentUser[0];
  }

  const handleChangeOpenSmallCart = () => {
    setIsOpenSmallCart(true);
  };

  
  const displayForm = () => {
    if (currentUser && user) {
      return (
        <>
          <div className="menu__topItem">
            <div className="userLogin">
              <div className="img__user">
                <img src={user.photoURL} alt="" />
              </div>
              <div className="name__user">{user.displayName}</div>
              <i class="fas fa-chevron-down" onClick={handleChangeControl}></i>
              <div
                className={
                  isOpenControl
                    ? "list__control active__control"
                    : "list__control"
                }
              >
                <div
                  className="item__control"
                  onClick={() => setIsOpenControl(false)}
                >
                  <Link to = "/my-order">My Order</Link>
                </div>
                <div className="item__control logOut" onClick={handleSignOut}>
                  Sign Out
                </div>
              </div>
            </div>
          </div>
          <div className="menu__topItem" onClick={handleChangeOpenSmallCart}>
            <div id="cart">
              <span>{count}</span>
              <i className="fas fa-shopping-bag" />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="menu__topItem">
            <Link to="/login">Sign In</Link>
          </div>
        </>
      );
    }
  };

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__top">
          <div className="menu__topList">{displayForm()}</div>
        </div>
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src="./images/logo.png" alt ="clothes-shop" />
            </Link>
          </div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/">Home</Link>
            </li>
            {LoaiHang
              ? LoaiHang.map((item) => {
                  return (
                    <li key={item.id} className="navbar__item">
                      <Link to={`/product/${item.TenLoai}/${item.id}`}>
                        {item.TenLoai}
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
          <div className="search">
            <input
              value={textSearchProduct}
              type="text"
              placeholder="Search"
              name="search"
              onChange={handleOnChangrTextSearch}
            />
            {textSearchProduct ? (
              <div className="btn-search" onClick={handleOnClickSubmitSearch}>
                <i className="fas fa-search" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
