import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Button, TouchableHighlight} from 'react-native';
import api from './api.js';

export default class App extends React.Component {

    _onPressButtonRead() {
    fetch('http://jsonplaceholder.typicode.com/posts/1', {method: 'GET'})
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    })
    .done();
  }

  _onPressButtonCreate() {
    fetch('http://jsonplaceholder.typicode.com/posts', {method: 'POST'},
    {data: {title: 'foo', body: 'bar',userId: 1}})
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    })
    .done();
  }

    _onPressButtonUpdate() {
    fetch('http://jsonplaceholder.typicode.com/posts/1', {method: 'PUT'},
    {data: {id: 1, title: 'foo', body: 'bar', userId: 1}})
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    })
    .done();
  }

  _onPressButtonDelete() {
    fetch('http://jsonplaceholder.typicode.com/posts/1', {method: 'DELETE'})
    .then((response) => response.json())
    .then((responseData) => {
        console.log(responseData);
    })
    .done();
  }


  constructor(props){
    super(props);
    this.state = {
      rovers: [],
      roverName: ''
    }
  }

  componentWillMount(){
    api.getRovers().then((res) => {
      this.setState({
        rovers: res.rovers,
        roverName: res.rovers[0].name
      })
    });
  }

  render() {
    let pic = {
      uri: 'https://image.ibb.co/c4mguv/aa.jpg'
    };
    return (
      <View style={styles.container}> 
        <Text>Yogi Muhammad Taufik</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Refactory Batch 5</Text>
        <TouchableHighlight style={styles.button} onPress={this._onPressButtonRead}>
          <Text>Show Posts</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this._onPressButtonCreate}>
          <Text>Add Post</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this._onPressButtonUpdate}>
        <Text>Edit Post</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this._onPressButtonDelete}>
          <Text>Delete Post</Text>
        </TouchableHighlight>
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
