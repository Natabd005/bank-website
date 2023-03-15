import { Button, Checkbox } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login () {
    return (
        <div className="login">
            
            <div className="login-form">
                <h2>Good Afternoon </h2>
                <h4>Sign on to manage your accounts.</h4>
                <form >
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="password" required />
                  <div className="login-row">  <Checkbox /> <span>Save Username</span></div>
                  <div className="login-row">     <Button>Sign In</Button> <Link to="/enroll">Enroll</Link> </div>
                        <Link to="/">  Forgot username or password?</Link>
                        <Link to="/">Security Center</Link>
                        <Link to="/">Privacy, Cookies, and Legal</Link>
                        
                </form>
            </div>
            <div className="login-info">
          <h2>Simplify your life</h2>
          <h3>Your money's at hand with Everyday Checking</h3>
          <Button>Start now</Button>
            </div>
        </div>
    )
}
export default Login;