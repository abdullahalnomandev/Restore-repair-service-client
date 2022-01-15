import React from "react";
import { useParams } from "react-router-dom";
import AddReview from "../../components/Dashboard/AddReview/AddReview";
import AddAdmin from "../../components/Dashboard/AdminPanel/addAdmin/AddAdmin";
import AddService from "../../components/Dashboard/AdminPanel/AddService/AddService";
import ManageAdmin from "../../components/Dashboard/AdminPanel/ManageAdmin/ManageAdmin";
import ManageBooking from "../../components/Dashboard/AdminPanel/ManageBooking/ManageBooking";
import ManageServices from "../../components/Dashboard/AdminPanel/ManageServices/ManageServices";
import Book from "../../components/Dashboard/Book/Book";
import MyBook from "../../components/Dashboard/MyBook/MyBook";
import Profile from "../../components/Dashboard/Profile/Profile";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  const { panel } = useParams();
  return (
    <main className="dashboard-container">
      <Sidebar />
      <div id="content">
        {panel === "profile" ? (
          <Profile />
        ) : panel === "book" ? (
          <Book />
        ) : panel === "addService" ? (
          <AddService />
        ) : panel === "addReview" ? (
          <AddReview />
        ) : panel === "manageServices" ? (
          <ManageServices />
        ) : panel === "myBook" ? (
          <MyBook />
        ) : panel === "manageBookings" ? (
          <ManageBooking />
        ) : panel === "addAdmin" ? (
          <AddAdmin />
        ) : panel === "manageAdmin" ? (
          <ManageAdmin />
        ) : null}
      </div>
    </main>
  );
};

export default Dashboard;
