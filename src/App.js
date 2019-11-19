import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

// const App = () => {
class App extends Component {
  constructor() {
    super();
    this.state = {
      photoArray: []
    };
  }

  componentDidMount() {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beach&safe_search=1&in_gallery=&per_page=24&format=json&nojsoncallback=1`;
    axios.get(url)
      .then(response => {
        // handle success
        this.setState({
          photoArray: response.data.photos
        });
      })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    })
    .finally(function () {
      // always executed
    });
    // fetch(url)
    //   .then(response => response.json())
    //   .then(responseData => {
    //     this.setState({ photoArray: responseData.photos });
    //   })
    //   .catch(error => {
    //     console.log('Error fetching and parsing data', error);
    //   });
  }

  render() {
    console.log(this.state.photoArray);
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
