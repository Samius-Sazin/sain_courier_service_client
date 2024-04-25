import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Context/useAuth";
import { useEffect } from "react";

function AuthMiddleware() {
    const { user } = useAuth();
    const location = useLocation();

    return user?.email ? <Outlet /> : <Navigate to='/register' replace={true} state={{ from: location }} />
}

export default AuthMiddleware
