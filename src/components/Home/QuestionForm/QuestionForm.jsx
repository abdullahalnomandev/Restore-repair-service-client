import React from "react";

const QuestionForm = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <img
            style={{ width: "400px" }}
            className="img-fluid"
            src="https://wp.bwlthemes.com/restore_wp/wp-content/uploads/2016/11/quote-image.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 message">
          <h3>REQUEST FREE QUOTE</h3>
          <p>
            Send your request using the form and you will get a free estimation.
          </p>
          <form action="">
            <input
              className="form-control"
              type="text"
              placeholder="Write name"
            />{" "}
            <br />
            <input
              className="form-control"
              type="number"
              placeholder="Write Phone Number"
            />
            <br />
            <textarea
              className="form-control"
              type="number"
              placeholder="Write message here.."
            ></textarea>
            <br />
            <button style={{ float: "right" }} className="main-button ">
              SEND REQUEST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
