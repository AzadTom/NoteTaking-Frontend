import axios from 'axios';
import {BASEURL} from '../utils/constant.js';


export const getnotes = async()=>{
    return await axios.get(`${BASEURL}/api/v1/notes/`);
}


export const createnote = async(title,content)=>{
    return await axios.post(`${BASEURL}/api/v1/notes/`,{
        title:title,
        content:content
    });
}


export const updatenote = async(noteId,title,content)=>{
    return await axios.post(`${BASEURL}/api/v1/notes/update/${noteId}`,{
        title:title,
        content:content
    });
}