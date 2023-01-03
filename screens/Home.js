/* eslint-disable react-native/no-inline-styles */
import {pop} from 'core-js/core/array';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
  getFamilyMovies,
  getDocumentaries,
} from '../services/services';

const dimensions = Dimensions.get('screen');

const Home = () => {
  console.log(dimensions);
  const [upcomingMovies, setMovieImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaries, setDocumentaries] = useState();
  const [popularTV, setPopularTV] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTV(),
      getFamilyMovies(),
      getDocumentaries(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTVData,
          familyMoviesData,
          documentariesData,
        ]) => {
          const movieImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            movieImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });
          setMovieImages(movieImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTV(popularTVData);
          setFamilyMovies(familyMoviesData);
          setDocumentaries(documentariesData);
        },
      )
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);
  // Old useEffect method, thought it would be good to still look at
  // getUpcomingMovies()
  //   .then(movies => {

  //   .catch(err => {
  //     setError(err);
  //   });
  // getPopularMovies()
  //   .then(movies => {
  //     setPopularMovies(movies);
  //   })
  //   .catch(err => {
  //     setError(err);
  //   });
  // getPopularTV()
  //   .then(movies => {
  //     setPopularTV(movies);
  //   })
  //   .catch(err => {
  //     setError(err);
  //   });
  // getFamilyMovies()
  //   .then(movies => {
  //     setFamilyMovies(movies);
  //   })
  //   .catch(err => {
  //     setError(err);
  //   });
  // getDocumentaries()
  //   .then(movies => {
  //     setDocumentaries(movies);
  //   })
  //   .catch(err => {
  //     setError(err);
  //   });

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          {upcomingMovies && (
            <View style={styles.sliderContainer}>
              <SliderBox
                images={upcomingMovies}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
              />
            </View>
          )}
          {popularMovies && (
            <View style={styles.viewCheck}>
              <List title="Popular Movies" content={popularMovies} />
            </View>
          )}
          {popularTV && (
            <View style={styles.viewCheck}>
              <List title="Popular TV Shows" content={popularTV} />
            </View>
          )}
          {familyMovies && (
            <View style={styles.viewCheck}>
              <List title="Family Movies" content={familyMovies} />
            </View>
          )}
          {documentaries && (
            <View style={styles.viewCheck}>
              <List title="Documentaries" content={documentaries} />
            </View>
          )}
        </ScrollView>
      )}

      {!loaded && <ActivityIndicator size="large" />}
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
