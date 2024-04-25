import { NavLink, useNavigate } from "react-router-dom";
import useFirebase from "../useFirebase/useFirebase";
import './Header.css';
import useAuth from "../Context/useAuth";

const Header = () => {
    const { user, setUser, setError, signInUsingGoogle, logOut } = useAuth();
    const navigate = useNavigate();

    // function that handle login
    const handleLoginButton = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                navigate('/services');
            })
            .catch(error => {
                setError(error);
            })
    }

    //function that handle logout
    const handleLogoutButton = () => {
        logOut()
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error);
            })

    }

    return (
        <div>
            <div className="shadow-lg bg-white px-16 py-3 flex items-center justify-between">
                <div className="text-black flex items-center">
                    <div>
                        <NavLink
                            to='/services'
                        ><img src="/logo.png" className="w-10 me-5 hover:scale-110 transition-transform" /></NavLink>
                    </div>

                    <div>
                        <NavLink
                            to='/services'
                            activeclassname="active"
                            className="font-semibold text-lg me-5 hover:text-[#0089d4]"
                        >Services</NavLink>

                        <NavLink
                            to='/my-orders'
                            activeclassname="active"
                            style={{ wordSpacing: "-1px" }}
                            className="font-semibold text-lg me-5 hover:text-[#0089d4]"
                        >My Orders</NavLink>

                        <NavLink
                            to='/manage-all-orders'
                            activeclassname="active"
                            style={{ wordSpacing: "-1px" }}
                            className="font-semibold text-lg me-5 hover:text-[#0089d4]"
                        >Manage Orders</NavLink>

                        <NavLink
                            to='/add-new-service'
                            activeclassname="active"
                            style={{ wordSpacing: "-1.5px" }}
                            className="font-semibold text-lg me-5 hover:text-[#0089d4]"
                        >Add New Service</NavLink>

                        <NavLink
                            to='/about-us'
                            activeclassname="active"
                            style={{ wordSpacing: "-1px" }}
                            className="font-semibold text-lg me-5 hover:text-[#0089d4]"
                        >About Us</NavLink>
                    </div>
                </div>

                <div className="flex flex-row">
                    {
                        user?.email ?
                            <div className="flex items-center">
                                <img
                                    className="rounded-full w-10 hover:scale-110 transition-transform"
                                    src={user.photoURL}
                                    alt="img"
                                />
                                <button
                                    className="font-semibold text-lg text-black ms-2 me-2 hover:text-[#0089d4]"
                                >{user.displayName}</button>

                                <span className='font-semibold text-lg text-black'> | </span>
                            </div>
                            :
                            <div>
                                <button
                                    onClick={handleLoginButton}
                                    className="font-semibold text-lg text-black ms-5 me-1 hover:text-[#0089d4]"
                                >Login</button>

                                <span className='font-semibold text-lg text-black'> | </span>
                            </div>
                    }

                    {
                        user?.email ?
                            <button
                                onClick={handleLogoutButton}
                                className="font-semibold text-lg text-black ms-2 hover:text-[#0089d4]"
                            >Logout</button>
                            :
                            <NavLink
                                to='/register'
                                className="font-semibold text-lg text-black ms-2 hover:text-[#0089d4]"
                            >Register</NavLink>
                    }

                </div>
            </div>
        </div>
    )
}

export default Header
