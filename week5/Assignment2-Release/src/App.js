import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentUserIndex(prevIndex =>
      prevIndex === users.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentUserIndex(prevIndex =>
      prevIndex === 0 ? users.length - 1 : prevIndex - 1
    );
  };

  const currentUser = users[currentUserIndex];

  return (
    <div>
      <h1>User Details</h1>
      {currentUser && (
        <div>
          <p>
            <strong>Name:</strong> {currentUser.name}
          </p>
          <p>
            <strong>Username:</strong> {currentUser.username}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <p>
            <strong>Address:</strong> {currentUser.address.street}, {currentUser.address.suite}, {currentUser.address.city}, {currentUser.address.zipcode}
          </p>
          <p>
            <strong>Phone:</strong> {currentUser.phone}
          </p>
          <p>
            <strong>Website:</strong> {currentUser.website}
          </p>
          <p>
            <strong>Company:</strong> {currentUser.company.name} - {currentUser.company.catchPhrase}
          </p>
        </div>
      )}
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
