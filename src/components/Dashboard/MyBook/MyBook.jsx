import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";
import { AllServiceContext } from "../../../context/AuthProvider";
import { bookingService } from "../../../services/bookingServices";
const MyBook = () => {
  const [booking, setBooking] = useState([]);
  const { auth } = useContext(AllServiceContext);
  // GET BOOking with JWT

  bookingService.getBooking(auth.email).then((result) => {
    setBooking(result);
  });

  return (
    <div className="container">
      <h1 className="text-center"> MY BOOKING</h1>
      <div className="row">
        {!booking.length && <h1>Loading</h1>}
        {booking?.map((book) => (
          <div className="col-md-4 mt-2">
            <Card
              style={{
                border: "2px solid #fcd6ac",
                boxShadow: "10px 10px 10px #dfcdcd",
              }}
            >
              <Card.Body>
                <Card.Title className="text-primary">
                  {book.serviceName}
                </Card.Title>
                <p>{book.email}</p>
                <h6>
                  Your booking date :{" "}
                  <span style={{ color: "green" }}>
                    {new Date(book.bookingDate).toDateString()}
                  </span>
                </h6>
                <Card.Text>phone:{book.phone}</Card.Text>
                <div className="text-center"></div>
                <Button
                  style={{
                    backgroundColor:
                      book.status === "pending"
                        ? "red"
                        : book.status === "done"
                        ? "green"
                        : book.status === "onGoing"
                        ? "yellow"
                        : null,
                  }}
                >
                  {book.status}
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBook;
