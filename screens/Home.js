/* eslint-disable react-native/no-inline-styles */
import {pop} from 'core-js/core/array';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text, FlatList} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import {getPopularMovies, getUpcomingMovies} from '../services/services';

const dimensions = Dimensions.get('screen');

const Home = () => {
  console.log(dimensions);
  const [movieImages, setMovieImages] = useState([]);
  const [popularMovies, setPopularMovies] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const movieImagesArray = [];
        movies.forEach(movie => {
          movieImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMovieImages(movieImagesArray);
      })
      .catch(err => {
        setError(err);
      });
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <React.Fragment>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={movieImages}
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimensions.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={styles.viewCheck}>
        <List title="Popular Movies" content={popularMovies} />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewCheck: {
    flex: 1,
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {},
});

export default Home;
