import React, { useState } from 'react';
import backgroundImage from '../Resources/loginImage.jpg'; // Import the image

function Login() {
  

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`, // Use the URL function
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <style>
        {`
          input::placeholder {
            color: grey; /* Set the placeholder color here */
          }
        `}
      </style>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value to make it more or less dim
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          border: '1px solid #38B2AC',
          padding: '20px',
          width: '300px',
          height: '450px',
          textAlign: 'center',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'white',
          zIndex: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow for a better appearance
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#38B2AC' }}>Login</h2>
        <form className="login-form" action="POST">
          <input
            type="email"
            placeholder="Email"
            style={{
              marginBottom: '10px',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '100%',
              backgroundColor: 'white', // Set background color to white
              color: 'black', // Set text color to black
            }}
            
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              marginBottom: '10px',
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '100%',
              backgroundColor: 'white', // Set background color to white
              color: 'black', // Set text color to black
            }}
            
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#38B2AC',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: '20px', color: 'grey' }}>
          Don't have an Account?{' '}
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#38B2AC',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '14px',
              margin: '0',
              padding: '0',
            }}
          >
           Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
