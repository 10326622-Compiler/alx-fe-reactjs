import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

// Get API key from environment variables (optional)
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create axios instance with default configuration
const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    // Add authorization header if API key is provided
    ...(API_KEY && { 'Authorization': `token ${API_KEY}` })
  }
});

/**
 * Search for GitHub users
 * @param {string} query - Search query (username)
 * @returns {Promise} - Axios promise with user search results
 */
export const searchUsers = async (query) => {
  try {
    const response = await githubAPI.get(`/search/users`, {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};

/**
 * Fetch a single GitHub user by username.
 * Endpoint: https://api.github.com/users/{username}
 * @param {string} username - GitHub username to look up
 * @returns {Promise<Object>} - Resolves with the user object from the API
 * @throws {Error} - Rejects when the request fails (e.g. 404 for unknown users)
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Get detailed information about a specific user
 * @param {string} username - GitHub username
 * @returns {Promise} - Axios promise with user data
 */
export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

/**
 * Get user's repositories
 * @param {string} username - GitHub username
 * @returns {Promise} - Axios promise with repositories data
 */
export const getUserRepositories = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 10
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};

export default githubAPI;