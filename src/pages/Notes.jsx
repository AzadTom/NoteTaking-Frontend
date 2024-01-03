import { useSelector } from "react-redux";
import Note from '../components/Note';
import Add from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const Notes = ()=>{




   const navigate = useNavigate();

    const {fakedata} = useSelector((state)=>(state.fake));


    const open =(e,index)=>{

      e.preventDefault();
      navigate(`/create/${index}`);

    }

    return(
        <>
        <section className="mx-4 my-2">
        <h2 className="text-2xl font-semibold my-2">Notes</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 sm:gap-8">
          {fakedata.map((item,index)=>(<Note {...item} key={index} onclick={(e)=> open(e,index)}/> ))}  
        </div>
        <button className="fixed bottom-8 right-8 px-4 py-2 bg-blue-600 rounded-md text-white" onClick={()=> navigate("/create/-1")}><Add/> Create note</button>
        </section>
        </>
    )
}


export default Notes;