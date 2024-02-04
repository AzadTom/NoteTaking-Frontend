import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getCollabnote ,getupdateCollabnote} from '../../services/collabservice.js';

const UpdateCollabNote  = ()=>{


    const {id} = useParams();


    const navigate = useNavigate();


    const data  = localStorage.getItem("userDetail");
    const userDetail = JSON.parse(data);

    const token = userDetail.token;

   

    const[content,setContent]= useState({
        title:  "",
        content: ""
    })




    const onSubmit  = async()=>{


        const response  = await getupdateCollabnote(token,id,content.title,content.content);

        if(response)
        {
            console.log(response.data);
            navigate("/notes");
        }

       



    }


    useEffect(()=>{



        const getnote = async()=>{


            const response  = await getCollabnote(token,id);
            const { isSuccessfull} = response.data;

            setContent({
            title: isSuccessfull.title,
            content: isSuccessfull.content
            });

        }

        getnote();

    },[])



    return(
        <section>
            <div className="px-4 py-2">
          <input type="text"  className="text-3xl outline-none" value={content.title} onChange={(e)=> setContent({...content,title:e.target.value})} placeholder="Title"/>  
          <textarea className="w-full h-[100vh] outline-none" value={content.content} onChange={(e)=> setContent({...content, content:e.target.value})} placeholder="Type content here..."></textarea>
          <button className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 rounded-md text-white" onClick={()=> onSubmit()}>Publish note</button>
        </div>
        </section>
    )

}

export default UpdateCollabNote;