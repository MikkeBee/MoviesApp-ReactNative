import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=2747f1d06105b4371f4584259e58c498';

export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return resp.data.results;
  //resp.data.results[0] returns only the first result to help simplify the data
};

export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return resp.data.results;
  //resp.data.results[0] returns only the first result to help simplify the data
};

export const getPopularTV = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  return resp.data.results;
  //resp.data.results[0] returns only the first result to help simplify the data
};
