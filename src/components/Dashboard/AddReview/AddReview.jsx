import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { repairServices } from "../../../services/repairServices";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    //POST Request
    repairServices.postProduct(data).then((res) => {
      if (res) {
        e.preventDefault();
        e.target.reset();
        swal({
          title: "Thanks!",
          text: "Your Review added successfully...!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <Form
          className=" m-auto p-5 w-75"
          style={{ boxShadow: "-22px 10px 41px 30px #ddd", maxWidth: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Product Name<span className="text-danger">*</span>{" "}
            </Form.Label>
            <Form.Control
              {...register("name", { required: true })}
              type="name"
              placeholder="Enter Product Name"
            />
            {errors.name && (
              <span className="text-danger">Name is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
            <Form.Label>
              Enter Price <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              {...register("price", { required: true })}
              type="Price"
              placeholder="$ Price"
            />
            {errors.price && (
              <span className="text-danger">Price is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Example textarea<span className="text-danger">*</span>{" "}
            </Form.Label>
            <Form.Control
              {...register("description", { required: true })}
              as="textarea"
              rows={3}
              placeholder="Enter description"
            />
            {errors.description && (
              <span className="text-danger">Description is required</span>
            )}
          </Form.Group>
          <input
            className="secondary-button px-3 py-2 w-100"
            type="submit"
            value="SAVE"
          />
        </Form>
      </div>
    </div>
  );
};

export default AddReview;
