import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../reducer/authSlicer.js';

import fakeReducer from "../reducer/fakeSlicer.js";

export const store = configureStore({
    
     reducer:{
        auth:authReducer,
        fake:fakeReducer
     }
})