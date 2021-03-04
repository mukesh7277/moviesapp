import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavouritesHeader = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Favourites</Text>
    </View>
  );
};

export default FavouritesHeader;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    marginBottom: 15,
    backgroundColor:'#223343'
  },
  text: {
    fontSize: 40,
    color:'white'
  },
});