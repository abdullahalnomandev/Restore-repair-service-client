import React from "react";
import Skeleton from "react-loading-skeleton";

const TestiMonialSkeleton = () => {
  return (
    <div className="row">
      {Array(3)
        .fill("")
        .map((book, index) => (
          <div key={index} className="col-md-4">
            <Skeleton style={{ height: "250px", marginBottom: "20px" }} />
          </div>
        ))}
    </div>
  );
};

export default TestiMonialSkeleton;
