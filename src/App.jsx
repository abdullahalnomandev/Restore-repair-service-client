import React from "react";
import AppRouter from "./AppRouter";
import AuthProvider from "./context/AuthProvider";
const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
