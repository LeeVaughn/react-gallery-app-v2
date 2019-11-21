// import packages
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import components
import apiKey from './config.js';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

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
          photoArray: response.data.photos.photo
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
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer data={ this.state.photoArray } /> } />
            <Route path="/surfing" render={ () => <PhotoContainer title='surfing' /> } />
            <Route path="/skiing" render={ () => <PhotoContainer title='skiing' /> } />
            <Route path="/golf" render={ () => <PhotoContainer title='golf' /> } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
