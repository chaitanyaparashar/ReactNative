import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 200, height: 50, backgroundColor: 'orange'}} />
        <View style={{width: 200, height: 50, backgroundColor: 'white'}} />
        <View style={{width: 200, height: 50, backgroundColor: 'green'}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('firstproject', () => FixedDimensionsBasics);
