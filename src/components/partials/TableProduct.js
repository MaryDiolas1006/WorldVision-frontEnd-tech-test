import React from 'react';
import TableProductRow from './TableProductRow';
import TableProductFooter from './TableProductFooter';

const TableProduct = (props) => {
  return (
    <>
    <table class="table table-responsive table-striped col-10 ml-5 mb-4">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
    <tbody>
        <TableProductRow />
    </tbody>

        <TableProductFooter />
    </table>
    </>
  )
}

export default TableProduct;