import { asyncThunkCreator, createSlice } from "@reduxjs/toolkit";
import { Outlet, useNavigate } from "react-router-dom";
const navigate = useNavigate()
const initialState = {
  user: null,
  pwd: null,
  email:null,
  errMsg: '',
  accessToken: null,
  isSuccess: false,


}
export  const Redirect = asyncThunkCreator("Redirect", async(isSuccess) => {
 if(isSuccess) {
   navigate(Outlet)
  } else{
    navigate('/')
  }
  
})

const Authslice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
  loginRequest: (state) => {
    state.errMsg = ''
     state.isSuccess = false
   },
  
   loginSucesss: (state, action) => {
     state.pwd  = action.payload
     state.email = action.payload
      state.accessToken = action.payload.accessToken
     state.isSucess = true
    
     
     
     
   },

   loginfailure:(state,  action) => {
    state.errMsg = action.payload.message
    state.isSucess = false
   },

   saveStorage: (state) => {
    const token = localStorage.getItem('token');
    state.token = token;
    state.isSucess = !!token;
  },

  

   
    }
     

})

export const { loginRequest, loginSucesss, loginfailure, saveStorage } = Authslice.actions
export  default Authslice.reducer