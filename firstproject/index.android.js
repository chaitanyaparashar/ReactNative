//import a library to help create a omponent
import React, { Component } from 'react';
import { AppRegistry, Text , View} from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'
//Create a Component
const App = () => (
  <View style = {{flex: 1}} >
  <Header HeaderText ={'Albums!'}/>
  <AlbumList />
  </View>
);

//render it to the device
AppRegistry.registerComponent('firstproject',() => App);
