import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ExplorePlacesModal from './ExplorePlacesModal';
import ItineraryWithPlaces from './ItineraryWithPlaces';
import axios from 'axios';

const ItineraryDisplay = ({ itinerary }) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [resultsModalShow, setResultsModalShow] = useState(false);

  const handleExplorePlaces = (day) => {
    setSelectedDay(day);
    setModalShow(true);
  };

  const handleExplore = async (locationName, type) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8080/get-places`, {
        params: {
          location_name: locationName,
          type: type
        }
      });
      console.log('Places found:', response.data.results);
      setPlaceDetails(response.data.results);
      setResultsModalShow(true); // Show the results modal with the fetched data
    } catch (error) {
      console.error('Error fetching places:', error);
    }
  };

  if (!itinerary) {
    return <p>No itinerary available</p>;
  }

  const { budget, itinerary: itineraryDetails, places, notes } = itinerary;

  return (
    <div style={{ textAlign: 'left', marginTop: '20px', padding: '20px', borderRadius: '8px' }}>
      <h2>Your Travel Itinerary</h2>

      {/* Budget Breakdown */}
      {budget && budget.breakdown && (
        <>
          <h3>Budget Breakdown</h3>
          <ul>
            {Object.entries(budget.breakdown).map(([item, cost]) => (
              <li key={item}>
                <strong>{item.charAt(0).toUpperCase() + item.slice(1)}:</strong> {cost}
              </li>
            ))}
            <li><strong>Total:</strong> {budget.total}</li>
          </ul>
        </>
      )}

      {/* Places Covered */}
      {places && (
        <div>
          <h3>Places Covered</h3>
          <p>{places}</p> {/* Display the comma-separated list of places */}
        </div>
      )}

      {/* Daily Itinerary */}
      {itineraryDetails && itineraryDetails.days && (
        <>
          <h3>Daily Itinerary</h3>
          <div style={{ position: 'relative', paddingLeft: '20px', marginTop: '20px' }}>
            {itineraryDetails.days.map((day, index) => (
              <div key={day.day} style={{ display: 'flex', marginBottom: '40px', alignItems: 'center' }}>
                {/* Circle for Day */}
                <div style={{ position: 'relative', marginRight: '20px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }}
                  >
                    {`Day ${day.day}`}
                  </div>
                  {index !== itineraryDetails.days.length - 1 && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '40px',
                        left: '50%',
                        width: '2px',
                        height: '100%',
                        backgroundColor: '#007bff',
                      }}
                    />
                  )}
                </div>

                {/* Card for Day Details */}
                <div
                  style={{
                    flex: 1,
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                  }}
                >
                  <h4>{day.heading}</h4>
                  <p>{day.description}</p>
                  <ul>
                    {day.activities.map((activity, index) => (
                      <li key={index}>
                        <strong>{activity.name}</strong> - {activity.type} ({activity.cost})
                      </li>
                    ))}
                  </ul>
                  
                  {/* Explore Icon on the Top Right */}
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    size="lg"
                    style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', color: '#007bff' }}
                    onClick={() => handleExplorePlaces(day.day)}
                    title={`Explore famous places for Day ${day.day}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Modal for Exploring Places */}
      <ExplorePlacesModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        places={places ? places.split(', ') : []} // Convert comma-separated places to an array
        onExplore={handleExplore}
      />

      {/* Modal to Show Fetched Places */}
      {placeDetails && (
        <ItineraryWithPlaces
          show={resultsModalShow}
          onHide={() => setResultsModalShow(false)}
          placeDetails={placeDetails}
        />
      )}

      {/* Notes */}
      {notes && (
        <div>
          <h3>Notes</h3>
          <p>{notes}</p>
        </div>
      )}
    </div>
  );
};

export default ItineraryDisplay;
