import axios from 'axios';

// Extract API call logic
export const fetchApiData = async () => {
  const apiUrl = 'https://api.example.com/data';
  try {
    const {data} = await axios.get(apiUrl);
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error; // Re-throw the error to be handled by the component
  }
};

export const postAPIData = async (data) => {
  const apiUrl = 'https://api.example.com/data';
  try {
    const {data} = await axios.post(apiUrl, data);
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error; // Re-throw the error to be handled by the component
  }
};

export const deleteAPIData = async () => {
  const apiUrl = 'https://api.example.com/data';
  try {
    const {data} = await axios.delete(apiUrl);
    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error; // Re-throw the error to be handled by the component
  }
};