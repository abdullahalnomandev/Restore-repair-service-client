import React from "react";
import { useParams } from "react-router-dom";
import AddReview from "../../components/Dashboard/AddReview/AddReview";
import AddService from "../../components/Dashboard/AdminPanel/AddService/AddService";
import ManageServices from "../../components/Dashboard/AdminPanel/ManageServices/ManageServices";
import Book from "../../components/Dashboard/Book/Book";
import BookDetails from "../../components/Dashboard/BookDetails/BookDetails";
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
        ) : panel === "manage" ? (
          <ManageServices />
        ) : panel === "book" ? (
          <BookDetails />
        ) : null}
      </div>
    </main>
  );
};

export default Dashboard;
