import React from "react";
import useFirebase from "../../hooks/useFirebase";
import Login from "../../pages/Login/Login";

const PrivateRoute = ({ children }) => {
  const { authUser } = useFirebase();

  return authUser?.email ? children : <Login to="/login" />;
};

export default PrivateRoute;
