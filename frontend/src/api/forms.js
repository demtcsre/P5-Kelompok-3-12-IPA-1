import axios from "axios";

// Set the base URL for the backend API
const BASE_URL = "http://localhost:5000"; // Change to your deployed API URL

// Fetch all forms
export const fetchForms = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/forms`);
    return response.data;
  } catch (error) {
    console.error("Error fetching forms:", error);
    throw error;
  }
};

// Submit a new form
export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/forms`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};