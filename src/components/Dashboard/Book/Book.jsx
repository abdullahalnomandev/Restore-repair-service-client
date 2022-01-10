import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import { FaCalendarAlt } from "react-icons/fa";
import swal from "sweetalert";
import { AllServiceContext } from "../../../context/AuthProvider";
import { repairServices } from "../../../services/bookingServices";

const Book = () => {
  const { selectedServices, auth } = useContext(AllServiceContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data, e) => {
    //POST BOOKING
    repairServices.postBooking(data).then((res) => {
      if (res) {
        e.preventDefault();
        e.target.reset();
        swal({
          title: `Thanks ${auth.name}`,
          text: "Your book has been successful",
          icon: "success",
        });
      }
    });
  };

  return (
    <section>
      <div className="booking-header">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center gap-5">
            <FaCalendarAlt />
            <h3>Make service booking in Minutes</h3>
            <img src={selectedServices.img} alt="" />
          </div>

          <div className="form-details mt-5">
            <form onSubmit={handleSubmit(onSubmit)} className=" py-5 px-5">
              <div className="row pb-4 d-flex justify-content-center align-items-center">
                <div className="col-md-9">
                  <h6 className="text-left">
                    Service Name <span className="red">*</span>
                  </h6>
                  <select className="form-select" {...register("serviceName")}>
                    <option selected>{selectedServices.name}</option>

                    <option value="female">Mobile</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="col-md-3 pt-2">
                  <h4> Price$ {selectedServices.price}</h4>
                </div>
              </div>

              <div className="row pb-4 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                  <p>E-mail Address</p>
                  <input
                    className="form-control"
                    {...register("email", { required: true })}
                    value={auth.email}
                  />
                  {errors.email && (
                    <span className="red">
                      {" "}
                      E-mail is required <span className="red">*</span>
                    </span>
                  )}
                </div>
                <div className="col-md-6">
                  <p>
                    Telephone/Mobile <span className="red">*</span>
                  </p>
                  <input
                    className="form-control"
                    {...register("phone", { required: true })}
                    placeholder="Phone/Telephone"
                  />
                  {errors.phone && (
                    <span className="phone red">
                      Phone number is required <span className="red">*</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="row pb-4 d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                  <p>
                    Gender <span className="red">*</span>
                  </p>
                  <select className="form-select" {...register("Gender")}>
                    <option selected>Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="col-md-4 ">
                  <p>
                    Book on your favorite day <span className="red">*</span>
                  </p>
                  <Controller
                    control={control}
                    name="booking-date"
                    render={({ field }) => (
                      <DatePicker
                        placeholderText="Select date"
                        className="form-control"
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                        required
                      />
                    )}
                  />
                </div>
              </div>

              <div className="text-center">
                <input
                  className="sub-secondary-button"
                  type="submit"
                  value="Book  Now"
                  style={{ width: "100%" }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
