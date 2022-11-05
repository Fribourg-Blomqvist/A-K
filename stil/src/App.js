import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Axios from "./Components/Axios";
import SearchArt from "./Components/SearchArt";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App=()=> {
  // // const [randomImage, setRandomImage] = React.useState('');
   
  // // const renderImage = () => {
  // //     const Images = [
  // //       { image: 'img/alone.jpg' },
  // //       { image: 'img/petra.jpg' },
  // //       { image: 'img/damier.jpg' },
  // //       { image: 'img/louvre.jpg' },
  // //     ];
  // //     const randomImageIndex = Math.floor(Math.random() * Math.floor(4));
  // //     return Images[randomImageIndex].image;
  // // };    
  
  // // React.useEffect(() => {
  // //     setRandomImage(renderImage);
  // });
  return (
    
    <div className="App">
      
    <BrowserRouter>

    <Navbar/>
      {/* <Axios/> */}
      <SearchArt />
 
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
