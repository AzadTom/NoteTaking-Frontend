import { useState } from "react";
import Input from "./Input.jsx";
import {validateUserDetail} from './validate.js';
import { useNavigate } from "react-router-dom";
import {signupuser} from '../../reducer/authSlicer.js';
import { useDispatch, useSelector } from "react-redux";


const SignUp =()=>{



    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {user,isloading,error} = useSelector((state)=>(state.auth));

    const [userDetail,setUserDetail] = useState({
        name:"",
        email:"",
        password:"",
        comfirm:"",
        error:{
            name:"",
            email:"",
            password:"",
            comfirm:""
        }
    });

    const onchange =(e)=>{

        e.preventDefault();

        setUserDetail({...userDetail,[e.target.name]:e.target.value});
    }

    const onfocus =(e)=>{

        e.preventDefault();

        setUserDetail((prevState)=>({
            ...prevState,
            error:{
                ...prevState.error,
                [e.target.name]:""
            }
        }));
    }

    const onsubmit = (e)=>{

        e.preventDefault();

         const {isValid,error} = validateUserDetail(userDetail);
         

         if(isValid)
         {
            
            try {

                const response = dispatch(signupuser(userDetail.name,userDetail.email,userDetail.password))

                console.log(response);
                
                

            } catch (error) {
                
                console.log(error);
            }
         }
         else
         {

            setUserDetail({...userDetail,error})
         }
       

    }


    if(error)
    {
        return(
            <>
             <section className="flex justify-center items-center w-full h-screen">
                <h2 className="p-8 shadow-lg">{error}</h2>
             </section>
            </>
        )
    }


    if(user)
    {
        return(
            <>
             <section className="flex justify-center items-center w-full h-screen">
                <h2 className="p-8 shadow-lg">{user}</h2>
             </section>
            </>
        )
    }


    return(
        <>
        <section className="flex justify-center items-center h-screen">
        <form onSubmit={onsubmit} className="sm:shadow-lg p-8">
            <div className="my-4 text-center font-semibold">
            <h2 className="text-3xl">Welcome</h2>
            <h3 className="text-xl">SignUp</h3>
            </div>
            <Input type={"text"} placeholder={"Fullname"} name={"name"} value={userDetail.name} onchange={onchange} onfocus={onfocus} error={userDetail.error.name}/>
            <Input type={"email"} placeholder={"Email"} name={"email"} value={userDetail.email} onchange={onchange} onfocus={onfocus} error={userDetail.error.email}/>
            <Input type={"password"} placeholder={"Password"} name={"password"} value={userDetail.password} onchange={onchange} onfocus={onfocus} error={userDetail.error.password}/>
            <Input type={"password"} placeholder={"Comfirm"} name={"comfirm"} value={userDetail.comfirm} onchange={onchange} onfocus={onfocus} error={userDetail.error.comfirm}/>
             <button type="submit" className="px-4 py-2 bg-blue-600 text-white w-full">{isloading?"loading...":"Signup"}</button>
             <div className="my-4 text-center font-semibold">
             <h3 className="text-sm cursor-pointer hover:text-blue-600 hover:underline"onClick={()=> navigate("/signin")}>Already register?Login</h3>
            </div>
        </form>  
        </section> 
        </>
    )
}


export default SignUp;