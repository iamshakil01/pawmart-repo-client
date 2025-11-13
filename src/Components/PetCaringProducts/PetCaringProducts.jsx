import React from 'react';
import { Link, useLoaderData } from 'react-router';

const PetCaringProducts = () => {
    // Assuming useLoaderData() returns the full list of products and pets
    const allListings = useLoaderData(); 

    // 1. Filter the data to show ONLY items in the 'Pet Care Products' category
    const careProducts = allListings.filter(item =>
        item.category === 'Pet Care Products'
    );

    return (
        <div className="p-4 md:p-8 bg-base-200 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-secondary mb-10">
                💊 Essential Pet Care Products
            </h1>
            
            {/* --- Products Grid Layout --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {careProducts.map((product, index) => (
                    <div
                        key={index} 
                        className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300"
                    >
                        {/* Image */}
                        <figure className="h-56 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </figure>

                        <div className="card-body p-6">
                            {/* Name */}
                            <h2 className="card-title text-2xl text-neutral">
                                {product.name}
                            </h2>

                            {/* Category - Using badge-warning for care items */}
                            <div className="badge badge-warning text-white font-semibold mb-2">
                                {product.category}
                            </div>

                            {/* Location */}
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-semibold text-neutral">📍 Location:</span> {product.location}
                            </p>

                            {/* Price - Showing actual price */}
                            <p className="text-xl font-extrabold text-success mt-1">
                                Price: ৳{product.price.toLocaleString()}
                            </p>

                            {/* Details Button */}
                           <Link to={`/product-details/${product._id}`} className="card-actions justify-end mt-4">
                                <button className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700">See Details</button>
                            </Link>
                        </div>
                    </div>
                ))}

                {/* Empty State */}
                {careProducts.length === 0 && (
                    <div className="col-span-full text-center py-10 text-2xl font-light text-gray-500">
                        <p>No pet care products are currently listed.</p>
                        <p className='text-base mt-2'>Check back soon for health supplies, grooming kits, and more!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PetCaringProducts;