import React from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import useAsync from "../../../../hooks/useAsync";
import { manageAdmin } from "../../../../services/manageAdmin";

const ManageAdmin = () => {
  const { data: allAdmin } = useAsync(manageAdmin.getAllAdmin);

  const handleDeleteAdmin = (id, e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Product !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        //DELETE REQUEST
        manageAdmin.deleteAdmin(id);
        e.target.parentNode.parentNode.parentNode.style.display = "none";
      }
    });

    console.log(id);
    e.preventDefault();
  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Email Address</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        {allAdmin?.map((admin, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handleDeleteAdmin(admin._id, e)}
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

export default ManageAdmin;
