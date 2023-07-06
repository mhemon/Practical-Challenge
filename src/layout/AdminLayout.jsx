import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-2">
                {/* Page content here */}
                <Outlet/>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    
                    <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
                    <li><Link to="customerList">Customer List</Link></li>
                    <div className='divider'></div>
                    <li><Link to="/home">User Home</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default AdminLayout;