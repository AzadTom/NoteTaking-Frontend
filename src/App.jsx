import React from "react";
import {Routes,Route} from 'react-router-dom';


import Header from "./components/Header/Header";
import HomePage from './pages/Homepage';
import Notes from "./pages/Notes";

import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
import Profile from "./pages/Profile";

import CreateNote from "./components/Note/CreateNote";
import UpdateCollabNote  from './components/Note/UpdateCollabNote';




function App() {


  

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/create/:id" element={<CreateNote/>}/>
      <Route path="/collabupdate/:id" element={<UpdateCollabNote/>}/>
      <Route path="/notes" element={<Notes/>}/>
    </Routes>
    </>
  );
}

export default App;
