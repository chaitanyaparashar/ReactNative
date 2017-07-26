import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.abc}>just bigblue</Text>
        <Text style={[styles.abc, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.abc]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  abc: {
    color: 'blue',
    fontWeight: 'normal',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('firstproject', () => LotsOfStyles);
