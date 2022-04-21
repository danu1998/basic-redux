import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../features/ProductSlice";
const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const updateProduct = (e) => {
    e.preventDefault();
    dispatch(update({ title, price }));
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <form onSubmit={updateProduct}>
            <div className="my-3">
              <input
                className="form-control"
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="my-3">
              <input
                className="form-control"
                type="text"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="my-3">
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
