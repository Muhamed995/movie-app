import React, { Component } from 'react';
import './SeriesHome.css';

// Components to be imported


import SeriesSearchBar from '../SeriesSearchBar/SeriesSearchBar.js';
import SeriesContainer from '../SeriesContainer/SeriesContainer.js';

class SeriesHome extends Component {
  render() {
    return (
      <div className='view-container'>
        <SeriesSearchBar />
        <SeriesContainer />
       
      </div>
    );
  }
}

export default SeriesHome;