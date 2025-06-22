import axios from 'axios';


const register = async (userData) => {
  try {
    const response = await axios.post('https://your-api-endpoint.com/register', userData);
    
    if (response.data) {
      return response.data;
    }

    throw new Error('No response data from server');

  } catch (error) {
    throw new Error(error.response?.data?.message || error.message || 'Registration failed');
  }
};

export const authService = {
  register
}