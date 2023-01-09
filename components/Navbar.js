import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const defaultProps = {
  main: false,
};

const Navbar = ({navigation, main}) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.mainNav}>
          <Image
            style={styles.logo}
            source={require('../assets/images/randomlogo.png')}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faChevronLeft} size={40} color={'white'} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  mainNav: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
});

Navbar.defaultProps = defaultProps;

export default Navbar;
