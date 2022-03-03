import React from "react";

const Products = () => {
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
        <tbody></tbody>
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
