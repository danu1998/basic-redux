import React from "react";
import { useSelector } from "react-redux";
const ShowProduct = () => {
  const { title, price } = useSelector((state) => state.product);
  return (
    <div>
      <div className="card">
        <div className="card-body my-3">
          <h4 className="mb-5">Title : {title}</h4>
          <h4>Price : Rp {price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
