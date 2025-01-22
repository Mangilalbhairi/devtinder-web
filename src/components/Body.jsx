import React from "react";
import  Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Body = () => {
    return(
        <>
           <Navbar/>
           <Outlet/>
           <h1 className="text-center">Body content</h1>
           <Footer/>
        </>
    )
}
export default Body;