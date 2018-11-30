import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import Components to be rendered here
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults.js';
import MovieShowcase from './components/MovieShowcase/MovieShowcase';
import SeriesShowcase from './components/SeriesShowcase/SeriesShowcase';
import SeriesSearchResults from './components/SeriesSearchResults/SeriesSearchResults';
import SeriesHome from './components/SeriesHome/SeriesHome';

export default(
  <BrowserRouter>
    <div>
      <Route component= { Home } exact path='/' />
      <Route component={ SearchResults } path= '/search/movies/:name' />
      <Route component={ MovieShowcase } path= '/movieShowcase/:id' />
      <Route component={ SeriesHome} path= '/tv'/>
      <Route component={SeriesSearchResults} path='/search/tv/:name'/>
      <Route component={SeriesShowcase} path='/seriesShowcase/:id'/>
    </div>
  </BrowserRouter>
)