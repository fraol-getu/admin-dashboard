import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";
import { Outlet, useNavigate } from "react-router-dom";

const initialState = {
  user: null,
  pwd: null,
  email:null,
  errMsg: '',
  accessToken: null,
  isSucess: false,
}


const Authslice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
  loginRequest: (state) => {
    state.errMsg = ''
     state.isSuccess = false
   },
  
   loginSucesss: (state, action) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
     state.isSucess = true
    },

   loginfailure:(state,  action) => {
    state.errMsg = action.payload.message
    state.isSucess = false
   },

   saveStorage: (state) => {
    const token = localStorage.setItem('token');
    state.token = token;
    state.isSucess = !!token;
  },

  logOut: (state) => {
    state.user = null;
    state.accessToken = null;
    state.isSuccess = false;
    localStorage.removeItem('token'); 
  }

  

   
    }
     

})

export const { loginRequest, loginSucesss, loginfailure, saveStorage, logOut } = Authslice.actions
export  default Authslice.reducer