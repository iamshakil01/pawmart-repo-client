import React from 'react';
import { Link, useLoaderData } from 'react-router';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {petsData.map(pet => {
          const id = pet._id || pet.id;
          return (
            <div key={id} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure className="h-56 overflow-hidden">
                <img src={pet.image} alt={pet.name} className="w-full h-full object-cover" />
              </figure>
              <div className="card-body p-5">
                <h2 className="card-title text-xl text-neutral">
                  {pet.name}
                  <div className={`badge ${pet.category === 'Pets' ? 'badge-error' : 'badge-info'}`}>{pet.category}</div>
                </h2>
                <p className="text-sm text-gray-600">📍 {pet.location}</p>
                <p className="text-lg font-bold mt-2">
                  Price: {pet.price === 0 ? <span className="text-error">Free For Adoption</span> : `৳${pet.price}`}
                </p>
                <Link to={`/product-details/${id}`} className="card-actions justify-end mt-4">
                  <button className="btn btn-sm btn-outline btn-secondary w-full">See Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetsAndSupplies;
