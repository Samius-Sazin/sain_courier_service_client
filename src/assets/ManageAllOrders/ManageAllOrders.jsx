import { useEffect, useState } from 'react';
import ShowManageAllOrders from '../ShowManageAllOrders/ShowManageAllOrders';

function ManageAllOrders() {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(0);

    useEffect(() => {
        fetch('https://sain-courier-service-server.onrender.com/manage-all-orders')
            .then(response => response.json())
            .then(data => {
                setAllOrders(data);
                setLoading(1);
            })
    }, [allOrders])

    const handleCancelService = id => {
        if (confirm("Are you sure?")) {
            const remainingAllOrders = allOrders.filter(allOrder => allOrder._id != id);
            setAllOrders(remainingAllOrders);

            fetch('https://sain-courier-service-server.onrender.com/orders/delete', {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount == 1) {
                        alert("Deleted Successfully");
                    }
                });
        }
        else {
            alert("Cancellation successful");
        }
    }

    return (
        <div className='flex justify-center'>
            <div className='w-3/4 flex justify-center mt-28 rounded-lg' style={{ boxShadow: "0px 0px 5px 4px #dddddd" }}>
                <div className='w-full px-8 py-5 pt-10'>
                    {
                        loading == 1 ?
                            allOrders.length > 0 ?
                                allOrders.map(allOrder => <ShowManageAllOrders key={allOrder._id} allOrder={allOrder} handleCancelService={handleCancelService} />)
                                :
                                <div className='flex justify-center'>
                                    <h2 style={{ boxShadow: "0px 0px 5px 4px #dddddd" }} className='text-2xl font bold px-10 py-5 rounded-lg mb-4'>No orders have been placed yet.</h2>
                                </div>
                            :
                            <div className="flex justify-center items-center mb-3">
                                <span className="loading loading-spinner loading-lg text-info"></span>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageAllOrders
