import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate instead of useHistory

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            // Send login request to Spring Boot backend
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            });
            const { token, userId } = response.data;
            console.log('Login Response:', response.data);
            console.log('User ID:', userId);
            // Assume `token` is the JWT token received upon successful login
            localStorage.setItem('jwtToken', token);

            navigate(`/`);// use navigate function to redirect
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login Failed');
        }
    };

    return (
       
        <div className="container mt-5 " style={{marginTop: '5rem'}}>
           
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
