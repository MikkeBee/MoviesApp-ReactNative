import axios from 'axios';

//
export const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=2747f1d06105b4371f4584259e58c498',
  );
  return resp.data.results;
  //resp.data.results[0] returns only the first result to help simplify the data
};
