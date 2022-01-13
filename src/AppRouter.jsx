import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
// const PrivateRoute = React.lazy(() =>
//   import("./components/PrivateRoute/PrivateRoute")
// );
// const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
// const Home = React.lazy(() => import("./pages/Dashboard/Dashboard"));
// const Login = React.lazy(() => import("./pages/Login/Login"));
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const AppRouter = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <h6 className="btn-success text-center">Loading....</h6>
          </div>
        }
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard/:panel"
              element={
                <PrivateRoute>
                  {" "}
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default AppRouter;
