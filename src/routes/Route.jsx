import { useDispatch, useSelector } from 'react-redux';
import {  Navigate, Outlet, useNavigate } from 'react-router-dom';
import { loginSucesss, saveStorage } from '../redux/auth/Authslice';
import { useEffect, useState } from 'react';
export const PrivateRoute = () => {
  const isAuthenticated = useSelector(state => state.auth.isSucess); // Use isSuccess directly
  const navigate = useNavigate();
   const dispatch = useDispatch()
  
   return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />; 
     

}