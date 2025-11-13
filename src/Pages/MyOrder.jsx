import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  // ...
  useEffect(() => {
    if (user?.email) {
      fetch(`https://pawmart-server-five.vercel.app/orders?email=${user.email}`)
        .then(res => {
          if (!res.ok) {
            console.error(`Fetch failed with status: ${res.status}`);
            throw new Error(`Server responded with status ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            setOrders(data);
          } else {
            console.error("Server response was not an array:", data);
            setOrders([]);
          }
        })
        .catch(err => {
          console.error("Error fetching orders:", err);
          setOrders([]); 
        });
    }
  }, [user?.email]);

  return (
    <div className="p-8 bg-base-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-secondary mb-8">📦 My Orders & Adoption Requests</h1>
      <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-lg">
        <table className="table w-full table-zebra">
          <thead>
            <tr className="text-base text-primary">
              <th>Product/Listing Name</th>
              <th>Buyer Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Address</th>
              <th>Pick-up Date</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="hover">
                <td className="font-semibold">{order.productName}</td>
                <td>{order.buyerName}</td>
                <td className="font-bold text-lg">{order.price === 0 ? 'Adoption' : `৳${order.price}`}</td>
                <td><span className={`badge ${order.quantity === 1 && order.price === 0 ? 'badge-error' : 'badge-ghost'}`}>{order.quantity}</span></td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
