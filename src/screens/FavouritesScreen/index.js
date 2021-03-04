import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

// services
// import { getMovies } from './services';

// components
import MovieCard from '../../components/MovieCard';
import FavouritesHeader from './components/FavouritesHeader';
import useStore from '../../store';

const FavouritesScreen = () => {
  const { favourites } = useStore();
  console.log('favourites', favourites);
  return (
    <View style={styles.root}>
      {/*  header */}
      <FavouritesHeader />
      {/*  list */}
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          renderItem={({ item }) => <MovieCard movie={item} favourites={favourites} />}
        />
      ) : (
        <View style={styles.noFavouritesContainer}>
          <Text style={styles.noFavourites}>YOUR FAVOURITES</Text>
        </View>
      )}
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#223343',
    paddingBottom:100,
  },
  noFavouritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavourites: {
    color: 'white',
    fontSize:20,
  },
});