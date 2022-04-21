import React from "react";
import AddProduct from "../Product/AddProduct";
import ShowProduct from "../Product/ShowProduct";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <AddProduct />
        </div>
        <div className="col-md-6">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
