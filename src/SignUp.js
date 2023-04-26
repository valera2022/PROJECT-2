import React from "react";
import { useState } from "react";
import  ReactDOM  from "react";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";


function SignUp(){
  const history = useHistory()
  const [data,setData]= useState([])
  
    function HandleSubmit(e){
      e.preventDefault()
       
        // console.log( e.target.name.value)
        let formData = {
            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

         fetch("http://localhost:8000/data",{
              method: "POST",
              headers: 
              { "Content-Type": "application/json" },
              body: JSON.stringify(
                formData
              )
        
        
              
            })
            .then(r=> r.json())
            .then(dat=> { 
              setData(...data,dat)
              toast.success("You just signed up!")
              history.push('/login')                                  })
            .catch(r=> toast.error("Oops, Failed to signed up" + r.message))

    }
    return(  <div>
        <h1>Sign Up!</h1>
        <form onSubmit={HandleSubmit}>
        <div>
            <input required type="text" name="name" placeholder="Name"  />
          </div>
          <div>
            <input required type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input required type="email" name="email" placeholder="Email" />
          </div>
          <div>
            <input required type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>)
}

export default SignUp