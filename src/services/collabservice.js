import axios from 'axios';
import {BASEURL} from '../utils/constant.js';

export const sharenote = async(token,noteid,email)=>
{

     return await axios.post(`${BASEURL}/api/v1/collabs`,{
        noteid:noteid,
        email:email,
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

export const getCollabnote = async(token,noteid)=>
{

     return await axios.get(`${BASEURL}/api/v1/collabs/note/${noteid}`,{
          headers:{
               "Content-Type":"application/json",
               "Authorization":`Bearer ${token}`
          }
     });

}


export const getupdateCollabnote = async(token,noteid,title,content)=>
{

     return await axios.put(`${BASEURL}/api/v1/collabs/update/${noteid}`
     ,{
          title:title,
          content:content
      }
     ,{
          headers:{
               "Content-Type":"application/json",
               "Authorization":`Bearer ${token}`
          }
     });

}



