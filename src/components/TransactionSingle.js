import React, {useState, useEffect} from 'react';
import TableProduct from './partials/TableProduct';
import {useParams} from 'react-router-dom';

const TransactionSingle = () => {

    const {id} = useParams();

    const [transaction, setTransaction] = useState({});

    useEffect(() => {
        fetch(`https://backend-pushcart.herokuapp.com/transactions/${id}`, {
            headers: {
                "Authorization" : `Bearer ${localStorage["appState"]}`
            }
        })
        .then(response => response.json())
        .then(data => setTransaction(data))
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">

                    {/* Transaction headers */}
                    <table className="table">
                        <tbody>
                            {/* transaction code */}
                            <tr>
                                <td>Transaction code</td>
                                <td>{transaction._id}</td>
                            </tr>
                            {/* customer */}
                            <tr>
                                <td>Customer Name</td>
                                <td>{transaction.fullname}</td>
                            </tr>
                            

                            {/* purchased date */}
                            <tr>
                                <td>Purchased date</td>
                                <td>__createdAt__</td>
                            </tr>

                            {/* status */}
                            <tr>
                                <td>Status</td>
                                <td>_isComplete_</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-12">
                    <TableProduct/>
                </div>
            </div>
        </div>
    );
}

export default TransactionSingle;
