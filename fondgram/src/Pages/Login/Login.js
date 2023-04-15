import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div className='login__container'>
            <h1 className='website'>Fondgram</h1>
            <div className='login__page'>
                <div className="login">
                    <img src={require("./assets/login.jpg")} alt="login" />
                    <form action="./Php/login.php" method="POST">
                        <h1>Login</h1>
                        <input type="email" name="email" placeholder="Email" id="email" required />
                        <input type="password" name="password" placeholder="Password" id="password" required />
                        <button type="submit" className="login__button" name="submit" id="submit">Login</button>
                        <p className="error"></p>
                        <p>
                            Don't have an account? <a href="register.php"><b>Register</b></a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login