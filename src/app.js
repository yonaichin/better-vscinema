import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <MovieList />
      </div>
    );
  }
}

export default App;
