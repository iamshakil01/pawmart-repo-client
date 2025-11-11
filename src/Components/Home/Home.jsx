import React from 'react';
import Banner from '../Banner/Banner';
import { NavLink } from 'react-router';

const Home = () => {
    return (
      <div className='container mx-auto'>
        <Banner></Banner>
        <div className='p-3 md:flex gap-5 mt-5 justify-center'>
            <NavLink to={'/adoption'} className="btn btn-outline hover:bg-amber-100 font-bold">Adoption</NavLink>
            <NavLink to={'/accessories'} className="btn btn-outline hover:bg-amber-100 font-bold">Accessories</NavLink>
            <NavLink to={'/pet-foods'} className="btn btn-outline hover:bg-amber-100 font-bold">Pet Food</NavLink>
            <NavLink to={'/petCaringProducts'} className="btn btn-outline hover:bg-amber-100 font-bold">Pet Care Products</NavLink>
        </div>


        
      </div>
    );
};

export default Home;