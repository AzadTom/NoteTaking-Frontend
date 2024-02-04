import Note from '../components/Note/Note';
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import {getnotes ,deletenote} from '../services/noteservice.js'
import { invitesharenote} from '../services/collabservice.js';
import { useEffect, useState } from "react";

import AddIcon from '@mui/icons-material/Add';

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
          <CollabNotes token={token}/>
        {<h2 className="text-2xl font-semibold my-2">Notes</h2>}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 sm:gap-8">
          {notes && notes.map((item,index)=>(<Note {...item} key={index} onclick={()=> open(item._id)} deleteNote={()=> deleteNote(item._id)}/> ))}  
          {notes.length == 0  && 
          <div className='w-[300px] h-[250px] bg-black rounded-md text-white flex justify-center items-center'>
              <h2 className='text-3xl font-semibold'>Empty <br /> Notes!</h2>
          </div>} 
        </div>
        <button className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 rounded-md text-white" onClick={()=> navigate("/create/-1")}><Add/> Create note</button>
        </section>
        </>
    )
}


export default Notes;


const CollabNotes = ({token})=>{


  const [collabs,setcollabs] = useState([]);

   useEffect(()=>{

      const getCollabs = async()=>{

        const response  = await invitesharenote(token);
        setcollabs([...response.data.collabnotes])
      }

      getCollabs();

   },[collabs])

  return(
    <div>
       {collabs.length> 0 && <h2 className='text-2xl font-semibold'>CollabNotes</h2>}
       <div className='flex gap-4 overflow-scroll'>
         {collabs && collabs?.map((item)=>(<CollabNote key={item[0]?._id} id={item[0]?._id} title={item[0]?.title} content={item[0]?.content}/>))} 
       </div>
    </div>
  )

}

const CollabNote = ({id ="-1",title = "Title",content="Content"})=>{


  const navigate  = useNavigate();


  const doUpdate = ()=>{

    navigate(`/collabupdate/${id}`);

  }

   
  return(
    <div className='relative flex-none w-[300px] sm:w-[450px] h-[250px] flex flex-col  bg-black text-white px-4 py-2 rounded-md' onClick={()=> doUpdate()}>
       <span className="absolute right-2 top-2 cursor-pointer bg-red-600 p-1 rounded-md"> 
             <img src="/More.png" alt="more" className="w-[20px] h-full"   onClick={()=> doUpdate()}/>
             </span>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )

}