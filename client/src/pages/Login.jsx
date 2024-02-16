import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleOnclick = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img
          src="	https://avatars.githubusercontent.com/u/148468513?v=4"
          alt=""
        />
      </div>
      <div className="text-center mt-4 name">Login</div>
      <form className="p-3 mt-3" onSubmit={handleOnclick}>
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleOnChange}
            value={user.password}
            placeholder="Password"
          />
        </div>
        <button className="btn mt-3" type="submit">
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;