import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
export default function Login(){
  const navigate=useNavigate()
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      if (response.status===200) {
        console.log('Login successful');
        navigate('/cards')
        // Redirect the user to a different page or perform any further actions
      } else {
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

    return(
        <div>
            <center>
                <div className='login-container'>
                <b>Email Id:</b>
                <input type='email' onChange={(e) => setEmail(e.target.value)}/>
                <b>Password:</b>
                <input type='password' onChange={(e) => setPassword(e.target.value)}/>
                <button className='button' onClick={handleSubmit}>Login</button>
                <p>If you don't have account? 
                    <Link to="/form">Sign up
                    </Link>
                </p>
                </div>
            </center>
        </div>
    )
}