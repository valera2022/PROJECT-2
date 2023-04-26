import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from "./NavBar"
import LogIn from "./LogIn"
import Home from "./Home"
import SignUp from './SignUp';
import {useEffect, useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const[state,setState]= useState([])

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then(r => r.json())
      .then(data => setState(data))
}, [])
console.log(state)
  return (
    <div className="App">
    <NavBar/>
  <Route path="/login">
    <LogIn state={state}/>
   </Route>
   <Route exact path="/">
    <Home />
    </Route>
    <Route path ="/signUp">
      <SignUp/>
    </Route>
    <ToastContainer/>

  
</div>

  );
}

export default App;
