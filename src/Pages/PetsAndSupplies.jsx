import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { MdLocationOn } from 'react-icons/md';

const CATEGORIES = ["All", "Pets", "Food", "Accessories", "Care Products"];

const PetsAndSupplies = () => {
  const petsData = useLoaderData();

  return (
    <div className="p-8 bg-base-200 min-h-screen container mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-secondary mb-10">
        Pets & Supplies Available
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow-md mb-8 gap-4">
        <div className="form-control w-full md:w-1/3">
          <select className="select select-bordered select-md font-semibold" defaultValue="">
            <option value="" disabled>Filter by Category</option>
            {CATEGORIES.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
          </select>
        </div>
        <div>
          <label className="input w-[300px] input-neutral">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search by name or location" />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-3 bg-base-300 rounded-2xl">
        {(Array.isArray(petsData) ? petsData : []).map(item => {
          const id = item._id || item.id;
          return (
            <div key={id} className='rounded-xl shadow-md p-3 text-center flex flex-col justify-between h-[600px]'>
              <div>
                <img src={item.image} alt={item.name} className='w-full h-100 object-cover rounded-lg' />
                <h3 className='text-lg font-bold mt-2'>{item.name}</h3>
                <p className='text-gray-600'>{item.category}</p>
                <p className='font-semibold'>{item.price ? `$${item.price}` : "Free for Adoption"}</p>
                <p className='text-sm text-gray-500 flex items-center justify-center gap-1'>
                  <MdLocationOn className='text-red-500' />
                  {item.location}
                </p>
              </div>
              <Link to={`/product-details/${id}`} className="card-actions justify-end mt-4">
                <button className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700">See Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
