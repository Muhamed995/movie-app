import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './SearchResults.css';

export default class SearchResults extends Component{
  constructor(props){
    super(props);

    this.state= {
      searchList: []
    }
  }

  componentWillMount(){
    axios.get(`http://localhost:3001/api/search/movies?query=${this.props.match.params.name}`).then(response=> {
      this.setState({ searchList: response.data.results });
    });
  }

  render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const searchResults= this.state.searchList.map((movie, index)=> {
      
      return(
        <Link className="results-card" to={ `/movieShowcase/${movie.id}` }>
        <div key={ index } className=''>
          <img style={{ height: '75%', width: '100%' }} src={ imgURL + movie.poster_path } alt='movie poster'></img>
          <h4 className="movieTitles">{ movie.original_title }</h4>
        </div>
        </Link>
      )
    });

    return(
      <div className='view-container'>
        <h1>You searched for... { this.props.match.params.name }</h1>
          <Link to={`/`} className="fa fa-arrow-left" style={{color:"white"}}></Link>
        <div className='results-container'>
          { searchResults }
        </div>
      </div>
    )
  }
}