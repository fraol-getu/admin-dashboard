import { createSlice } from "@reduxjs/toolkit";
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
     state.isSucess = false
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