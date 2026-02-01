import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com/search/users?q';

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

export const advancedSearchUsers = async ({ username, location, minRepos, page = 1 }) => {
  // Start with the keyword (required by the GitHub Search API)
  let q = username.trim() || 'is:user';

  // Append location qualifier when the user provided one
  if (location && location.trim()) {
    q += ` location:${location.trim()}`;
  }

  // Append minimum-repos qualifier when the user provided one
  if (minRepos && Number(minRepos) > 0) {
    q += ` repos:>${Number(minRepos)}`;
  }

  try {
    const response = await githubAPI.get('/search/users', {
      params: {
        q,
        per_page: 10,   // 10 results per page – easy to paginate
        page,
      },
    });
    return response.data;   // { total_count, items: [...] }
  } catch (error) {
    throw error;
  }
};


export const searchUsers = async (query) => {
  try {
    const response = await githubAPI.get(`/search/users`, {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
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
    throw error;
  }
};

export default githubAPI;