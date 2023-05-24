import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cards.css';
const Cards = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/userData');
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users Data:</h1>
      
      <ul className='ul-container'>
      <div>
        {userData.map(user => (
          <li key={user._id} >
            <div  className='card-container'>
            <p>Name: {user.firstname} {user.lastname}</p>
            <p>Email: {user.email}</p>
            <p>Dob: {user.dob}</p>
            <p>Phone: {user.phone}</p>
            <img src={user.photo} alt="pic" className='image'/>
            </div>
          </li>
        ))}
        </div>
      </ul>
      
    </div>
  );
};

export default Cards;
