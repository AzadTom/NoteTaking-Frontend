import { useState } from "react";



const Note = ({title,content,onclick ,deleteNote})=>{




    const [open,setopen] = useState(false);


    const openoption = (event)=>{

        event.stopPropagation();
        setopen((prev)=>(!prev));
    }

    const  deletingNote  = (event)=>{

        event.stopPropagation();
        deleteNote();
        setopen(false);

    }
    

    return(
        <>
         <div className="h-[250px] border border-black bg-black text-white rounded-md p-4" onClick={onclick}>

            <div className="flex justify-between relative">

            <h2 className="text-xl font-semibold w-full">{title}</h2>

             
             <span className="cursor-pointer bg-red-600 p-1 rounded-md" onClick={openoption}> 
             <img src="/More.png" alt="more" className="w-[20px] h-full"  />
             </span>
             {open && <div className="absolute  -top-[4rem]  -right-[1rem] p-2 bg-black border border-white rounded-md cursor-pointer" onClick={deletingNote}>Delete</div> }
             


            </div>


            <p className="text-ellipsis overflow-hidden text-gray-200">{content}</p>
         </div>
        </>
    )
}


export default Note;