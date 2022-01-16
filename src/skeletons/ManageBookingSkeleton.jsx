import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ManageBookingSkeleton = () => {
  return (
    <div className="row">
      {Array(48)
        .fill("")
        ?.map((book, index) => (
          <div key={index} className="col-md-2 mb-1">
            <Skeleton style={{ height: "50px", width: "100%" }} />
          </div>
        ))}
    </div>
  );
};

export default ManageBookingSkeleton;
