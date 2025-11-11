import React from 'react';

// Placeholder Data for Design
const userOrders = [
    { id: 201, product: "Fluffy Kitten", buyer: "Current User", price: 0, quantity: 1, address: "123 Main St, Dhaka", date: "2025-11-06", phone: "017-xxx-xxxx" },
    { id: 202, product: "Premium Dog Food", buyer: "Current User", price: 45, quantity: 2, address: "456 Side Rd, Chittagong", date: "2025-11-04", phone: "019-xxx-xxxx" },
    { id: 203, product: "Leather Dog Collar", buyer: "Current User", price: 15, quantity: 1, address: "789 Back Ln, Borpa", date: "2025-11-02", phone: "018-xxx-xxxx" },
];

const MyOrders = () => {
    return (
        <div className="p-8 bg-base-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-secondary mb-8">
                📦 My Orders &amp; Adoption Requests
            </h1>
            
            <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-lg">
                <table className="table w-full table-zebra">
                    {/* Table Head */}
                    <thead>
                        <tr className='text-base text-primary'>
                            <th>Product/Listing Name</th>
                            <th>Buyer Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Address</th>
                            <th>Pick-up Date</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {userOrders.map(order => (
                            <tr key={order.id} className="hover">
                                <td className="font-semibold">{order.product}</td>
                                <td>{order.buyer}</td>
                                <td className="font-bold text-lg">{order.price === 0 ? 'Adoption' : `$${order.price.toFixed(2)}`}</td>
                                <td>
                                    <span className={`badge ${order.quantity === 1 && order.price === 0 ? 'badge-error' : 'badge-ghost'}`}>{order.quantity}</span>
                                </td>
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