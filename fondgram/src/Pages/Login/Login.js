import React, {useState} from 'react'
import axios from "axios"
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (email, password) => {

        try {
            const response = await axios.post('/UserRegistration/login', {
                email: email,
                password: password
            });
            const token = response.data.token;
            console.log("token: " + token)
            // Do something with the JWT token, such as storing it in local storage
        } catch (error) {
            console.error(error);
            // Handle any errors that occur during the login process
        }
    };
    return (
        <div className='login__container'>
            <h1 className='website'>Fondgram</h1>
            <div className='login__page'>
                <div className="login">
                    <img src={require("./assets/login.jpg")} alt="login" />
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <input type="email" name="email" placeholder="Email" id="email" required />
                        <input type="password" name="password" placeholder="Password" id="password" required />
                        <button type="submit" className="login__button" name="submit" id="submit">Login</button>
                        <p className="error"></p>
                        <p>
                            Don't have an account? <a href="/register"><b>Register</b></a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login