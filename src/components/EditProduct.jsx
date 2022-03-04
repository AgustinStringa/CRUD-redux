import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductDataAction,
  saveProductDataAction,
} from "../actions/productsActions";
import Swal from "sweetalert2";

const EditProduct = () => {
  const { id } = useParams(); //query to db will contain  this id
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productEdit = useSelector((state) => state.products.productEdit);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  const [dataProductEdit, setDataProductEdit] = useState({
    productNewName: "",
    productNewPrice: "",
  });

  const [errorFormEdit, setErrorFormEdit] = useState(false);

  useEffect(() => {
    dispatch(getProductDataAction(Number(id)));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!productEdit) {
      dispatch(getProductDataAction(Number(id)));
    }
    if (productEdit) {
      setDataProductEdit({
        productNewName: productEdit.name,
        productNewPrice: productEdit.price,
      });
    }
    // eslint-disable-next-line
  }, [productEdit, id]);

  useEffect(() => {
    if (error && !productEdit) {
      Swal.fire(
        "Error loading product data",
        "check your connection or API JSON SERVER",
        "error"
      ).then((result) => {
        navigate("/");
      });
    }
    // eslint-disable-next-line
  }, [error, productEdit]);

  const handleChange = (e) => {
    if (e.target.name === "price") {
      setDataProductEdit({
        ...dataProductEdit,
        [`${e.target.name}`]: Number(e.target.value),
      });
      return;
    }
    setDataProductEdit({
      ...dataProductEdit,
      [`${e.target.name}`]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { productNewName, productNewPrice } = dataProductEdit;
    if (!productNewName || productNewPrice <= 0) {
      setErrorFormEdit(true);
      return;
    }
    setErrorFormEdit(false);
    dispatch(
      saveProductDataAction(
        { name: productNewName, price: productNewPrice },
        Number(id)
      )
    );
    navigate("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center text-uppercase">Edit product</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <form action="#" id="formEditProduct" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="productNewName"
                    id=""
                    className="form-control"
                    value={dataProductEdit.productNewName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Price</label>
                  <input
                    type="number"
                    name="productNewPrice"
                    id=""
                    className="form-control"
                    value={dataProductEdit.productNewPrice}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Save Changes"
                    className="form-control btn btn-block btn-primary"
                  />
                </div>
                {errorFormEdit ? (
                  <p className="alert alert-danger p-3">Complete both fields</p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
