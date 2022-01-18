import React, { Suspense } from "react";
import Loader from "react-js-loader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PrivateRoute = React.lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));

const AppRouter = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className={"row"}>
            <div className={"item text-center"} style={{ marginTop: "30%" }}>
              <Loader
                type="bubble-ping"
                bgColor={"#f69323"}
                color={"#333333"}
                size={500}
              />
            </div>
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
