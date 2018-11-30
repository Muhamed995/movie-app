import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './SeriesSearchResults.css';

export default class SeriesSearchResults extends Component{
  constructor(props){
    super(props);

    this.state= {
      searchList: []
    }
  }

  componentWillMount(){
    axios.get(`http://localhost:3001/api/search/tv?query=${this.props.match.params.name}`).then(response=> {
      this.setState({ searchList: response.data.results });
    });
  }

  render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const searchResults= this.state.searchList.map((serie, index)=> {
      
      return(
        <Link className="results-card" to={ `/seriesShowcase/${serie.id}` }>
        <div key={ index } className=''>
          <img style={{ height: '75%', width: '100%' }} src={ imgURL + serie.poster_path } alt='movie poster'></img>
          <h4 className="movieTitles">{ serie.name }</h4>
        </div>
        </Link>
      )
    });

    return(
      <div className='view-container'>
        <h1>You searched for... { this.props.match.params.name }</h1>
          <Link to={`/tv`} className="fa fa-arrow-left" style={{color:"white"}}></Link>
        <div className='results-container'>
          { searchResults }
        </div>
      </div>
    )
  }
}