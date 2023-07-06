import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate();
    const handleLogin = (event) => {
        // stop page reload
        event.preventDefault()
        const form = event.target
        // normally we use react forms for that we don't need to access this fields manually but as we have only 2 field so i like to keep it simple.
        const phone = form.phone.value
        const password = form.password.value
        // usually we use firebase auth to handle authentication but as this project is not have that capabilities so we use traditional way to find the user and validate password.
        // Find the user with the entered phone number
        const user = users.find((user) => user.phoneNumber === phone);

        if (!user) {
            // User not found
            Swal.fire('User not found!')
            return;
        }

        // Validate the password
        if (user.password === password) {
            // Password is correct
            // get jwt token and save it into local storage but saving into local storage isn't the best solution because it can easily access by user so the best solution is save this token into database as we don't have this so we can save it into local storage.
            const getToken = async () => {
                const response = await fetch('https://practical-challenge-server.vercel.app/jwt');
                const data = await response.json(); // Assuming the token is returned in the response body as JSON
                localStorage.setItem('access-token', data.token);
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Login Success',
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/home');
              };
              getToken();
            return;
        } else {
            // Password is incorrect
            Swal.fire('Password is incorrect')
            return;
        }

    }
    // loading user data from backend.
    useEffect(() => {
        fetch('https://practical-challenge-server.vercel.app/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <h1 className='text-3xl font-bold'>Login Now</h1>
                <div className="card w-full max-w-md shadow-2xl bg-base-100">
                    <form onSubmit={() => handleLogin(event)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input required name='phone' type="number" placeholder="Phone Number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;