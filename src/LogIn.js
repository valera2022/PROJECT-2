import React from "react";
import { useState } from "react";

function LogIn({state}) {
    console.log(state)

    const [username,setUser]= useState("")
     const [password,setPass]= useState("")
     console.log(username)
     console.log(password)

    state.forEach((data)=>{
        console.log( data.username)
        
    })

    function handleSubmit(e){
        e.preventDefault()
      
        
        
        console.log(e.target.username.value)
        console.log(e.target.password.value)
        let logInData = {
                    username: e.target.username.value,
                    password: e.target.password.value

        }
         }

        //  function handleChange(e){
        //   setUser(e.target.username)
        //   console.log(username)

        //  }
        

    
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" value={username} name="username" placeholder="Username" onChange={e=> setUser(e.target.value)} />
          </div>
          <div>
            <input type="password" value={password}name="password" placeholder="Password" onChange={e=> setPass(e.target.value)}/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

  export default LogIn