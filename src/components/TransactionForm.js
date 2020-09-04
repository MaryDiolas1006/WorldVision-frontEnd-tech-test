import React from 'react';
import TransactionHead from './TransactionHead';
import TransactionDetail from './TransactionDetail';


const TransactionForm = () => {
	return (
			<React.Fragment>
				<h1 className="bg-dark text-white col-10 mt-5 ml-5 text-center">Transaction</h1>
					<div className="accordion ml-5" id="accordionExample">
						<div className="card col-10" id="headingOne">
							<h6 className="mb-0">
								<button 
									className="btn btn-link" 
									type="button" 
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-controls="collapseOne">
										<TransactionHead />
									</button>
							</h6>
						</div>

						<div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">							
							<div className="card-body col-10">
								<TransactionDetail />
							</div>
						</div>
					</div>
			</React.Fragment>
		)
}

export default TransactionForm;