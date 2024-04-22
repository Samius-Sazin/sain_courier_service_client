import React from 'react'
import useAuth from '../Context/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

function Register() {
    const { setUser, setError, signInUsingGoogle } = useAuth();

    const location = useLocation();

    const navigate = useNavigate();

    // function that handle login
    const handleLoginButton = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                navigate(location?.state?.from?.pathname || '/services');
            })
            .catch(error => {
                setError(error);
            })
    }

    return (
        <div className='flex justify-center mt-40'>
            <div className='w-96 flex justify-center' style={{ boxShadow: "0px 0px 5px 4px #dddddd" }}>
                <div className='px-10 py-8 rounded-lg'>
                    <form>
                        <label className='font-semibold text-lg text-[#008dda]' htmlFor="email">Email:</label><br />
                        <input className='px-8 py-3 border-2 border-[#008dda] rounded-lg font-medium w-full mb-1' type='email' placeholder='Enter email' /> <br />
                        <label className='font-semibold text-lg text-[#008dda]' htmlFor="password">Password:</label><br />
                        <input className='px-5 py-3 border-2 border-[#008dda] rounded-lg font-medium w-full' type='password' placeholder='Enter password' /> <br />
                        <input className='cursor-pointer py-3 px-8 bg-[#008dda] rounded-lg mt-3 hover:text-black font-semibold text-white' type='submit' value="Submit" /> <br />
                    </form>

                    <div className='flex items-center justify-center mt-3'>
                        <p className='font-semibold text-lg me-5'>or, </p>
                        <button onClick={handleLoginButton} className='py-3 px-8 bg-[#008dda] rounded-lg mt-2 hover:text-black font-semibold text-white'>Login with google</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
