import React, { Component } from 'react';

import Router from './router.js';

import './App.css';

class App extends Component {
/*
  constructor(){
    super();
    this.state={
      moviesList:[]
    }
  }

  componentWillMount(){
    axios.get('http://localhost:3001/api/movies').then(response =>{
      console.log(response.data);
      this.setState({ moviesList:response.data.results })
    })
  }

  */
  render() {
    /*
    const imgURL = 'https://image.tmdb.org/t/p/original'
    const movies = this.state.moviesList.map((movie,index)=>{

    })
    */
    return (
      <div className="App">
        
       
        
        { Router }
      </div>
    );
  }
}

export default App;
