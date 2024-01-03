import axios from 'axios';
import {BASEURL} from '../utils/constant.js';

export const sharenote = async(noteid,emailslist)=>
{

     return await axios.post(`${BASEURL}/api/v1/collabs`,{
        noteid:noteid,
        emailslist:emailslist,
     })

}



export const ownersharenote = async()=>
{

     return await axios.get(`${BASEURL}/api/v1/collabs/collabnotes`);

}


export const invitesharenote = async()=>
{

     return await axios.get(`${BASEURL}/api/v1/collabs/invitenotes`);

}
