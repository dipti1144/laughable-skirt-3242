import React, { useState } from 'react';

// import Logo from '../../olx-logo.png';
import {Link} from "react-router-dom"

import './Signup.css';

export default function Signup() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username)
    console.log(email)
    const data={email,password}
    localStorage.setItem("data",JSON.stringify(data));
    setEmail("")
    setPassword("")
    setPhone("")
    setUsername("")
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src="data:image/png;base64,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"></img>
        <form onSubmit={handleSubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            required
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
            required

          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
           
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
         
            required
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
       
        <Link  style={{textDecoration:"none"}} to="/login">< button >Login</button></Link>
      </div>
    </div>
  );
}
