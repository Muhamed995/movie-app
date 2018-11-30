import React, { Component } from 'react';
import axios from 'axios';
import './MoviesContainer.css';
import { Link } from 'react-router-dom';



export default class MoviesContainer extends Component{
  constructor(props){
    super(props);

    this.state= {
      moviesList: []
    }
  }

  componentWillMount(){
    axios.get('http://localhost:3001/api/popular/movies').then(response=> {
      console.log(response.data.results);
      this.setState({ moviesList: response.data.results });
    });
  }

  render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const movies= this.state.moviesList.map((movie, index)=> {
      return(
        <Link className="movie-card" to={ `/movieShowcase/${movie.id}` }>

        <div key={ index } className=''>
          <img style={{ height: '85%', width: '100%', marginRight:'10px' }} src={ imgURL + movie.poster_path } alt='movie poster'></img>
          <h3 className='title'>{ movie.original_title }</h3>
          
        </div>
        </Link>
      )
    });

    return(
      <div className='movies-container-main'>
        { movies }
      </div>
    )
  }
}