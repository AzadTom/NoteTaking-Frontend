import Add from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const HeroSection =()=>{


    const navigate = useNavigate();

    const data  = localStorage.getItem("userDetail");
    const userDetail = JSON.parse(data);

    const token = userDetail?.token;

    const goToNotes = ()=>{

        if(!token)
        {
            return navigate("/signin");
        }
        else
        {
            return navigate("/notes")
        }
        
    }
    
    const create =(e)=>{


        e.preventDefault();

        if(!token)
        {
            return navigate("/signin");
            
        }

        navigate(`/create/-1`);

    }

    return(
        <>
        <div className="relative w-full h-screen">
        <video src="/demo.mp4" className="w-full h-full  object-cover" loop autoPlay />
         <div className="absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl sm:text-8xl text-white font-bold">Collabrative</h1>
            <h2 className="text-2xl sm:text-6xl text-white font-bold">Notes</h2>
            <button className="px-4 py-2 rounded-sm bg-white " onClick={()=> goToNotes()}>GetStarted</button>
         </div>
          <button className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 rounded-md text-white" onClick={(e)=> create(e) }><Add/> Create note</button>
        </div>
        </>
    )
}


export default HeroSection;