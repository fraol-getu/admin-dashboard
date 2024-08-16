import { useSelector } from 'react-redux';
import {  Navigate, Outlet, useNavigate } from 'react-router-dom';
import { loginSucesss } from '../redux/auth/Authslice';
import { useEffect, useState } from 'react';
export const PrivateRoute = () => {
 const {isSucess} = useSelector(state => state.auth)
 useEffect(() => {
  if (isSucess) {
    return <Outlet />
  } else{
<Navigate to='/login' replace />
  }
 },[isSucess])
 
    

}