import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from "./NavBar"
import LogIn from "./LogIn"
import Home from "./Home"
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
    <NavBar/>
  <Route path="/login">
    <LogIn/>
   </Route>
   <Route exact path="/">
    <Home />
    </Route>
    <Route path ="/signUp">
      <SignUp/>
    </Route>

  
</div>

  );
}

export default App;
