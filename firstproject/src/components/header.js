//import libraries
import React from 'react';
import {Text,View} from 'react-native';


//make a Component
const Header = (props) => {
const {textStyle,viewStyle} = styles;

return (
<View style = {viewStyle}>
    <Text style ={textStyle}>{props.HeaderText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    paddingTop:15,
    //shadowColor: '#000',//for ios
    //shadowOffset: { width: 0, height: 2},// for ios
    //shadowOpacity: 0.2,//for ios
    elevation:4,//for android
    position:'relative'//for android
  },
  textStyle: {
    fontSize: 20
  }
};

//make the Component available to other parts of app
export default Header;
