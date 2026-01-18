// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Step 5: Use useContext hook to access userData from UserContext
  // This directly accesses the context value without needing props
  const userData = useContext(UserContext);

  return (
    <div style={{
      padding: '20px',
      margin: '20px',
      border: '2px solid #3498db',
      borderRadius: '8px',
      backgroundColor: '#ecf0f1',
      maxWidth: '400px'
    }}>
      <h2 style={{ color: '#2c3e50', marginTop: '0' }}>User Details</h2>
      <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: '1.1em', margin: '10px 0' }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;