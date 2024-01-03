import axios from 'axios';
import {BASEURL} from '../utils/constant.js';

export const signup = async(name,email,password)=>
{

     return await axios.post(`${BASEURL}/api/v1/users/signup`,{
        name:name,
        email:email,
        password:password
     },{
        headers:{
          "Content-Type":"application/json",
    
        },
        withCredentials:true
      })

}


export const signin = async(email,password)=>{

    return await axios.post(`${BASEURL}/api/v1/users/login`,{
        email:email,
        password:password
    },{
        headers:{
          "Content-Type":"application/json",
    
        },
        withCredentials:true
      })
}






export const logout = async()=>{
    return await axios.get(`${BASEURL}/api/v1/users/logout`,{
        headers:{
          "Content-Type":"application/json",
        },
        withCredentials:true
      });
}








     

    
