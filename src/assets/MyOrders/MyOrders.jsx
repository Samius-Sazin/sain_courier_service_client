import React, { useEffect, useState } from 'react'
import useAuth from '../Context/useAuth'
import ShowMyOrders from '../ShowMyOrders/ShowMyOrders';
import { useNavigate } from 'react-router-dom';

function MyOrders() {
  const { user } = useAuth();
  const [myOrders, setMyorders] = useState([]);
  const [loading, setLoading] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://sain-courier-service-server.onrender.com/my-orders', {
      method: "POST",
      headers: {
        'authorization': `Bearer ${localStorage.getItem('idToken')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userEmail: user?.email })
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        else if (response.status === 401) {
          navigate('/register');
        }
      })
      .then(data => {
        setMyorders(data);
        setLoading(1);
      })
  }, [])

  const handleCancelService = id => {
    if (confirm("Are you sure?")) {
      const remainingMyOrders = myOrders.filter(myOrder => myOrder._id != id);
      setMyorders(remainingMyOrders);

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
            alert("Cancellation successful");
          }
        });
    }
    else {
      alert("Something went wrong");
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='w-3/4 flex justify-center mt-28 rounded-lg' style={{ boxShadow: "0px 0px 5px 4px #dddddd" }}>
        <div className='w-full px-8 py-5 pt-10'>
          {
            loading == 1 ?
              myOrders.length > 0 ?
                myOrders.map(myOrder => <ShowMyOrders key={myOrder._id} myOrder={myOrder} handleCancelService={handleCancelService} />)
                :
                <div className='flex justify-center'>
                  <h2 style={{ boxShadow: "0px 0px 5px 4px #dddddd" }} className='text-2xl font bold px-10 py-5 rounded- mb-4'>You don't place any order yet.</h2>
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

export default MyOrders
