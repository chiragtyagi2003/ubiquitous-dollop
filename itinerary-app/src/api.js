import axios from 'axios';

const API_URL = 'http://127.0.0.1:8080'; // Replace with your Flask backend URL

export const register = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const generateItinerary = async (budget, interests, duration, source) => {
  try {
    const response = await axios.post(`${API_URL}/generate-itinerary`, {
      budget: parseInt(budget),
      interests: interests.split(',').map(interest => interest.trim()),
      duration: parseInt(duration),
      source
    });
    return response.data.itinerary;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const generateItineraryWithDestination = async (budget, interests, duration, source, destination) => {
  try {
    const response = await axios.post(`${API_URL}/generate-itinerary-with-destination`, {
      budget: parseInt(budget),
      interests: interests.split(',').map(interest => interest.trim()),
      duration: parseInt(duration),
      source,
      destination
    });
    return response.data.itinerary;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};

export const getPlaces = async (location_name, type) => {
  try {
    const response = await axios.get(`${API_URL}/get-places`, {
      params: {
        location_name,
        type
      }
    });
    return response.data.results;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network error');
  }
};
