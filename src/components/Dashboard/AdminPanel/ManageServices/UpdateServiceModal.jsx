import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import swal from "sweetalert";
import { repairServices } from "../../../../services/repairServices";

const UpdateServiceModal = ({ service }) => {
  const [nameInputValue, setNameInputValue] = useState(null);
  const [priceInputValue, setPriceInputValue] = useState(null);
  const [descriptionInputValue, setDescriptionInputValue] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const id = service._id;
    console.log(id, data);
    //PATCH Request
    repairServices.updateProduct(id, data).then((res) => {
      if (res) {
        handleClose();
        swal({
          title: "Thanks!",
          text: "Your service Updated successfully..",
          icon: "success",
        });
      }
      repairServices.getProduct();
    });
  };

  return (
    <div>
      <FaEdit
        style={{
          color: "green",
          width: "25%",
          fontSize: "110%",
          cursor: "pointer",
        }}
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h3 style={{ color: "green" }}>{service.name}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
            ></Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Product Name<span className="text-danger"></span>{" "}
              </Form.Label>
              <Form.Control
                {...register("name", { required: true })}
                type="name"
                value={nameInputValue || service.name}
                onChange={(e) => setNameInputValue(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
              <Form.Label>
                Enter Price <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                {...register("price", { required: true })}
                type="Price"
                value={priceInputValue || service.price}
                onChange={(e) => setPriceInputValue(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Example textarea<span className="text-danger">*</span>{" "}
              </Form.Label>
              <Form.Control
                {...register("description", { required: true })}
                as="textarea"
                rows={3}
                value={descriptionInputValue || service.description}
                onChange={(e) => setDescriptionInputValue(e.target.value)}
              />
            </Form.Group>
            <input
              className="secondary-button px-3 py-2 w-100"
              type="submit"
              value="Update"
            />
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateServiceModal;
