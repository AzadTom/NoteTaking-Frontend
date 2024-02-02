import AccountCircle from "@mui/icons-material/AccountCircle"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header = ()=>{


    const data  = localStorage.getItem("userDetail");
    const userDetail = JSON.parse(data);

    const token = userDetail?.token;

    const navigate = useNavigate();


    const gotouser = ()=>{


        if(!token)
        {
            return navigate("/signin");
        }
        else
        {
            return navigate("/profile");

        }

    }

    return(
        <>
        <header className="flex justify-between px-4 py-2">
            <div>
                <button onClick={()=>navigate("/")}><h1 className="text-2xl font-semibold">Collabrative</h1></button>
            </div>
            <div>
               <button onClick={()=> gotouser()}> <AccountCircle/> </button>
            </div>
        </header>
        </>
    )
}

export default Header;