import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Card from "./Components/Card";
// import SearchArt from "./Components/SearchArt";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {

  return (
   
    <div className="App">
      
    <BrowserRouter>

    <Navbar/>
    <Form/>
    <Card/>

     {/* <SearchArt />  */}
 
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about-us" element={<AboutUs/>}/> 
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/sign-In" element={<SignIn/>}/>
        <Route path="/sign-Up" element={<SignUp/>}/>
        <Route path="*" element={<Home/>}/> 
      </Routes>
      
    
   
    </BrowserRouter>
    </div>
  );
}

export default App;


