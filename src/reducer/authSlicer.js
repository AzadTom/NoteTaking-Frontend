import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {signup,signin,logout} from '../services/authservice.js';


const initialState = {

     user:null,
     isloading:false,
     error:null

}

 const authSlicer = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{

      builder.addCase(signupuser.pending,(state)=>{

         state.isloading = true

      })
      .addCase(signupuser.fulfilled,(state,action)=>{

         state.isloading = false;
         state.user = action.payload;
      })
      .addCase(signupuser.rejected,(state,action)=>{


        state.isloading = false;
        state.error = action.error.message;


      })
      .addCase(loginuser.pending,(state)=>{
         state.isloading = true;
      })
      .addCase(loginuser.fulfilled,(state,action)=>{

            state.user = action.payload;
            state.isloading = false;
      })
      .addCase(loginuser.rejected,(state,action)=>{

         state.error = action.error.message;
         state.isloading = false;
      })
      .addCase(logoutuser.pending,(state)=>{
         state.isloading = true
      })
      .addCase(logoutuser.fulfilled,(state,action)=>{
         
         state.isloading = false;
         state.user = null;
      }) 
      .addCase(logoutuser.rejected,(state,action)=>{

         state.isloading = false;
         state.error = action.error.message;
      }) 

    }
 })



 export default authSlicer.reducer;






 export const signupuser = createAsyncThunk("/signup",async(name,email,password)=>{


        const response  = await signup(name,email,password);

        return response.data;


 })


 export const loginuser = createAsyncThunk("/login",async(email,password)=>{


    const response  = await signin(email,password);

    return response.data;


})




export const logoutuser = createAsyncThunk("/logout",async()=>{


    const response  = await logout();

    return response.data;


})