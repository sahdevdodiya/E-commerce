import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Footer from "./components/Footer";
import React, { useState } from 'react';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
          <Route path="/logout" element={<Logout/>} />
        </Routes>
        <div className="bg-slate-900 w-full mt-20">
        <Footer />
        </div>
        
  </div>)
};

export default App;
