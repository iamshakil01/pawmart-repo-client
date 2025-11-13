import React from 'react';
import { Link, useLoaderData } from 'react-router';

const PetFood = () => {
    const allListings = useLoaderData();

    const foodProducts = allListings.filter(item =>
        item.category === 'Pet Food'
    );

    return (
        <div className="p-4 md:p-8 bg-base-200 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-secondary mb-10">
                🍽️ Quality Pet Food & Nutrition
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {foodProducts.map((product, index) => (
                    <div
                        key={index}
                        className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300">
                        {/* Image */}
                        <figure className="h-56 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"/>
                        </figure>

                        <div className="card-body p-6">

                            {/* Name */}
                            <h2 className="card-title text-2xl text-neutral">
                                {product.name}
                            </h2>

                            {/* Category */}
                            <div className="badge badge-success text-white font-semibold mb-2">
                                {product.category}
                            </div>

                            {/* Location */}
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-semibold text-neutral">📍 Location:</span> {product.location}
                            </p>

                            {/* Price */}
                            <p className="text-xl font-extrabold text-primary mt-1">
                                Price: ৳{product.price.toLocaleString()}
                            </p>

                            <Link to={`/product-details/${product._id}`} className="card-actions justify-end mt-4">
                                <button className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700">See Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetFood;