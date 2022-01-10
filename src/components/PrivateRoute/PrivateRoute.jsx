import React, { useContext } from "react";
import { AllServiceContext } from "../../context/AuthProvider";
import Login from "../../pages/Login/Login";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AllServiceContext);

  return auth?.email ? children : <Login to="/login" />;
};

export default PrivateRoute;
