import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}> 
        <Text>Kuda Zebra</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
