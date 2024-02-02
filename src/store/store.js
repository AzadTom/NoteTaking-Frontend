import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducer/authSlicer.js';


export const store = configureStore({
    
     reducer:{
        auth:authReducer
     }
})