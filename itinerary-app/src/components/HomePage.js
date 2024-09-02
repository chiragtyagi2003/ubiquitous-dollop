import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const navigate = useNavigate();

  const goToItineraryPage = () => {
    navigate('/create-itinerary');
  };

  const handleLogout = () => {
    // Implement logout functionality
    alert('Logout successful!');
    navigate('/login'); // Redirect to login page
  };

  
  const handleProfile = () => {
    navigate('/profile'); 
  };

  const styles = {
    body: {
      margin: 0,  // Reset default margin
      padding: 0, // Reset default padding
      boxSizing: 'border-box',
    },
    container: {
      textAlign: 'center',
      padding: '20px',
      backgroundImage: 'url(https://i.pinimg.com/originals/31/41/6f/31416f0c6f763c947d08e6406c959cb7.gif)',
      backgroundPosition: 'center',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      color: '#fff',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    navButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      transition: 'color 0.3s',
    },
    navButtonIcon: {
      marginRight: '8px',
    },
    header: {
      fontSize: '62px', // Slightly larger font size
      marginTop: '25px',
      marginBottom: '20px',
      color: '#fff', // White color
      textShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)', // Deeper shadow for a more pronounced effect
      backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5))', // Subtle gradient
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'white', // Make the text transparent to show the gradient
      animation: 'glow 1.5s ease-in-out infinite alternate', // Add a glow animation
    },
    '@keyframes glow': {
      '0%': {
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.5)',
      },
      '100%': {
        textShadow: '0 0 20px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.7)',
      },
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
    },
    button: {
      padding: '15px 30px',
      fontSize: '18px',
      color: '#fff',
      backgroundColor: '#28a745',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '10px',
      boxShadow: '0 5px 15px rgba(40, 167, 69, 0.3)',
      transition: 'background-color 0.3s',
    },
    section: {
      padding: '50px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
      backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)', // Gradient for gloss effect
      color: '#333',
      borderRadius: '15px',
      marginBottom: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)', // Outer shadow
      border: '1px solid rgba(255, 255, 255, 0.3)', // Soft border to enhance the gloss
      position: 'relative', // To position the pseudo-element
      overflow: 'hidden', // Hide the pseudo-element overflow
    },
    sectionHeader: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    quote: {
      fontSize: '24px',
      fontStyle: 'italic',
      margin: '30px 0',
      color: '#555',
    },
    experienceSection: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginBottom: '40px',
    },
    experienceCard: {
      flexBasis: '30%',
      margin: '10px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(94, 110, 212, 0.8)',
    },
    image: {
      width: '100%',
      height: '280px',
      borderRadius: '3px',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    testimonialSection: {
      backgroundColor: '#f8f8f8',
      padding: '50px 20px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    },
    testimonialCard: {
      maxWidth: '500px',
      margin: '0 auto',
      textAlign: 'left',
    },
    testimonialText: {
      fontSize: '18px',
      marginBottom: '20px',
      color: '#555',
    },
    testimonialAuthor: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <div style={styles.body}>
      <nav style={styles.navbar}>
        <button 
          onClick={() => navigate('/home')} 
          style={styles.navButton}
        >
          <FontAwesomeIcon icon={faHome} style={styles.navButtonIcon} />
          Home
        </button>
        <button 
          onClick={handleProfile} 
          style={styles.navButton}
        >
          <FontAwesomeIcon icon={faUser} style={styles.navButtonIcon} />
          Profile
        </button>
        <button 
          onClick={handleLogout} 
          style={styles.navButton}
        >
          <FontAwesomeIcon icon={faSignOutAlt} style={styles.navButtonIcon} />
          Logout
        </button>
      </nav>

      <div style={styles.container}>
        <h1 style={styles.header}>Musafir - <i>Har Safar m Apka Humsafar</i></h1>
        <p style={styles.quote}>"Travel is the only thing you buy that makes you richer."</p>

        <div style={styles.buttonContainer}>
          <button onClick={goToItineraryPage} style={styles.button}>
            Create a Personalized Travel Itinerary
          </button>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionHeader}>What You Can Experience</h2>
          <div style={styles.experienceSection}>
            <div style={styles.experienceCard}>
              <img src="https://i.pinimg.com/564x/b3/b5/c4/b3b5c4075cf4efbe55938cc0db655752.jpg" alt="Adventure" style={styles.image} />
              <h3>Adventure Awaits</h3>
              <p>Experience the thrill of adventure with custom itineraries tailored to your need for excitement.</p>
            </div>
            <div style={styles.experienceCard}>
              <img src="https://i.pinimg.com/564x/c4/17/11/c41711124b4fa243a7bd64d09e773fe5.jpg" alt="Relaxation" style={styles.image} />
              <h3>Relax and Unwind</h3>
              <p>Find peace and tranquility with travel plans that offer serene and relaxing experiences.</p>
            </div>
            <div style={styles.experienceCard}>
              <img src="https://i.pinimg.com/564x/e9/e8/2d/e9e82ddbaff121f4616d5ebb7efbdaeb.jpg" alt="Culture" style={styles.image} />
              <h3>Cultural Immersion</h3>
              <p>Immerse yourself in the culture of your destinations, with itineraries that focus on heritage and local experiences.</p>
            </div>
          </div>
        </div>

        <div style={styles.testimonialSection}>
          <h2 style={styles.sectionHeader}>What Our Travelers Say</h2>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>
              "Musafir planned the perfect trip for my family. From the cultural sites to the best restaurants, every detail was thought out. We
              can't wait for our next adventure!"
            </p>
            <p style={styles.testimonialAuthor}>- A Satisfied Traveler</p>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
}

export default HomePage;
