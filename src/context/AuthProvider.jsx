import { createContext, useState } from "react";
export const AllServiceContext = createContext();

const AuthProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState({});
  const [auth, setAuth] = useState(null);

  return (
    <AllServiceContext.Provider
      value={{ selectedServices, setSelectedServices, auth, setAuth }}
    >
      {children}
    </AllServiceContext.Provider>
  );
};

export default AuthProvider;
