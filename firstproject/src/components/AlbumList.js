import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
  state = { albums:[] };
componentWillMount() {

  axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  .then(response => this.setState({albums:response.data})).catch((error) => {
         console.error(error);
     });
}

renderAlbums(){
  return  this.state.albums.map(albumon =>
    //yhan album prop ka naam b hai aur array ka b
    <AlbumDetail key = {albumon.title} album = {albumon} />

  );
}

render(){
  console.log(this.state);
   return (
     <ScrollView>
       {this.renderAlbums()}
     </ScrollView>
   );
  }
}
export default AlbumList;
