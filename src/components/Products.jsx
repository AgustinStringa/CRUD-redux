import React, { useEffect } from "react";
import {
  getProductsAction,
  deleteProductAction,
} from "../actions/productsActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.products.error);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(getProductsAction());
  }, []);
  useEffect(() => {}, [products, error]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
      }
    });
  };
  return (
    <div className="row justify-content-center my-5">
      <h2 className="text-center text-uppercase">Product List</h2>

      <table className="table table-stripped">
        <thead className="table-dark bg-primary">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td
                className="p-5 text-center text-black font-weight-bold bg-gray"
                colSpan={3}
              >
                Loading...
              </td>
            </tr>
          ) : null}
          {products.length > 0 && !error && !loading
            ? products.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td>$ {prod.price}</td>
                  <td className="">
                    <Link
                      to={`/products/edit/${prod.id}`}
                      className="btn btn-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        handleDelete(prod.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}

          {error && !loading ? (
            <tr>
              <td className="alert alert-danger p-5 text-center " colSpan={3}>
                Error loading products. Check your connection or JSON-SERVER API
              </td>
            </tr>
          ) : null}
        </tbody>
        <tfoot className="table-dark bg-primary">
          <tr className="font-weight-bold">
            <td>Name</td>
            <td>Price</td>
            <td>Actions</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Products;
