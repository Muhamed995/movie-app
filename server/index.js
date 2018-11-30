
const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');
const axios = require('axios');
const apiURL = 'https://api.themoviedb.org/3';
const apiKey ='api_key=6ffbcda4fe77b83f9f574673211662bf';
const url = require('url');

// Server

const app = express();
const port = 3001;

//Middleware

app.use(cors());
app.use(json());

function AxiosGet(url,res){
    axios.get(url).then(response =>{
        res.status(200).json(response.data);
    })
}

//Endpoint
app.get('/api/popular/movies', (req,res, next)=>{
    AxiosGet(`${apiURL}/movie/popular?${apiKey}`,res);
})

app.get('/api/search/movies', (req,res,next)=>{
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    AxiosGet(`${apiURL}/search/movie?${apiKey}&query=${query.query}&include_adult=false`,res);
})

app.get('/api/find/movie', (req,res,next)=>{
    var url_parts = url.parse(req.url, true);
    var movie_id = url_parts.query.movie_id;
    AxiosGet(`${apiURL}/movie/${movie_id}?${apiKey}`,res);
})


app.get('/api/popular/tv', (req,res, next)=>{
    AxiosGet(`${apiURL}/tv/popular?${apiKey}`,res);
})

app.get('/api/search/tv', (req,res,next)=>{
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    AxiosGet(`${apiURL}/search/tv?${apiKey}&query=${query.query}`,res);
})
 
app.get('/api/find/tv', (req,res,next)=>{
    var url_parts = url.parse(req.url, true);
    var series_id = url_parts.query.series_id;
    AxiosGet(`${apiURL}/tv/${series_id}?${apiKey}`,res);
})


console.log(apiURL, apiKey);

app.listen(port, ()=>{
    console.log(`Server is listening on  ${port}`);
})

