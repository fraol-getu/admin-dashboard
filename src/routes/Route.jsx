import { useSelector } from 'react-redux';
import {  Navigate, Outlet, useNavigate } from 'react-router-dom';
import { loginSucesss } from '../redux/auth/Authslice';
export const PrivateRoute = () => {
 const {isSucess} = useSelector(state => state.auth)
// const isSucess = localStorage.getItem('token')
 const navigate  = useNavigate()

 if (isSucess) {
    return <Outlet />; // Render protected content if logged in
  } else {
    // Redirect to login on unsuccessful login
    navigate('/login', { replace: true });
    return null; // Prevent rendering anything if redirected
  }

}