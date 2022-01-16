import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdminSkeleton = () => {
  return (
    <div className="row">
      {Array(3)
        .fill("")
        ?.map((admin, index) => (
          <div key={index} className="col-md-12 mb-1">
            <Skeleton style={{ height: "50px", width: "100%" }} />
          </div>
        ))}
    </div>
  );
};

export default AdminSkeleton;
