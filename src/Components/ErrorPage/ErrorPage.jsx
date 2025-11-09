import React from 'react';

const ErrorPage = () => {
    return (
        <div className='container mx-auto justify-center items-center text-center space-y-5 mt-50'>
            <h1 className='text-6xl font-bold text-black'>Page Not Found</h1>
            <p className='text-xl'>We can't seem to find the page you're looking for. <br></br> Please check the URL for any typos.</p>

            <div>
                <ul className='flex flex-col justify-center items-center'>
                    <li className='hover:underline'>Home Page</li>
                    <li className='hover:underline'>Visit Our Blogs</li>
                    <li className='hover:underline'>Contact Support</li>
                </ul>
            </div>
        </div>

    );
};

export default ErrorPage;