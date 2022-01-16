import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServiceSkeleton = () => {
  return (
    <div className="row">
      {Array(4)
        .fill("")
        .map((book, index) => (
          <div key={index} className="col-md-6">
            <Skeleton style={{ height: "250px", marginBottom: "20px" }} />
          </div>
        ))}
    </div>
  );
};

export default ServiceSkeleton;
