import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyListings = () => {
    const { user } = useContext(AuthContext);
    const [userListings, setUserListings] = useState([]);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://pawmart-server-five.vercel.app/listings?email=${user.email}`)
                .then(res => res.json())
                .then(data => setUserListings(Array.isArray(data) ? data : []))
                .catch(err => console.error("Error fetching listings:", err));
        }
    }, [user?.email]);

    //  DELETE listing (after confirm)
    const confirmDelete = () => {
        fetch(`https://pawmart-server-five.vercel.app/listings/${deleteId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setUserListings(prev => prev.filter(listing => listing._id !== deleteId));
                    setDeleteId(null);
                }
            })
            .catch(err => console.error("Error deleting listing:", err));
    };

    //  UPDATE listing
    const handleUpdate = (id, field, value) => {
        const updated = { [field]: value };
        fetch(`https://pawmart-server-five.vercel.app/listings/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setUserListings(prev =>
                        prev.map(item => (item._id === id ? { ...item, ...updated } : item))
                    );
                }
            })
            .catch(err => console.error("Error updating listing:", err));
    };

    return (
        <div className="p-8 bg-base-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-primary mb-8">
                🐾 My Created Listings
            </h1>

            <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-lg">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr className='text-base text-secondary'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Date Added</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userListings.map(listing => (
                            <tr key={listing._id} className="hover">
                                <td># {listing._id}</td>
                                <td className="font-semibold">{listing.productName}</td>
                                <td>
                                    <span className={`badge ${listing.category === 'Pets' ? 'badge-error' : 'badge-info'} text-xs`}>
                                        {listing.category}
                                    </span>
                                </td>
                                <td>{listing.price === 0 ? <span className="text-error font-bold">Adoption</span> : `$${listing.price}`}</td>
                                <td>{listing.date}</td>
                                <td className="flex gap-2">
                                    <button
                                        className="btn btn-sm btn-warning btn-outline"
                                        onClick={() => {
                                            const newName = prompt("Enter new product name:", listing.productName);
                                            if (newName) handleUpdate(listing._id, "productName", newName);
                                        }}>
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-sm btn-error btn-outline"
                                        onClick={() => setDeleteId(listing._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Confirmation Modal */}
            {deleteId && (
                <dialog id="deleteModal" className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-error">Confirm Deletion</h3>
                        <p className="py-4">Are you sure you want to delete this listing? This action cannot be undone.</p>
                        <div className="modal-action">
                            <button
                                onClick={confirmDelete}
                                className="btn btn-error"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setDeleteId(null)}
                                className="btn"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyListings;
