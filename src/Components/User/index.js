import React from "react";
import {
  Switch,
  Route,

} from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useMemo } from "react/cjs/react.development";
import { useAuth } from "../../Context/AuthProvider";
import UserProvider from "../../Context/UserProvider";
import useFireStore from "../../Hooks/useFireStore";
import BtnScrollTop from "./BtnScrollTop";
import CheckOutPage from "./CheckOutPage";
import DetailPage from "./DetailPage";
import Footer from "./Footer";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Menu from "./Menu";
import OrderPage from "./OrderPage";
import ProductPage from "./ProductPage";
import RegisterPage from "./RegisterPage";
import ResertPasswordPage from "./ResertPasswordPage";
import SmallViewCart from "./SmallViewCart";
import ViewCartPage from "./ViewCartPage";
const UserPage = () => {
  const {currentUser} = useAuth()
  var LoaiHang = useFireStore("LoaiHang", null);
  var uid
  if(currentUser){
    uid = currentUser.uid
  }
  const conditionuser = useMemo(()=>{
    if(uid){
      return{
        fieldName: "uid",
        operator: "==",
        compareValue: uid
      }
    }
  }, [uid])

  var user = useFireStore("KhachHang", conditionuser)
  if(!currentUser){
      user = null
  } 
  return (
    <div className="user__page">
      <BrowserRouter basename="/">
        <UserProvider>
          <Menu LoaiHang={LoaiHang} currentUser = {user} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path={`/product/:slug/:id`} component={ProductPage} />
            <Route
              exact
              path={`/detail-product/:slug/:id`}
              component={DetailPage}
            />
            <Route
              exact
              path={`/product/:slug/:id`}
              component={ProductPage}
            />
            <Route exact path = '/login' component  = {LoginPage} />
            <Route exact path = '/register' component  = {RegisterPage} />
            <Route exact path = '/resert-password' component  = {ResertPasswordPage} />
            <Route exact path = '/view-cart' component  = {ViewCartPage} />
            <Route exact path = '/check-out' component  = {CheckOutPage} />
            <Route exact path = '/my-order' component  = {OrderPage} />
          </Switch>
          <Footer />
          <SmallViewCart />
          <BtnScrollTop />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default UserPage;
