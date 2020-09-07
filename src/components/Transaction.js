import React from 'react';
import {Link} from 'react-router-dom';


const Transaction = (props) => {
  return (
    <div className="container">
    	<div className="row">
    		<div className="col-12 col-md-8 col-lg-6 mx-auto">

    		<ul className="list-group">
    			<li className="list-group-item">
    			<Link to="/transactions/_transId_">
    				_transactioncode_
    				<span className="badge badge-info">
    				_status_
    				</span>
    			</Link>
    			</li>
    		</ul>
    		</div>
    	</div>
    </div>
  )
}

export default Transaction;