import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRouter = ({ component: Component, isAdmin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isAdmin) return <Component />;
        else return <Redirect to="/admin/login" />;
      }}
    ></Route>
  );
};

export default PrivateRouter;
