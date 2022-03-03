import React from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams(); //query to db will contain  this id
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center text-uppercase">Edit product</h2>
            <form action="#" id="formEditProduct">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="productNewName"
                  id=""
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Price</label>
                <input
                  type="number"
                  name="productNewPrice"
                  id=""
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Save Changes"
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

export default EditProduct;
