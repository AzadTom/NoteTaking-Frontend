import React from "react";
import {Routes,Route} from 'react-router-dom';


import Header from "./components/Header";
import HomePage from './pages/Homepage';
import Notes from "./pages/Notes";

import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';

import CreateNote from "./components/CreateNote";



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/create/:id" element={<CreateNote/>}/>
      <Route path="/notes" element={<Notes/>}/>
    </Routes>
    </>
  );
}

export default App;
