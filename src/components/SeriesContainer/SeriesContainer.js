import React, { Component } from 'react';
import axios from 'axios';
import './SeriesContainer.css';
import { Link } from 'react-router-dom';



export default class seriesesContainer extends Component{
  constructor(props){
    super(props);

    this.state= {
      seriesList: []
    }
  }

  componentWillMount(){
    axios.get('http://localhost:3001/api/popular/tv').then(response=> {
      console.log(response.data.results);
      this.setState({ seriesList: response.data.results });
    });
  }

  render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';
    const serieses= this.state.seriesList.map((series, index)=> {
      return(
        <Link  to={ `/seriesShowcase/${series.id}` } className="series-card">
        <div key={ index } className=''>
          <img style={{ height: '85%', width: '100%', marginRight:'10px' }} src={ imgURL + series.poster_path } alt='series poster'></img>
          <h3 className='titleS'>{ series.name }</h3>
          
        </div>
        </Link>
      )
    });

    return(
      <div className='serieses-container-main'>
        { serieses }
      </div>
    )
  }
}