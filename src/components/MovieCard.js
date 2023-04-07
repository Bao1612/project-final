import React from 'react'

const API_IMG= 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({poster_path, name , release_date, overview}) => {
    return <div className='container'>
        <img src={API_IMG+poster_path} alt={name}/>
        <div>
            <h1>{name}</h1>
            <p>{release_date}</p>
            <p>{overview}</p>
        </div>
    </div>
}
export default MovieCard