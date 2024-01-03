import { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const SignIn =()=>{


    const navigate = useNavigate();

    const[userDetail,setUserDetail]= useState({
        email:"",
        password:""
    })

    const onchange =(e)=>{

        e.preventDefault();

        setUserDetail({...userDetail,[e.target.name]:e.target.value});
    }

    return(
        <>
        <section className="flex justify-center items-center h-screen">
        <form onSubmit={onsubmit} className="sm:shadow-lg p-8">
            <div className="my-4 text-center font-semibold">
            <h2 className="text-3xl">Welcome</h2>
            <h3 className="text-xl">Login</h3>
            </div>
            <Input type={"email"} placeholder={"Email"} name={"email"} value={userDetail.email} onchange={onchange} />
            <Input type={"password"} placeholder={"Password"} name={"password"} value={userDetail.password} onchange={onchange}  />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white w-full">Login</button>
            <div className="my-4 text-center font-semibold">
             <h3 className="text-sm cursor-pointer hover:text-blue-600 hover:underline"onClick={()=> navigate("/signup")}>Create account?Signup</h3>
            </div>
        </form>  
        </section> 
        </>
    )
}


export default SignIn;