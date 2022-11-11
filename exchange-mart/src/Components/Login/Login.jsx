



import { useContext, useState } from "react";
import {AuthContext} from "../../contextStore/AuthContext"
import Logo from "../../olx-logo.png";
import "./Login.css";
export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { token, isAuth, setToken, setIsAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data, "sumitted");
    return fetch("https://reqres.in/api/login", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          console.log(res.token);
          setToken(res.token);
          setIsAuth(true);
        }
      });
  };

  const changeHandler = (e) => {
    const { type, value } = e.target;
    setData({ ...data, [type]: value });
    console.log("OnchangeWorking", data);
  };
  return (
    <>
      
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={changeHandler}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            
            placeholder="password"
            value={data.password}
            onChange={changeHandler}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div> 
      
    </>
  );
}
