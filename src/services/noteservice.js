import axios from 'axios';
import {BASEURL} from '../utils/constant.js';


export const getnotes = async(token)=>{
    return await axios.get(`${BASEURL}/api/v1/notes/`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        withCredentials:true
    });
}


export const createnote = async(token,title,content)=>{
    return await axios.post(`${BASEURL}/api/v1/notes/create`,{
        title:title,
        content:content
    }
    ,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        withCredentials:true
    });
}


export const updatenote = async(token,noteId,title,content)=>{
    return await axios.put(`${BASEURL}/api/v1/notes/update/${noteId}`,{
        title:title,
        content:content
    },
    {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        withCredentials:true
    });
}


export const getnote = async(token,noteId)=>{
    return await axios.get(`${BASEURL}/api/v1/notes/note/${noteId}`,
    {
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        withCredentials:true
    });
}


export const deletenote = async(token,noteId)=>{
    return await axios.delete(`${BASEURL}/api/v1/notes/delete/${noteId}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        withCredentials:true
    });
}

