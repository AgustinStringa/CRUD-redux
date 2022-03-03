import React from "react";

const NewProduct = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center text-uppercase">Add new product</h2>
            <form action="#" id="formNewProduct">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="productName"
                  id=""
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Price</label>
                <input
                  type="number"
                  name="productPrice"
                  id=""
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Add"
                  className="form-control btn btn-block btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
