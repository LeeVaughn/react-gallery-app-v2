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
      photoArray: [],
      title: '',
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch(query = "dogs surfing") {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&in_gallery=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      // handle success
      this.setState({
        photoArray: response.data.photos.photo,
        title: query,
        loading: false
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
          <SearchForm performSearch={ this.performSearch.bind(this) } />
          <Nav performSearch={ this.performSearch.bind(this) } />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer title={ this.state.title } data={ this.state.photoArray } /> } />
            <Route path="/surfing" render={ () => <PhotoContainer title='surfing' data={ this.state.photoArray } /> } />
            <Route path="/skiing" render={ () => <PhotoContainer title='skiing' data={ this.state.photoArray } /> } />
            <Route path="/skateboarding" render={ () => <PhotoContainer title='skateboarding' data={ this.state.photoArray } /> } />
            <Route exact path="/search/:query" render={ () => <PhotoContainer title={ this.state.title } data={ this.state.photoArray } /> } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
