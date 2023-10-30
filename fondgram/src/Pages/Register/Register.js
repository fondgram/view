import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Variables } from "../../Variables";
import axios from "axios";
import { showErrorToast, showSuccessToast, showWarningToast } from "../../NotificationUtils";


const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    const firstNameRegex = /^[A-Za-z]{2,30}$/;
    const lastNameRegex = /^[A-Za-z]{2,30}$/;
    const emailRegex = /^[A-Za-z0-9._]+@[a-zA-Z-]+\.(com|net|edu)$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.!?@#$%&]).{6,20}$/;

    const errors = [];

    if (!firstNameRegex.test(firstName.trim())) {
      errors.push("Please provide a valid first name!");
    }

    if (!lastNameRegex.test(lastName.trim())) {
      errors.push("Please provide a valid last name!");
    }

    if (!emailRegex.test(email.trim())) {
      errors.push("Please provide a valid email!");
    }

    if (!passwordRegex.test(password.trim())) {
      alert(password)
      errors.push("Please provide a password with 6+ characters, including upper, lowercase, and special characters!");
    }
    if (errors.length > 0) {
      document.querySelector("p.error").innerHTML = errors[0];
      return;
    } else {
      document.querySelector("p.error").innerHTML = "";
    }

    try {
      const response = await axios.post(Variables.API_URL + "user/register", {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        birthday: birthDate.trim(),
        address: address.trim(),
        email: email.trim(),
        username: username.trim(),
        password: password.trim(),
      });
      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("jwtToken", token);
        navigate("/");
        var userInfo = await getUserInfo();
        localStorage.setItem("usersName", userInfo.firstName);
        localStorage.setItem("usersLastName", userInfo.lastName);
        localStorage.setItem("usersEmail", userInfo.email);
        showSuccessToast("You're registered successfully!")
      }
    } catch (error) {
      var response = error.response.data;
      response.errors.forEach(error => {
        showErrorToast(error)
      });
    }
  };

  const getUserInfo = async () => {
    try {
      const userInfo = await axios.get(Variables.API_URL + "user/UserInfo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      return userInfo.data;
    } catch (error) {
      var response = error.response.data;
      response.errors.foreach(error => {
        showErrorToast(error)
      })
    }
  };

  return (
    <div className="register__container">
      <Link to="/"
        style={{ textDecoration: "none", color: "inherit" }}
      ><h1 className="website">Fondgram</h1></Link>
      <div className="register__page">
        <div className="register">
          <img src={require("./assets/login.jpg")} alt="login" />
          <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <input
              type="date"
              title="Optional"
              name="birthDate"
              id="birthDate"
              placeholder="Birthday"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <input
              type="text"
              title="Optional"
              name="address"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
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
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="register__button"
              id="submit"
              name="submit"
            >
              Register
            </button>
            <p className="error"></p>
            <p>
              Have an account?{" "}
              <a href="/login">
                <b>Login Instead</b>
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
