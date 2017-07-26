import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='RAju' />
        <Greeting name='pholu' />
        <Greeting name='ramu' />
      </View>
    );
  }
}

AppRegistry.registerComponent('firstproject', () => LotsOfGreetings);
