import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
      <div className='container mx-auto'>
        <Banner></Banner>
        <div className='flex gap-5 mt-5 justify-center'>
            <button className="btn btn-outline hover:bg-amber-100 font-bold">Adoption</button>
            <button className="btn btn-outline hover:bg-amber-100 font-bold">Accessories</button>
            <button className="btn btn-outline hover:bg-amber-100 font-bold">Pet Food</button>
            <button className="btn btn-outline hover:bg-amber-100 font-bold">Pet Care Products</button>
        </div>
      </div>
    );
};

export default Home;