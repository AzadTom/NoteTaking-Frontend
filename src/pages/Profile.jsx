import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../reducer/authSlicer.js';



const Profile = () => {
    

  const data  = localStorage.getItem("userDetail");

  const userDetail = JSON.parse(data);


  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const userInfo = userDetail.user;


  const logout  = ()=>{


    localStorage.removeItem("userDetail");
    dispatch(removeUser());
    navigate("/");



  }

  


  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='bg-black p-2 w-[200px] h-[200px] text-white rounded-md flex flex-col  gap-2 justify-center items-center'>
              {/* <Logout/> */}
            <h2 className='text-3xl'>{userInfo.name}</h2>
            <span className="text-xs">{userInfo.email}</span>
            <button className='bg-white text-black px-2 py-1 rounded-md text-sm' onClick={()=> logout()}>Log Out</button>
        </div> 
    </div>
  )
}

export default Profile