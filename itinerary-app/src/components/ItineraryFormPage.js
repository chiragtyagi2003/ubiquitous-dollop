import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { generateItinerary, generateItineraryWithDestination } from '../api';
import ItineraryDisplay from './ItineraryDisplay';
import 'react-toastify/dist/ReactToastify.css';

function ItineraryFormPage() {
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState('');
  const [duration, setDuration] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);

  const handleGenerateItinerary = async () => {
    if (!budget || !interests || !duration || !source) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      let itineraryData;

      if (destination) {
        itineraryData = await generateItineraryWithDestination(budget, interests, duration, source, destination);
      } else {
        itineraryData = await generateItinerary(budget, interests, duration, source);
      }

      setItinerary(itineraryData);
      toast.success('Itinerary generated successfully!');
    } catch (error) {
      console.error('Error generating itinerary:', error);
      toast.error('Failed to generate itinerary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', marginTop: '50px' }}>
      {/* Left Panel - Form */}
      <div style={{ flex: 1, padding: '20px', borderRight: '1px solid #ddd' }}>
        <h2>Create Your Travel Itinerary</h2>
        <div style={{ marginTop: '20px' }}>
          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            style={{ margin: '10px', width: '100%' }}
          />
          <br />
          <input
            type="text"
            placeholder="Interests (comma separated)"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            style={{ margin: '10px', width: '100%' }}
          />
          <br />
          <input
            type="number"
            placeholder="Duration (days)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            style={{ margin: '10px', width: '100%' }}
          />
          <br />
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={{ margin: '10px', width: '100%' }}
          />
          <br />
          <input
            type="text"
            placeholder="Destination (optional)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={{ margin: '10px', width: '100%' }}
          />
          <br />
          <button onClick={handleGenerateItinerary} style={{ margin: '20px' }} disabled={loading}>
            {loading ? 'Generating...' : 'Generate Itinerary'}
          </button>
        </div>
        <ToastContainer />
      </div>

      {/* Right Panel - Itinerary Display */}
      <div style={{ flex: 2, padding: '20px', maxHeight: '80vh', overflowY: 'auto' }}>
        {itinerary ? (
          <ItineraryDisplay itinerary={itinerary} />
        ) : (
          <p>Please fill out the form and generate an itinerary.</p>
        )}
      </div>
    </div>
  );
}

export default ItineraryFormPage;
