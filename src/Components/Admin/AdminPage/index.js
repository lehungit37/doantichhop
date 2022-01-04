import React, { useContext } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginAdmin from "../LoginPage";
import PrivateRouter from "../PrivateRouter";
import OrderAdmin from "./OrderAdmin";
import "./Admin.scss";
import MenuAdmin from "./MenuAdmin";
import CategoryAdmin from "./CategoryAdmin";
import ProductAdmin from "./ProductAdmin";
import ProductAdminAdd from "./ProductAdmin/ProductAdminAdd";
import ProductAdminDetail from "./ProductAdmin/ProductAdminDetail";
import UserAdmin from "./UserAdmin";
import { AdminContext } from "../../../Context/Provider";

export default function AdminPage() {
  const { path } = useRouteMatch();
  const { isAdmin } = useContext(AdminContext);

  return (
    <div className="admin">
      <BrowserRouter>
        {isAdmin ? <MenuAdmin /> : null}
        <div className="main__content">
          <Switch>
            <PrivateRouter
              exact
              path={`${path}/`}
              component={OrderAdmin}
              isAdmin={isAdmin}
              title="Order"
            />
            <PrivateRouter
              exact
              path={`${path}/category`}
              component={CategoryAdmin}
              isAdmin={isAdmin}
            />
            <PrivateRouter
              exact
              path={`${path}/product`}
              component={ProductAdmin}
              isAdmin={isAdmin}
            />
            <PrivateRouter
              exact
              path={`${path}/product/add`}
              component={ProductAdminAdd}
              isAdmin={isAdmin}
            />
            <PrivateRouter
              exact
              path={`${path}/product/detail/:slug/:id`}
              component={ProductAdminDetail}
              isAdmin={isAdmin}
            />
            <PrivateRouter
              exact
              path={`${path}/product/detail/:slug/:id`}
              component={ProductAdminDetail}
              isAdmin={isAdmin}
            />
            <PrivateRouter
              exact
              path={`${path}/user`}
              component={UserAdmin}
              isAdmin={isAdmin}
            />
            <Route exact path={`${path}/login`} component={LoginAdmin} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
