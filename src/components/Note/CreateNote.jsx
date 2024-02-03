import { useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createnote ,updatenote ,getnote} from '../../services/noteservice.js';

const CreateNote =()=>{


    const {id} = useParams();


    const navigate = useNavigate();


    const data  = localStorage.getItem("userDetail");
    const userDetail = JSON.parse(data);

    const token = userDetail.token;

   

    const[content,setContent]= useState({
        title:  "",
        content: ""
    })


    const save = async(e)=>{

        e.preventDefault();

       

        if(!content.title=="" || !content.content=="")
        {
            
             if(id != -1)
             {
                const response  = await  updatenote(token,id,content.title,content.content);
                if(response)
                {
                    console.log(response);
                    navigate("/notes");
    
                }
             }
             else
             {
                const response  =  await createnote(token,content.title,content.content);
                if(response)
                    {
                        console.log(response);
                        navigate("/notes");

                    }
             }
           
            
        }
       
        
        
    }


    useEffect(()=>{


        const setData= async()=>{

           if(id != -1)
           {
              const response  = await  getnote(token,id);
              
              if(response)
              {
                  const { isSuccessfull} = response.data;

                  console.log(isSuccessfull);

                  setContent({
                    title: isSuccessfull.title,
                    content: isSuccessfull.content
                  });
                 

              }
           }

        }

       setData();


    },[])

    

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