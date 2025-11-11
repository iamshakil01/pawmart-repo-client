import React from 'react';

// Placeholder Data for Design
const userListings = [
    { id: 101, name: "Luxury Cat Bed", category: "Accessories", price: 75, date: "2025-10-25" },
    { id: 102, name: "Shepherd Puppy", category: "Pets", price: 0, date: "2025-11-01" },
    { id: 103, name: "Bird Seed Mix", category: "Food", price: 12, date: "2025-11-05" },
];

const MyListings = () => {
    return (
        <div className="p-8 bg-base-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-primary mb-8">
                🐾 My Created Listings
            </h1>
            
            <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-lg">
                <table className="table w-full table-zebra">
                    {/* Table Head */}
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
                    {/* Table Body */}
                    <tbody>
                        {userListings.map(listing => (
                            <tr key={listing.id} className="hover">
                                <td>#{listing.id}</td>
                                <td className="font-semibold">{listing.name}</td>
                                <td>
                                    <span className={`badge ${listing.category === 'Pets' ? 'badge-error' : 'badge-info'} text-xs`}>
                                        {listing.category}
                                    </span>
                                </td>
                                <td>{listing.price === 0 ? <span className="text-error font-bold">Adoption</span> : `$${listing.price.toFixed(2)}`}</td>
                                <td>{listing.date}</td>
                                <td className="flex gap-2">
                                    <button className="btn btn-sm btn-warning btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                        Update
                                    </button>
                                    <label htmlFor={`delete_modal_${listing.id}`} className="btn btn-sm btn-error btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        Delete
                                    </label>

                                    {/* Delete Confirmation Modal (DaisyUI) */}
                                    <input type="checkbox" id={`delete_modal_${listing.id}`} className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-xl text-error">Confirm Deletion</h3>
                                            <p className="py-4">Are you sure you want to delete the listing: <span className="font-bold">{listing.name}</span>? This action cannot be undone.</p>
                                            <div className="modal-action">
                                                <button className="btn btn-error">Yes, Delete</button>
                                                <label htmlFor={`delete_modal_${listing.id}`} className="btn">Cancel</label>
                                            </div>
                                        </div>
                                        <label className="modal-backdrop" htmlFor={`delete_modal_${listing.id}`}>Close</label>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;