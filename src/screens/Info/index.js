import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Linking } from 'react-native';

const Info = () => {
  return (
      <View>
    <View style={styles.root}>
      <Text style={styles.text}>Info</Text>
    </View>
    <SafeAreaView style={styles.info}>
        <Text>Name:Mukesh Das</Text>
          <Text style={{color:'blue'}}
          onPress={()=> Linking.openURL('https://github.com/mukesh7277')}>Github: My profile</Text>
        
        <Text>Email:</Text>
        <Text>LinkedIn:</Text>
    </SafeAreaView>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  root: {
    padding: 10,
    marginBottom: 15,
    backgroundColor:'#223343',
  },
  text: {
    fontSize: 40,
    color:'white'
  },
  info:{
      marginLeft:20,
      
  },
});