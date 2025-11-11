import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Accessories = () => {
    const accessories = useLoaderData();
    console.log(accessories)
    // console.log(accessories) // Keeping your console log

    const petAccessories = accessories.filter(access =>
        access.category === 'Accessories' // Correctly filters for 'Accessories'
    );

    return (
        <div className="p-4 md:p-8 bg-base-200 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-secondary mb-10">
                🛠️ Essential Pet Accessories
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {petAccessories.map((access, index) => (
                    <div
                        key={index}
                        className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300"
                    >
                        {/* Image */}
                        <figure className="h-56 overflow-hidden">
                            <img
                                src={access.image}
                                alt={access.name}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </figure>

                        <div className="card-body p-6">
                            {/* Name */}
                            <h2 className="card-title text-2xl text-neutral">
                                {access.name}
                            </h2>

                            {/* Category - CORRECTED to show Accessories and use a different color */}
                            <div className="badge badge-info text-white font-semibold mb-2">
                                {access.category} {/* Dynamically show "Accessories" */}
                            </div>

                            {/* Location */}
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-semibold text-neutral">📍 Location:</span> {access.location}
                            </p>

                            {/* Price - CORRECTED to show the actual price */}
                            <p className="text-xl font-extrabold text-success mt-1">
                                Price: ৳{access.price.toLocaleString()} {/* Showing price with currency symbol and formatting */}
                            </p>

                            {/* Details Button */}
                            <Link to={`/product-details/${access._id}`} className="card-actions justify-end mt-4">
                                <button className="btn btn-sm btn-outline btn-primary w-full">See Details</button>
                            </Link>
                        </div>
                    </div>
                ))}

                {/* CORRECTED: Check if Accessories list is empty */}
                {petAccessories.length === 0 && (
                    <div className="col-span-full text-center py-10 text-lg text-gray-500">
                        No pet accessories are currently available.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accessories;