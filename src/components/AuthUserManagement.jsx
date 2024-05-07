import React, { useState} from 'react';
import axios from 'axios';
import './styles.css';
import { useNavigate } from 'react-router-dom';

function AuthUserManagement() {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');


    
    const navigateTo = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/register', {
                username,
                password,
                phoneNumber,
                dateOfBirth
            });
            alert('User Registration Successful');
            setUsername('');
            setPassword('');
            setPhoneNumber('');
            setDateOfBirth('');
            
            navigateTo('/login'); 
        } catch (error) {
            console.error('Error registering user:', error);
            alert('User Registration Failed');
        }
    };

    return (
        <div>
            <h1>Create An Account</h1>
            <div className="container mt-4">
                <form onSubmit={registerUser}>
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
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            value={phoneNumber}
                            onChange={(event) => setPhoneNumber(event.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            value={dateOfBirth}
                            onChange={(event) => setDateOfBirth(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Register</button>
                </form>
            </div>

        </div>
    );
}

export default AuthUserManagement;
