import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// icons
import { MaterialIcons } from '@expo/vector-icons';

const MoviesHeader = ({ onChange, value, open, setOpen }) => {
  return (
    <View style={styles.root}>
      {open ? (
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search for movies..."
            style={styles.search}
            value={value}
            onChangeText={(value) => onChange(value)}
            autoFocus={true}
          />
          <View style={styles.cancel}>
            <MaterialIcons
              name="close"
              size={30}
              color="crimson"
              onPress={() => {
                setOpen(false);
                onChange('');
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.main}>
          <Text style={styles.text}>Popular</Text>
          <MaterialIcons name="search" size={30} color="coral" onPress={() => setOpen(true)} />
        </View>
      )}
    </View>
  );
};

export default MoviesHeader;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  main: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor:'white',
  },
  search: {
    flexGrow: 1,
    height: '100%',
    padding: 10,
    fontSize: 20,
  },
  cancel: {
    marginRight: 10,
  },
});