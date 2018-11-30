import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SeriesSearchBar.css';


export default class SeriesSearchBar extends Component{
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
    axios.get(`http://localhost:3001/api/search/tv/${this.state.searchVal}`)
      .then(response=> {
        this.setState({ searchList: response.data.results });
      });
  }

  render(){
    return(
      <div>
        

      <div className='search-landing'>
      
      <div className="buttons">
      
      
        <Link to={`/`} className="showBtn">Movie</Link>
        </div>
        
        

        <h1 id='naslov'>Find Your Tv Series</h1>

        <div className='searchbar-container'>
          <div className='search-icon'>
          </div>

          <input className='searchbar' type='text' placeholder='Search tv shows...' onChange={ (e)=> this.handleSearchInput(e.target.value) }></input>

          <Link to={ `/search/tv/${this.state.searchVal}` }>
            <button className='search-btn' onClick={ ()=> this.submitSearch() }
              onKeyPress= { (e)=> {
                if(e.charCode === 13){
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