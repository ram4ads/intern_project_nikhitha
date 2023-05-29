import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cards.css';
const Cards = () => {
  // const [userData, setUserData] = useState([]);
  const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5000/userData?page=${page}&limit=2`);
      const data = await response.json();

      setCards(data.cards);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error(error.json);
    }

    setLoading(false);
  };
  useEffect(() => {
    fetchData(currentPage);
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page);
  };


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/userData');
  //       setUserData(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className='total-container'>
      <h1>User Data:</h1>

      <ul className='ul-container'>
      <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {cards.map((card) => (
            <div key={card._id}>
              <div className='card-container'>
                <div className='card'>
                  <p><b>Name: </b>
                    {card.firstname} {card.lastname}</p>
                </div>
                <div className='card'>
                  <p><b>Email: </b>{card.email} </p>
                </div>
                <div className='card'>
                  <p><b>Dob: </b>{card.dob}</p>
                </div>
                <div className='card'>
                  <p><b>Phone: </b>{card.phone}</p>
                </div>
                <div className='card'>
                  <p><b>Sign: </b></p>
                  <img src={card.signature} alt='sign' className='image' />
                </div>
                <div className='card'>
                  <p><b>Photo: </b></p>
                  <img src={card.image} alt="pic" className='image' />
                </div>
              </div>
              {/* <h2>{card.title}</h2>
              <p>{card.description}</p> */}
            </div>
          ))}
          <div>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  disabled={currentPage === page}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
        {/* <div>
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
        </div> */}
      </ul>

      </div>
  );
};

export default Cards;
