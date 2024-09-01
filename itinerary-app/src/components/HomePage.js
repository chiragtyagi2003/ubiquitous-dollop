import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HomePage() {
  const navigate = useNavigate();

  const goToItineraryPage = () => {
    navigate('/create-itinerary');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Your Travel Planner</h1>
      <button onClick={goToItineraryPage} style={{ margin: '20px' }}>Create a Personalized Travel Itinerary</button>
      <ToastContainer />
    </div>
  );
}

export default HomePage;
