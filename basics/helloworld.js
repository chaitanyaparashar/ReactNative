import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class react extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('firstproject', () => react);
