import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <div class="wrapper">
      <div class="logo">
        <img src="" alt="" />
      </div>
      <div class="text-center mt-4 name">Login</div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Email"
            value={user.email}
          />
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            value={user.password}
            placeholder="Password"
          />
        </div>
        <button class="btn mt-3" type="submit">
          Login
        </button>
      </form>
      <div class="text-center fs-6">
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
