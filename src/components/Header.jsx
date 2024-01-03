import AccountCircle from "@mui/icons-material/AccountCircle"
import { useNavigate } from "react-router-dom";

const Header = ()=>{

    const navigate = useNavigate();

    return(
        <>
        <header className="flex justify-between px-4 py-2">
            <div>
                <button onClick={()=>navigate("/")}><h1 className="text-2xl font-semibold">Collabrative</h1></button>
            </div>
            <div>
               <button onClick={()=> navigate("/signin")}> <AccountCircle/> </button>
            </div>
        </header>
        </>
    )
}

export default Header;