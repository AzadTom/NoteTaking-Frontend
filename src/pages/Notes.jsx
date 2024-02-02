import Note from '../components/Note/Note';
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import {getnotes ,deletenote} from '../services/noteservice.js'
import { useEffect, useState } from "react";


const Notes = ()=>{




  const data  = localStorage.getItem("userDetail");
  const userDetail = JSON.parse(data);

  const token  = userDetail.token;


  const[notes,setNotes] = useState([]);

  const navigate = useNavigate();
 

   




    useEffect(()=>{

      const getNotes = async(token) => {

        const response  = await getnotes(token);
        setNotes(response.data.notes);
       
      }


      token && getNotes(token);
      


    },[notes])

    const open =(noteid)=>{

      navigate(`/create/${noteid}`);

    }


    const deleteNote = async(noteid)=>{

  
         try {

         
          const response  = await  token && deletenote(token,noteid);

          if(response)
          {
            console.log(response);
          }else
          {
             console.log("response is failed!")
          }
          
          
         } catch (error) {
          
           console.log("error",error);
         }

    }

    return(
        <>
        <section className="mx-4 my-2 ">
        <h2 className="text-2xl font-semibold my-2">Notes</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 sm:gap-8">
          {notes.map((item,index)=>(<Note {...item} key={index} onclick={()=> open(item._id)} deleteNote={()=> deleteNote(item._id)}/> ))}  
        </div>
        <button className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 rounded-md text-white" onClick={()=> navigate("/create/-1")}><Add/> Create note</button>
        </section>
        </>
    )
}


export default Notes;