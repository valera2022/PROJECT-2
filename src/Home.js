import React from "react";
import SignUp from "./SignUp";
import { NavLink } from "react-router-dom";

function Home(){

//  function handleClick(){
//     return <NavLink to="/signUp"> SignUp</NavLink>  
//  }




   return (<div><h1>This is my homePage</h1>
                <NavLink to="/signUp"> SignUp</NavLink>
           {/* <button style={{color: "#cd9575"}} onClick={handleClick}>Sign Up</button> */}
           </div>
   )



}

export default Home