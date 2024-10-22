import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto p-6 text-center'>
            <h1 className='text-2xl md:text-3xl font-medium'>Upload files using Cloudinary in MERN stack project</h1>

            <ul className='flex items-center justify-center my-10'>
                <NavLink to='/'><li className='py-2 px-6 mx-1 text-gray-500 hover:text-gray-700 active:text-gray-500'>Home</li></NavLink>
                <NavLink to='/upload'><li className='py-2 px-6 mx-1 text-gray-500 hover:text-gray-700 active:text-gray-500'>Upload</li></NavLink>
                <NavLink to='/secureUpload'><li className='py-2 px-6 mx-1 text-gray-500 hover:text-gray-700 active:text-gray-500'>Secure Upload</li></NavLink>
            </ul>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;