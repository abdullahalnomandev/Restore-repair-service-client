import React from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import useAsync from "../../../../hooks/useAsync";
import useFirebase from "../../../../hooks/useFirebase";
import { bookingService } from "../../../../services/bookingServices";
const ManageBooking = () => {
  const { data: Bookings } = useAsync(bookingService.getAllBooking);
  const { admin } = useFirebase();

  const handleBookingDelete = (id, e) => {
    if (admin) {
      // Delete Booking
      bookingService.deleteBooking(id);
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this Product !",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          //DELETE REQUEST
          bookingService.deleteBooking(id);
          e.target.parentNode.parentNode.parentNode.style.display = "none";
        }
      });
    } else {
      swal("Sorry!", "You are not allowed to DELETE the book !", "error");
    }
  };

  const handleUpdateStatus = (e, id) => {
    if (admin) {
      console.log("updated", e, id);
      bookingService.updateBooking(id, { status: e });
    } else {
      swal("Sorry!", "You are not allowed to change status !", "error");
    }
  };

  return (
    <div>
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr className="text-center">
            <th style={{ width: "5%" }}>S.N</th>
            <th style={{ width: "15%" }}>Service Name</th>
            <th style={{ width: "15%" }}>E-mail</th>
            <th style={{ width: "10%" }}>Phone</th>
            <th style={{ width: "12%" }}>Date</th>
            <th style={{ width: "10%" }}>Status</th>
            <th style={{ width: "8%" }}>Action</th>
          </tr>
        </thead>
        {Bookings?.map((book, index) => (
          <tbody>
            <tr>
              <td className="text-center">{index + 1}</td>
              <td className="text-primary">{book.serviceName}</td>
              <td>{book.email}</td>
              <td>{book.phone}</td>
              <td className="text-success">
                {new Date(book.bookingDate).toDateString()}{" "}
              </td>
              <td
                onChange={(e, id) =>
                  handleUpdateStatus(e.target.value, book._id)
                }
              >
                <select className="form-select">
                  <option value="pending" selected className="text-danger">
                    {book.status}
                  </option>
                  <option value="onGoing" className="text-warning">
                    On Going
                  </option>
                  <option value="done" className="text-success">
                    Done
                  </option>
                </select>
              </td>

              <td className="text-center">
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleBookingDelete(book._id, e)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageBooking;
