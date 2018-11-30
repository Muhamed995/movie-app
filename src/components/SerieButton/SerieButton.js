import React from 'react';
import './SerieButton.css';
import { Link } from 'react-router-dom';

const SerieButton =()=>{

    return(
        <div>
            <Link to={`/tv`} className="showBtn">Tv Show</Link>
           
        </div>

    );
}

export default SerieButton;