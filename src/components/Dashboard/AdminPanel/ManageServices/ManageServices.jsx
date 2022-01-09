import React from "react";
import { Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import swal from "sweetalert";
import useAsync from "../../../../hooks/useAsync";
import { repairServices } from "../../../../services/repairServices";
import UpdateServiceModal from "./UpdateServiceModal";

const ManageServices = () => {
  //GET REQUEST
  const { data: services } = useAsync(repairServices.getProduct);
  console.log("services", services);

  const handleProductDelete = (id, e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Product !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your service has been deleted!", {
          icon: "success",
        });
        //DELETE REQUEST
        repairServices.deleteProduct(id);
        e.target.parentNode.parentNode.parentNode.parentNode.style.display =
          "none";
      }
    });
  };

  return (
    <div className="mt-3">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.N</th>

            <th className="w-25">Service Name</th>
            <th>Price</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        {services?.map((service, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{service.name}</td>
              <td>${service.price}</td>
              <td>
                {" "}
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={service.img}
                  alt=""
                />{" "}
              </td>
              <td>
                <UpdateServiceModal service={service} />
                <AiFillDelete
                  onClick={(e) => handleProductDelete(service._id, e)}
                  style={{
                    color: "red",
                    fontSize: "120%",
                    cursor: "pointer",
                  }}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageServices;
