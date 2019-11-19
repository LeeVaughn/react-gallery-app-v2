//import packages
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';

// import components
import apiKey from './config.js';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photoArray: []
    };
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=beach&safe_search=1&in_gallery=&per_page=24&format=json&nojsoncallback=1`)
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
  }

  render() {
    console.log(this.state.photoArray);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Route exact path="/" component={ PhotoContainer } />
          <Route path="/surfing" component={ PhotoContainer } />
          <Route path="/skiing" component={ PhotoContainer } />
          <Route path="/golf" component={ PhotoContainer } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
