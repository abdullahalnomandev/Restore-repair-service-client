import React from "react";
import Skeleton from "react-loading-skeleton";

const ManageServiceSkeleton = () => {
  return (
    <div className="row">
      {Array(12)
        .fill("")
        ?.map((service, index) => (
          <div key={index} className="col-md-3 mb-1">
            <Skeleton style={{ height: "50px", width: "100%" }} />
          </div>
        ))}
    </div>
  );
};

export default ManageServiceSkeleton;
