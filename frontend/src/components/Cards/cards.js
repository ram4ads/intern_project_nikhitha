import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './cards.css';
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
    <div className='total-container'>
      <h1>User Data:</h1>

      <ul className='ul-container'>
        <div>
          {userData.map(user => (
            <li key={user._id} >
              <div className='card-container'>
                <div className='card'>
                  <p><b>Name: </b>
                    {user.firstname} {user.lastname}</p>
                </div>
                <div className='card'>
                  <p><b>Email: </b>{user.email} </p>
                </div>
                <div className='card'>
                  <p><b>Dob: </b>{user.dob}</p>
                </div>
                <div className='card'>
                  <p><b>Phone: </b>{user.phone}</p>
                </div>
                <div className='card'>
                  <p><b>Sign: </b></p>
                  <img src={user.signature} alt='sign' className='image' />
                </div>
                <div className='card'>
                  <p><b>Photo: </b></p>
                  <img src={user.image} alt="pic" className='image' />
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>

      </div>
  );
};

export default Cards;
