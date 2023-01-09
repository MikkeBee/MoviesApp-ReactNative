import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import Colors from '../themes/Colors';

const PlayButton = ({handlePress}) => {
  return (
    <Pressable onPress={() => handlePress()} style={styles.button}>
      <FontAwesomeIcon icon={faCirclePlay} size={40} color={Colors.primary} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 50,
    width: 40,
    backgroundColor: Colors.white,
  },
});

export default PlayButton;
