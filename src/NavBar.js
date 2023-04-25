import React from "react"
import { NavLink } from "react-router-dom";


function NavBar() {
    const style ={
 display: "inline-block",
  width: "50px",
  padding: "20px",
  margin: "0 20px 20px",
  background: "blue",
  textDecoration: "none",
  color: "white",
    }
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={style}
          activeStyle={{
            background: "red",
          }}
        >
          Home
        </NavLink>
        {/* <NavLink
          to="/"
          exact
          style={style}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink> */}
        <NavLink
          to="/login"
          exact
          style={style}
          activeStyle={{
            background: "red",
          }}
        className="NavLink">
          Login
        </NavLink>
      </div>
    );
  }

  export default NavBar