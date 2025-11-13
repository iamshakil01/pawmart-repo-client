import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const ProductsDetails = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const { _id, name, category, description, price, location, image, email } = data;
    const isPet = category === 'Pets' || price === 0;
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.buyerName.value;
        const address = form.address.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const quantity = form.quantity.value;

        const orderData = {
            listingId: _id,
            productName: name,
            buyerName,
            email: user?.email || '',
            price,
            quantity: Number(quantity),
            address,
            date,
            phone,
            category,
        };
        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        })

            .then(res => res.json())
            .then(saved => {
                if (saved.insertedId) {
                    toast.success("Order submitted!");
                    navigate('/my-orders');
                } else {
                    toast.error("Failed to submit order");
                }
            })
            .catch(err => {
                console.error(err);
                toast.error("Error submitting order");
            });
    };

    return (
        <div className="p-4 md:p-12 min-h-screen mt-20">
            <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-10">
                <h1 className="text-4xl font-extrabold text-center text-neutral mb-8">{name} Details & Order</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <figure className="aspect-video overflow-hidden rounded-lg shadow-lg">
                            <img className="w-full h-full object-cover" src={image} alt={name} />
                        </figure>
                        <div className="border-b pb-4">
                            <div className={`badge ${isPet ? 'badge-error' : 'badge-info'} text-white font-semibold mb-2 text-lg p-3`}>{category}</div>
                            <p className="text-3xl font-bold text-secondary mt-2">
                                Price: {price === 0 ? <span className="text-error">Free for Adoption</span> : `৳${price}`}
                            </p>
                            <p className="text-lg text-gray-600 mt-1"><span className="font-semibold text-neutral">📍 Location:</span> {location}</p>
                            <p className="text-sm text-gray-500 mt-1"><span className="font-semibold text-neutral">👤 Owner/Seller Contact:</span> {email}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-neutral mb-3">Description</h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{description}</p>
                        </div>
                    </div>
                    <div className="lg:border-l lg:pl-10">
                        <h2 className="text-3xl font-bold text-primary mb-5">{isPet ? "Adoption Request Form" : "Place Your Order"}</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Buyer Name</span></label>
                                <input name="buyerName" type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Email</span></label>
                                <input type="email" value={user?.email || ''} readOnly className="input input-bordered bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Listing ID</span></label>
                                <input type="text" value={_id} readOnly className="input input-bordered bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Product Name</span></label>
                                <input type="text" value={name} readOnly className="input input-bordered bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Price</span></label>
                                <input type="text" value={price === 0 ? "Adoption (Free)" : `৳${price}`} readOnly className="input input-bordered bg-gray-100" />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Quantity</span></label>
                                <input name="quantity" type="number" defaultValue={1} min={1} max={isPet ? 1 : 99} readOnly={isPet} className={`input input-bordered ${isPet ? 'bg-gray-100' : ''}`} required />
                                {isPet && <label className="label"><span className="label-text-alt text-error">Quantity for Pets/Adoption is 1.</span></label>}
                            </div>
                            <div className="form-control sm:col-span-2">
                                <label className="label"><span className="label-text font-semibold">Delivery/Pickup Address</span></label>
                                <textarea name="address" placeholder="Your full address" className="textarea textarea-bordered h-20" required></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Preferred Pickup/Delivery Date</span></label>
                                <input name="date" type="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label"><span className="label-text font-semibold">Phone Number</span></label>
                                <input name="phone" type="tel" placeholder="e.g., 01XXXXXXXXX" className="input input-bordered" required />
                            </div>
                            <div className="form-control sm:col-span-2">
                                <label className="label"><span className="label-text font-semibold">Additional Notes (Optional)</span></label>
                                <textarea name="notes" placeholder="Any specific delivery instructions or pet requirements." className="textarea textarea-bordered h-20"></textarea>
                            </div>
                            <div className="form-control mt-6 sm:col-span-2 flex items-center justify-center">
                                <button type="submit" className="btn btn-secondary text-lg">{isPet ? "Submit Adoption Request" : "Confirm Order"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
