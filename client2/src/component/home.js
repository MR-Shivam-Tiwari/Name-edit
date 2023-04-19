import React, { useState, useEffect } from 'react';
import '../css/home.css'
function EditUser({ userData, onUpdate }) {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

function Home() {
  const [userData, setUserData] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    // Fetch user data from API using the email from local storage
    const userEmail = localStorage.getItem('email');

    setUserData({
      name: "Shivam Tiwari",
      email: userEmail
    });
  }, []);

  const handleUpdate = (newUserData) => {
    // Call your API to update the user data with newUserData
    console.log('Updating user data:', newUserData);

    // Update the state with the new user data
    setUserData(newUserData);

    // Hide the edit form
    setShowEditForm(false);
  };

  return (
    <div className="home-container">
      <h1>Welcome to My Home Page</h1>
      <p>Hello {userData.name} ({userData.email})!</p>
      <button onClick={() => setShowEditForm(true)}>Edit</button>
      {showEditForm && <EditUser userData={userData} onUpdate={handleUpdate} />}
    </div>
  );
  
}

export default Home;
