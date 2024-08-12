import { createAsyncThunk } from "@reduxjs/toolkit";
 import  axios from 'axios'
   export const handleSubmit =  createAsyncThunk("handleSubmit", async(values) => {
    const response = axios.post('https://two51-comm-backend.onrender.com/job', values)
    return response.data
   })