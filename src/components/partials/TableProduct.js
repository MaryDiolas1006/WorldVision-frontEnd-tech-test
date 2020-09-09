import React from 'react';
import TableProductRow from './TableProductRow';
import TableProductFooter from './TableProductFooter';

const TableProduct = ({orders, withAction}) => {


let orderList = orders.map(order => {
    return <TableProductRow key={order._id} order={order} withAction={withAction} />
})

  return (
    <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {/* Name */}
                        <th scope="col">Name</th>
                        {/* price */}
                        <th scope="col">Price</th>
                        {/* quantity */}
                        <th scope="col">Quantiy</th>
                        {/* subtotal */}
                        <th scope="col">Subtotal</th>
                        {/* action */}
                        { 
                            withAction ?  
                            <th scope="col">Action</th> :
                            <></>
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* productRow */}
                    {orderList}

                </tbody>
                {
                    withAction ? 
                    <TableProductFooter/> :
                    <></>
                }
            </table>
        </div> 

  )
}

export default TableProduct;