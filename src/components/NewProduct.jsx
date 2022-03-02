import React from "react";

const NewProduct = () => {
  return (
    <div>
      NewProduct
      <h2>Add new product</h2>
      <form action="#">
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="">Price</label>
          <input type="number" name="" id="" />
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
