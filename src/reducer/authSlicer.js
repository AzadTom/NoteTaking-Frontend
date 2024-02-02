import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {signup,signin} from '../services/authservice.js';


const initialState = {

     user:"",
     isloading:false,
     error:""

}

 const authSlicer = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{

      removeError:(state,action)=>{

         state.error = "";

      },

      removeUser:(state,action)=>{

         state.user  = "";
      }

    },
    extraReducers:(builder)=>{

      builder.addCase(signupuser.pending,(state)=>{

         state.isloading = true

      })
      .addCase(signupuser.fulfilled,(state,action)=>{

         state.isloading = false;
         state.user = action.payload;

         console.log("signup",action.payload);
         
      })
      .addCase(signupuser.rejected,(state,action)=>{


        state.isloading = false;
        state.error =  action.payload.response.data.message;
       

   
      })
      .addCase(loginuser.pending,(state)=>{
         state.isloading = true;
      })
      .addCase(loginuser.fulfilled,(state,action)=>{

            state.user = action.payload;
            state.isloading = false;
            console.log("login",action.payload);
      })
      .addCase(loginuser.rejected,(state,action)=>{

         state.error = action.error.message;
         state.isloading = false;
      })
     
    }
 })



 export default authSlicer.reducer;
 export const {removeError ,removeUser} = authSlicer.actions;





 export const signupuser = createAsyncThunk("/user/signup",async(userDetail,{rejectWithValue})=>{


         

            try {

               const {name,email,password} = userDetail;

               const response  = await signup(name,email,password);

               return response.data;
               
            } catch (error) {
               
                
                return rejectWithValue(error);
            }
            
          
            
            
 })


 export const loginuser = createAsyncThunk("/login",async(userDetail,{rejectWithValue})=>{


      

         try{

            const response  = await signin(userDetail.email,userDetail.password);

            return response.data;

         } catch(error){

            return rejectWithValue(error);
         }

         
         
      


})




