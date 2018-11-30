import React, {Component} from 'react';
import axios from 'axios';
import './MovieShowcase.css';
import { Link } from 'react-router-dom';




export default class MovieShowcase extends Component {
    constructor(props){
        super(props);
        this.state={
            movie:''
        }
    }
    componentWillMount(){
        axios.get(`http://localhost:3001/api/find/movie?movie_id=${this.props.match.params.id}`).then(response=>{
           this.setState({movie:response.data});
            console.log(response);
            console.log("asdasd");
        });
    }

render(){
    const imgURL= 'http://image.tmdb.org/t/p/original';

    return(
        <div className="result">
        <div className="resultContainer">
        <Link to={`/`} className="fa fa-arrow-left back" style={{color:"white"}}></Link>

           <div className='result-card'>
          <img style={{ height: '78%', width: '95%', marginTop:'10px' }} src={ imgURL + this.state.movie.poster_path } alt='movie poster'></img>
          <h4 className="movieTitle">{ this.state.movie.original_title }</h4>
          <p className="movieOverview">{this.state.movie.overview}</p>
        </div>
        </div>
        </div>
    )
}

}
