import AOS from "aos";
import "aos/dist/aos.css";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { AllServiceContext } from "../../../context/AuthProvider";
import { clientsReview } from "../../../services/reviewItems";

const AddReview = () => {
  AOS.init({ duration: 1500 });
  const { auth } = useContext(AllServiceContext);
  console.log(auth);
  const { name, email, image } = auth;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    data.name = name;
    data.email = email;
    data.image = image;
    //POST Request
    clientsReview.postReview(data).then((res) => {
      if (res) {
        swal({
          title: "Thanks!",
          text: "Your Review added successfully...!",
          icon: "success",
        });
        e.target.reset();
      }
    });
  };

  return (
    <div className="container" data-aos="zoom-in">
      <div className="row mt-5">
        <Form
          className=" m-auto p-5 w-75"
          style={{ boxShadow: "-22px 10px 41px 30px #ddd", maxWidth: "100%" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
            <Form.Label>
              Star <span className="text-danger">*</span>
            </Form.Label>
            <select className="form-select" {...register("review")}>
              <option selected>5</option>
              <option value="other">4</option>
              <option value="other">3</option>
              <option value="female">2</option>
              <option value="female">1</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              Review<span className="text-danger">*</span>{" "}
            </Form.Label>
            <Form.Control
              {...register("description", { required: true })}
              as="textarea"
              rows={3}
              placeholder="Enter Review"
            />
            {errors.description && (
              <span className="text-danger">
                Review description is required
              </span>
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
