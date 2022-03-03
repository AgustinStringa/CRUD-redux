import React, { useState } from "react";
import { newProductAction } from "../actions/productsActions";
import { useSelector, useDispatch } from "react-redux"; //dispatch manda a ejecutar las acciones, selector accede al state dentro del componente

const NewProduct = () => {
  const dispatch = useDispatch();
  //dispatch manda a llamar las funciones del accion;

  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
  });

  const addProduct = (productData) => dispatch(newProductAction(productData));
  const handleSubmit = (e) => {
    e.preventDefault();
    const { productName, productPrice } = productData;

    if (!productName.trim() || productPrice <= 0) {
      alert("Complete");
      return;
    }

    addProduct({
      name: productName,
      price: productPrice,
    });

    setProductData({
      productName: "",
      productPrice: "",
    });
  };
  const handleChange = (e) => {
    if (e.target.name === "productPrice") {
      setProductData({
        ...productData,
        [`${e.target.name}`]: Number(e.target.value),
      });
      return;
    }
    setProductData({
      ...productData,
      [`${e.target.name}`]: e.target.value,
    });
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center text-uppercase">Add new product</h2>
            <form action="#" id="formNewProduct" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="productName"
                  id=""
                  value={productData.productName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Price</label>
                <input
                  type="number"
                  name="productPrice"
                  min={0}
                  id=""
                  value={productData.productPrice}
                  onChange={handleChange}
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
