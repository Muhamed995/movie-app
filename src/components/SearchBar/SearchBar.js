import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SerieButton from '../SerieButton/SerieButton';
import './SearchBar.css';


export default class SearchBar extends Component{
  constructor(){
    super();

    this.state= {
      searchVal: '',
      searchList: []
    }
    this.handleSearchInput= this.handleSearchInput.bind(this);
    this.submitSearch= this.submitSearch.bind(this);
  }

  handleSearchInput(input){
    this.setState({ searchVal: input });
  }

  submitSearch(){
    axios.get(`http://localhost:3001/api/search/movies/${this.state.searchVal}`)
      .then(response=> {
        this.setState({ searchList: response.data.results });
      });
  }

  render(){
    return(
      <div>
        

      <div className='search-landing'>
      
      <div className="buttons">
      
       <SerieButton/>
        
      </div>
        
        

        <h1 id='naslov'>Find Your Movie</h1>

        <div className='searchbar-container'>
          <div className='search-icon'>
          </div>

          <input className='searchbar' type='text' placeholder='Search films...' onChange={ (e)=> this.handleSearchInput(e.target.value) }></input>

          <Link to={ `/search/movies/${this.state.searchVal}` }>
            <button className='search-btn'  onClick={ ()=> this.submitSearch() }
              onKeyPress= { (e)=> {
                if(e.charCode === 13){
                  console.log('enter is pressed')
                  this.submitSearch();
                }
              }
    }>SEARCH</button>
          </Link>
        </div>
      </div>
      </div>
    )
  }
}