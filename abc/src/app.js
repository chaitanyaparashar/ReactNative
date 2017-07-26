import React, {Component} from 'react';
import {View  } from 'react-native';
import firebase from 'firebase';
import {Header,Button,Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBUdv67mRthtv0KAxpAnULptTLyrRh5lws',
    authDomain: 'authentication-a9526.firebaseapp.com',
    databaseURL: 'https://authentication-a9526.firebaseio.com',
    projectId: 'authentication-a9526',
    storageBucket: 'authentication-a9526.appspot.com',
    messagingSenderId: '1085903015653'
  });

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      this.setState({loggedIn: true});
    }else{
      this.setState({loggedIn:false});
    }
  });

  }

  renderContent(){
  switch (this.state.loggedIn){
    case true:
    return(
      <View style = {style.containerStyle}>
      <Button onPress={() => firebase.auth().signOut()}>
      LogOut
      </Button>
      </View>
    );
    case false:
    return <LoginForm />;
    default:
    return (
      <View style={style.spinnerStyle}>
      <Spinner size ="large" />
      </View>
  );
  }
  }


  render() {
    return (
      <View>
      <Header HeaderText = "Authentication" />
      {this.renderContent()}
      </View>
    );
  }

}
const style = {
    containerStyle: {
      flexDirection: 'row',
      marginTop:5,
    },
    spinnerStyle: {
      flex: 1,
      marginTop:240,
     justifyContent: 'center',
      alignItems:'center'
    }
};


export default App;
