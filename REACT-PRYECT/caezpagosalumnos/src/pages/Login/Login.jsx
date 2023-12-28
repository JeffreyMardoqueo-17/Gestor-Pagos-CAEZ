import React, { useEffect } from 'react';
import './Login.css'


const Login = () => {
    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        const handleRegisterClick = () => {
            container.classList.add('active');
        };

        const handleLoginClick = () => {
            container.classList.remove('active');
        };

        registerBtn.addEventListener('click', handleRegisterClick);
        loginBtn.addEventListener('click', handleLoginClick);

        // Limpieza de los event listeners al desmontar el componente
        return () => {
            registerBtn.removeEventListener('click', handleRegisterClick);
            loginBtn.removeEventListener('click', handleLoginClick);
        };
    }, []); // El array vacío asegura que este efecto se ejecute solo una vez después del montaje inicial

    return (
        <div className='login'>
            <div className="container" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registeration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-github"></i></a>
                            <a href="#" className="icon"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forget Your Password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" id="login">Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="hidden" id="register">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
