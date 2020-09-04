import React from 'react';

const TransactionDetail = () => {
	return (
			<React.Fragment>
				<p className= "mb-0">Payment Mode:</p>
				<p className="mb-0">Client Name</p>
				<p className="mb-0">Status</p>

				<select className="form-control w-25 mt-2 mb-2" name="" id="">
					<option value="Pending">Pending</option>
					<option value="canceled">Canceled</option>
					<option value="completed">Completed</option>
				</select>

				<table className="table table-stipped width-50">
					<thead>
						<tr>
							<th scope="col">Item Name</th>
							<th scope="col">Price</th>
							<th scope="col">Quantity</th>
							<th scope="col">Subtotal</th>
						</tr>
					</thead>

					<tbody>
						<tr>
                           <td>Product Name</td>
                           <td>Product Price</td>
                           <td>Product Quantity</td>
                           <td>Subtotal</td>

						</tr>
					</tbody>

					<tfoot>
						<td></td>
						<td></td>
						<td>Total</td>
						<td>Transaction Total</td>
					</tfoot>
				</table>

			</React.Fragment>
		)
}

export default TransactionDetail;
