import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/NavBar/Navbar';

const UserLayout = () => {
    return (
        <div className='container'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default UserLayout;