import React from 'react';
import { Link, useLoaderData } from "react-router";
import { MdLocationOn } from 'react-icons/md';

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-3 bg-base-300 rounded-2xl max-w-7xl mx-auto">
                {adoptionListings.map((item, index) => (
                    <div key={index} className='rounded-xl shadow-md p-3 text-center flex flex-col justify-between h-[600px]'>
                        <div>
                            <img src={item.image} alt={item.name} className='w-full h-100 object-cover rounded-lg' />
                            <h3 className='text-lg font-bold mt-2'>{item.name}</h3>
                            <p className='text-gray-600'>{item.category}</p>
                            <p className='font-semibold'>Free for Adoption</p>
                            <p className='text-sm text-gray-500 flex items-center justify-center gap-1'>
                                <MdLocationOn className='text-red-500' />
                                {item.location}
                            </p>
                        </div>
                        <Link to={`/product-details/${item._id}`} className="card-actions justify-end mt-4">
                            <button className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700">See Details</button>
                        </Link>
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
