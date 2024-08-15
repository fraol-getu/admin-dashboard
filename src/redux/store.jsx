import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './auth/Authslice'
const store = configureStore ({
   
   reducer: {
      auth : AuthReducer
   }

})

export default store