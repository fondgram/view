import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Variables } from "../../Variables";
import { Link, useNavigate } from "react-router-dom";
import { showErrorToast, showInfoToast, showSuccessToast, showWarningToast } from "../../NotificationUtils";



const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const usernameRegex = /^[A-Za-z]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!?@#$%&]).{6,20}$/;
    const errors = [];

    if (!usernameRegex.test(username.trim())) {
      errors.push("Please provide a valid username!");
    }

    if (!passwordRegex.test(password.trim())) {
      errors.push("Please provide a password with 6+ characters, including upper, lowercase, and special characters!");
    }

    if (errors.length > 0) {
      document.querySelector("p.error").innerHTML = errors[0];
      return;
    } else {
      document.querySelector("p.error").innerHTML = "";
    }

    try {
      const response = await axios.post(Variables.API_URL + "user/login", {
        username: username.trim(),
        password: password.trim(),
      });

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem('tokenExpiration', Date.now() + 18000 * 1000); // 5 hours
        navigate("/");
        var userInfo = await getUserInfo();
        localStorage.setItem("usersName", userInfo.firstName)
        localStorage.setItem("usersLastName", userInfo.lastName)
        localStorage.setItem("usersEmail", userInfo.email)
        showSuccessToast("You're logged in successfully!")
      }
    } catch (error) {
      var response = error.response.data;
      response.errors.forEach(error => {
        showErrorToast(error)
      });
    }
  };

  const getUserInfo = async () => {
    if (!localStorage.getItem("jwtToken")){
      return;
    }
    try {
      const userInfo = await axios.get(Variables.API_URL + "user/UserInfo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      return userInfo.data;
    } catch (error) {
      var response = error.response.data;
      response.errors.foreach(error => {
        showErrorToast(error)
      })
    }
  }
  return (
    <div className="login__container">
      <Link to="/"
        style={{ textDecoration: "none", color: "inherit" }}
      ><h1 className="website">Fondgram</h1></Link>
      <div className="login__page">
        <div className="login">
          <img src={require("./assets/login.jpg")} alt="login" />
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
              type="username"
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="login__button"
              name="submit"
              id="submit"
            >
              Login
            </button>
            <p className="error"></p>
            <p>
              Don't have an account?{" "}
              <a href="/register">
                <b>Register</b>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
