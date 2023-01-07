import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-fontawesome';

const Navbar = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.navView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name={faChevronLeft}
            size={50}
            color={'black'}
            style={styles.iconView}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navView: {
    margin: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navbar;
