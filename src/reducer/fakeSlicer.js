import { createSlice } from "@reduxjs/toolkit";





const initialState={

    isloading:true,
    fakedata:[]
}



const fakeSlice = createSlice({
    name:"fake",
    initialState:initialState,
    reducers:{

        createdata:(state,action)=>{

             const {id,content} = action.payload;


            if(id>=0) state.fakedata[id] = {...state.fakedata[id],...content}; else state.fakedata.push(content);
               
        }
    }
})


export default fakeSlice.reducer;

export const {createdata} = fakeSlice.actions;

