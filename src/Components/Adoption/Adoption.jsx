import React from 'react';
import { Link, useLoaderData } from "react-router";


const Adoption = () => {
    const adoptPet = useLoaderData();

    const adoptionListings = adoptPet.filter(adopt =>

        adopt.category === 'Adoption'

    );

    return (

        <div className="p-4 md:p-8 bg-base-200 min-h-screen">
            <h1 className="text-4xl font-extrabold text-center text-primary mb-10">
                ❤️ Adoptable Pets Near You
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {adoptionListings.map((listing, index) => (
                    <div
                        key={index}
                        className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300"
                    >
                        {/* Image */}
                        <figure className="h-56 overflow-hidden">
                            <img
                                src={listing.image}
                                alt={listing.name}
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </figure>
                        <div className="card-body p-6">

                            {/* Name */}
                            <h2 className="card-title text-2xl text-neutral">
                                {listing.name}
                            </h2>

                            {/* Category */}
                            <div className="badge badge-error text-white font-semibold mb-2">
                                Adoption
                            </div>

                            {/* Location */}

                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-semibold text-neutral">📍 Location:</span> {listing.location}

                            </p>

                            {/* Price */}

                            <p className="text-xl font-extrabold text-error mt-1">
                                Free for Adoption
                            </p>

                            {/* Details Button */}
                            <Link to={`/product-details/${listing._id}`} className="card-actions justify-end mt-4">
                                <button className="btn btn-sm btn-outline btn-secondary w-full">See Details</button>
                            </Link>

                        </div>

                    </div>

                ))}



                {adoptionListings.length === 0 && (

                    <div className="col-span-full text-center py-10 text-lg text-gray-500">

                        No adoption listings are currently available.

                    </div>

                )}

            </div>

        </div>

    );

};

export default Adoption;

