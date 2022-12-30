import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return <TouchableOpacity style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
  },
});

export default Card;
