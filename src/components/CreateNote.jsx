import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {createdata} from '../reducer/fakeSlicer.js';
import { useDispatch, useSelector } from "react-redux";

const CreateNote =()=>{


    const {id} = useParams();


    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {fakedata} = useSelector((state)=>(state.fake));

    const item = fakedata[id];

    const[content,setContent]= useState({
        title: item && item.title || "",
        content:item && item.content || ""
    })


    const save = (e)=>{

        e.preventDefault();

        if(!content.title=="" || !content.content=="")
        {
            dispatch(createdata({id,content}));
        }
       
        navigate("/notes");
        
    }

    return(
        <>
         <section>
        <div className="flex flex-col mx-4 my-2">
         <input type="text" placeholder="Title" className="outline-none w-full text-3xl font-semibold" value={content.title} onChange={(e)=> setContent({...content,title:e.target.value})} required/>
         <textarea type="text" placeholder="Type content here..."  className="outline-none w-full h-[80vh]"  value={content.content} onChange={(e)=> setContent({...content,content:e.target.value})} required/>   
        </div>  
         <button className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 rounded-md text-white" onClick={(e)=> save(e)}>Publish note</button>
         </section>
        </>
    )

}


export default CreateNote;