import React, {Component} from 'react';
import axios from 'axios';
import './SeriesShowcase.css';
import { Link } from 'react-router-dom';



export default class SeriesShowcase extends Component {
    constructor(props){
        super(props);
        this.state={
            serie:''
        }
    }
    componentWillMount(){
        axios.get(`http://localhost:3001/api/find/tv?series_id=${this.props.match.params.id}`).then(response=>{
           this.setState({serie:response.data});
            console.log(response);
            console.log("asdasd");
        });
    }

render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';

    return(
        <div className="results">
        <div className="resultsContainer">
        <Link to={`/tv`} className="fa fa-arrow-left back" style={{color:"white"}}></Link>
           <div className='result-cards'>
          <img style={{ height: '76%', width: '95%', marginTop:'10px' }} src={ imgURL + this.state.serie.poster_path } alt='movie poster' className="poster"></img>
          <h4 className="movieTitles">{ this.state.serie.name }</h4>
          <p className="movieOverviews">{this.state.serie.overview}</p>
        </div>
        </div>
        </div>
    )
}

}
