import React from "react";
import Skeleton from "react-loading-skeleton";

const BookingSkeleton = () => {
  return (
    <div className="row">
      {Array(6)
        .fill("")
        .map((book, index) => (
          <div key={index} className="col-md-4">
            <Skeleton style={{ height: "250px", marginBottom: "20px" }} />
          </div>
        ))}
    </div>
  );
};

export default BookingSkeleton;
