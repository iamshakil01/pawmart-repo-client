import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import { Link, NavLink,  } from 'react-router';
import { CiLocationOn } from 'react-icons/ci';
import { MdLocationOn } from 'react-icons/md';

const Home = () => {
    const [listings, setListings] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        fetch('https://pawmart-server-five.vercel.app/pets-supplies/home')
            .then(res => res.json())
            .then(data => setListings(data));
    }, []);

    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <div className='p-3 md:flex gap-5 mt-5 justify-center'>
                <NavLink to={'/adoption'} className="btn btn-outline btn-primary hover:bg-black font-bold">Adoption</NavLink>
                <NavLink to={'/accessories'} className="btn btn-outline btn-primary hover:bg-black font-bold">Accessories</NavLink>
                <NavLink to={'/pet-foods'} className="btn btn-outline btn-primary hover:bg-black font-bold">Pet Food</NavLink>
                <NavLink to={'/petCaringProducts'} className="btn btn-outline btn-primary hover:bg-black font-bold">Pet Care Products</NavLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 p-3">
                {listings.map(item => (
                    <div key={item._id} className=' rounded-xl shadow-md p-3 text-center flex flex-col justify-between h-[600px]'>
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

                        <Link to={`/product-details/${item._id}`} className="card-actions justify-end mt-4">
                            <button className="btn btn-sm btn-outline btn-primary w-full">See Details</button>
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Home;
