import React, { useEffect, useState } from 'react';

const CustomerList = () => {
    const [customerList, setCustomerList] = useState([])
    useEffect(() => {
        fetch('https://practical-challenge-server.vercel.app/users')
            .then(res => res.json())
            .then(customer => setCustomerList(customer))
    }, [])
    return (
        <div>
            <p>Total customer {customerList.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>User Type</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            customerList.map((customer, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={customer.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{customer.name}</div>
                                            <div className="text-sm opacity-50">Bangladesh</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{customer.userType}</td>
                                <td>{customer.phoneNumber}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerList;