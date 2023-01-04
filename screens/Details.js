import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  View,
} from 'react-native';
import {getMovie} from '../services/services';

const placeholderImage = require('../assets/images/placeholder.jpg');
const height = Dimensions.get('screen').height;

const Details = ({route, navigation}) => {
  const movieId = route.params.movieId;
  const [movieDetail, setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(movieId).then(movieData => {
      setMovieDetail(movieData);
      setLoaded(true);
    });
  }, [movieId]);
  //passing movieId at the end prevents memory leak

  return (
    <React.Fragment>
      {loaded && (
        <ScrollView>
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              movieDetail.poster_path
                ? {
                    uri:
                      'https://image.tmdb.org/t/p/w500' +
                      movieDetail.poster_path,
                  }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
            {movieDetail.genres && (
              <View style={styles.genreContainer}>
                {movieDetail.genres.map(genre => {
                  return (
                    <Text style={styles.genre} key={genre.id}>
                      {genre.name}
                    </Text>
                  );
                })}
              </View>
            )}
          </View>
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height / 2,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    padding: 3,
  },
  genreContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
  },
});

export default Details;
