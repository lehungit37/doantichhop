import React from "react";
import { useState } from "react/cjs/react.development";

export const AdminContext = React.createContext();
 const Provider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const value = {
    isAdmin,
    setIsAdmin
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export default Provider;
