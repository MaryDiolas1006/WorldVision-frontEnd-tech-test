import React from 'react';
import TableProduct from './partials/TableProduct';

const TransactionSingle = () => {
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
                                <td>__tranx_code__</td>
                            </tr>
                            {/* customer */}
                            <tr>
                                <td>Customer Name</td>
                                <td>__fullname__</td>
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
