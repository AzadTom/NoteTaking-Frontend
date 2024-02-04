import axios from 'axios';
import {BASEURL} from '../utils/constant.js';

export const sharenote = async(token,noteid,emailslist)=>
{

     return await axios.post(`${BASEURL}/api/v1/collabs`,{
        noteid:noteid,
        emailslist:emailslist,
     },{
          headers:{
               "Content-Type":"application/json",
               "Authorization":`Bearer ${token}`
          }
     })

}



export const ownersharenote = async(token)=>
{

     return await axios.get(`${BASEURL}/api/v1/collabs/collabnotes`,{
          headers:{
               "Content-Type":"application/json",
               "Authorization":`Bearer ${token}`
          }
     });

}


export const invitesharenote = async(token)=>
{

     return await axios.get(`${BASEURL}/api/v1/collabs/invitenotes`,{
          headers:{
               "Content-Type":"application/json",
               "Authorization":`Bearer ${token}`
          }
     });

}
