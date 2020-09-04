import React from 'react';

const CartForm = (props) => {
  return (
    <div className="container">
    	<div className="row">
    		<div className="col-12 py-3">
    			<React.Fragment>
    				<h1 className="bg-dark text-white col-10 ml-5 text-center">My Cart</h1>
    					<table class="table table-striped col-10 ml-5 mb-4">
    						<thead>
    							<tr>
    								<th scope="col">Item Name</th>
    								<th scope="col">Price</th>
    								<th scope="col">Quantity</th>
    								<th scope="col">Subtotal</th>
    								<th scope="col">Actions</th>
    							</tr>
    							</thead>
    							<tbody>
    								<tr>
    									<td>item Name</td>
    									<td>Item Price</td>
    									<td>
    										<form>
                                   
			                                    <div className="input-group mb-3">
			                                        <input 
			                                        type="number"
			                                        min="1" 
			                                        name="quantity" 
			                                        class="form-control form-control-sm"
			                                        value=""
			                                        />
			                                        <div class="input-group-append">
			                                            <button class="btn btn-outline-secondary btn-sm" type="submit" id="button-addon2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			                                              <path fill-rule="evenodd" d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"/>
			                                              <path fill-rule="evenodd" d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"/>
			                                              <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z"/>
			                                          </svg></button>
			                                        </div>
			                                    </div>
			                                </form>

    									</td>
    									<td>Item Subtotal</td>
    									<td>
    										<button className="btn btn-sm d-block btn-danger">Remove</button>
    									</td>
    								</tr>
    							</tbody>
    							<tfoot>
    							<tr>
    								<td colspan="3" className="text-right">Total:</td>
    								<td>item Total</td>
    								<td>
    									<button className="btn btn-md d-block btn-success">Checkout</button>
    								</td>
    							</tr>	
    							</tfoot>
    					</table>
    					<button className ="btn btn-md d-block btn-warning">Delete Cart</button>
    			</React.Fragment>
    		</div>
    	</div>
    </div>
  )
}

export default CartForm;