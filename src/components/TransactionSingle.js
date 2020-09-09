import React, {useState, useEffect} from 'react';
import TableProduct from './partials/TableProduct';
import {useParams} from 'react-router-dom';
import TransactionHeader from './partials/TransactionHeader';

const TransactionSingle = () => {

    const {id} = useParams();

    const [transaction, setTransaction] = useState({
        _id: "",
        customerId: {
            fullname: ""
        }
    });

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://backend-pushcart.herokuapp.com/transactions/${id}`, {
            headers: {
                "Authorization" : `Bearer ${localStorage["appState"]}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data) {
                setIsLoading(false)
            }
         setTransaction(data) 
    })
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">

                {
                    !isLoading ? 
                   <TransactionHeader transaction={transaction} />
                   : "Loading..."
                }

                </div>
                <div className="col-12">

                {
                    transaction.orders ?
                    <TableProduct orders={transaction.orders} />
                    : "Loading..."
                }
                </div>
            </div>
        </div>
    );
}

export default TransactionSingle;
