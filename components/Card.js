import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/images/placeholder.jpg');

const propTypes = {
  item: PropTypes.object,
};
class Card extends React.PureComponent {
  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {movieId: item.id})}
        style={styles.container}>
        <Image
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 150,
    marginBottom: 12,
  },
  image: {
    height: 150,
    width: 100,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    top: 30,
    textAlign: 'center',
  },
});

Card.propTypes = propTypes;

export default Card;
