import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50', /* Green */
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '12px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleRegister}>Register</button>
      <button style={buttonStyle} onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LandingPage;
