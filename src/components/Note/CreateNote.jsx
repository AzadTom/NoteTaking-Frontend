import { useState ,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createnote ,updatenote ,getnote} from '../../services/noteservice.js';
import {sharenote} from '../../services/collabservice.js';

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


    const[open,setopen] = useState(false);

    const [open1,setopen1] = useState(false);

    const [user,setUser] = useState("");

    const[inviteuser,setinviteuser] = useState([]);


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


    const submitComplete = async()=>{

        try{

            setinviteuser((prev)=>([...prev,user]));
           

            if(id != -1)
            {
                const response  = await sharenote(token,id,user);
                if(response)
                {
                    console.log(response.data);
                }
            }

            setUser("");


        }catch(err){

            console.log(err);
        }

    }
    

    return(
        <>
         <section>
        <div className="flex flex-col mx-4 my-2">
            <div className="relative">
            <span className="cursor-pointer rounded-md flex justify-end py-2" onClick={()=> setopen((prev)=>(!prev))}> 
             <img src="/More1.png" alt="more" className={id != -1 ?"w-[20px] h-full":"hidden"}  />
            </span>
            {open && <div className="absolute right-0 w-[300px]  px-4 py-2 bg-black text-white">
                   <h2 className="cursor-pointer text-xs" onClick={()=> setopen1((prev)=>(!prev))}>Invite users</h2>
                   {inviteuser && <div className="flex flex-col gap-2 py-2 text-xs">{ inviteuser.map((user)=>( <h2 key={user._id}>{user}</h2> ))}</div> }
                   {<div className="flex flex-col gap-2">
                       <input type="email" placeholder="Enter email" className="px-4 py-2 text-black text-xs" value={user} onChange={(e)=> setUser(e.target.value)} required/> 
                       <button className="px-4 py-2 text-xs"  onClick={submitComplete}>Submit</button>
                   </div> }
            </div> }
            </div>
         <input type="text" placeholder="Title" className="outline-none w-full text-3xl font-semibold " value={content.title} onChange={(e)=> setContent({...content,title:e.target.value})} required/>
         <textarea type="text" placeholder="Type content here..."  className="outline-none w-full h-[100vh]"  value={content.content} onChange={(e)=> setContent({...content,content:e.target.value})} required/>   
        </div>  
         <button className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 rounded-md text-white" onClick={(e)=> save(e)}>Publish note</button>
         </section>
        </>
    )

}


export default CreateNote;