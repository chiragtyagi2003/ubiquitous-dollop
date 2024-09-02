import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(https://i.pinimg.com/564x/b3/0a/7f/b30a7f15a07a1ccd7a7f98a6c40b95ca.jpg)', // Replace with your own high-resolution image URL
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    },
    card: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      maxWidth: '900px',
      padding: '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      border: '3px solid #FFA500', // Amber border
    },
    leftContent: {
      flex: 1,
      textAlign: 'left',
      paddingRight: '20px',
    },
    rightContent: {
      flex: 1,
      textAlign: 'right',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#333',
    },
    musafir: {
      color: '#FFA500', // Amber color
      fontStyle: 'italic', // Italicize "Musafir"
    },
    subheading: {
      fontSize: '20px',
      color: '#666',
      marginTop: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '18px',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '10px',
      boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
      transition: 'background-color 0.3s',
    },
    buttonIcon: {
      marginLeft: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.leftContent}>
          <h1 style={styles.heading}>
            Welcome to <span style={styles.musafir}>Musafir</span>
          </h1>
          <p style={styles.subheading}>Your own personalized travel itinerary generator</p>
        </div>
        <div style={styles.rightContent}>
          <button onClick={goToLogin} style={styles.button}>
            Login <span style={styles.buttonIcon}>→</span>
          </button>
          <button onClick={goToRegister} style={styles.button}>
            Register <span style={styles.buttonIcon}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
