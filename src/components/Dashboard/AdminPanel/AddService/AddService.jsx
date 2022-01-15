import axios from "axios";
import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useFirebase from "../../../../hooks/useFirebase";
import { repairServices } from "../../../../services/repairServices";

const AddService = () => {
  const [imageLoader, setImageLoader] = useState("");
  const [image, setImage] = useState("");
  const { admin } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (e) => {
    setImageLoader("pending");

    const imageFile = e.target.files[0];
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "serviceImages");
    data.append("cloud_name", "dzghsspe7");
    axios.post(process.env.REACT_APP_UPLOAD_API, data).then((res) => {
      setImage(res.data.url);
      setImageLoader("success");
    });
  };

  const onSubmit = (data, e) => {
    if (admin) {
      data.img = image;
      //POST Request
      repairServices.postProduct(data).then((res) => {
        if (res) {
          e.preventDefault();
          e.target.reset();
          swal({
            title: "Thanks!",
            text: "Your service added successfully.GO home to see services",
            icon: "success",
          });
        }
      });
    } else {
      swal("Sorry!", "You are not allowed to ADD the service !", "error");
    }
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <Form
          className=" m-auto p-5 w-75"
          style={{ boxShadow: "-22px 10px 41px 30px #ddd", maxWidth: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          {imageLoader === "pending" && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Upload a Photo <span className="text-danger">*</span>{" "}
            </Form.Label>
            <Form.Control
              {...register("img", { required: true })}
              type="file"
              onChange={(e) => handleImageUpload(e)}
            />
            {errors.img && (
              <span className="text-danger">File is required</span>
            )}
          </Form.Group>

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

export default AddService;
