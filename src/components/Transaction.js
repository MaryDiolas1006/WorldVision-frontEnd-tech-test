import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


const Transaction = (props) => {


    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("https://backend-pushcart.herokuapp.com/transactions", {
            headers: {
                "Authorization": `Bearer ${localStorage["appState"]}`
            }
        })
        .then(response => response.json())
        .then(data => {
            setTransactions(data)
        })
    },[]);


    let transactionList = transactions.map(transaction => {
        return (
          
                <li className="list-group-item" key={transaction._id}>
                <Link to={`/transactions/${transaction._id}`}>
                    {transaction._id + " "}
                    <span className="badge badge-info"> 
                    {
                        transaction.isComplete ? "Complete" : "Pending"
                     }                   
                    </span>
                </Link>
                </li>
        
            )
    })

  return (
    <div className="container">
    	<div className="row">
    		<div className="col-12 col-md-8 col-lg-6 mx-auto">

    		<ul className="list-group">
    			{transactionList}
    		</ul>
    		</div>
    	</div>
    </div>
  )
}

export default Transaction;