import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import './Trending.css'

export default function Trending() {

    const [movieList,setMovieList] =useState ([]);
    useEffect (() => {
        axios
        .get(
            'https://api.themoviedb.org/3/trending/all/day?api_key=4257e6f146690bdd6c3422eba2abad6f'
        )
        .then((res)=> {
            setMovieList(res.data.results);
        })
        .catch(err=>{console.log(err)})
    },[])

    return (
        <div className='MoviesRowContaint'>
            <div className='originalsFilm'>
                <h1 className='heading'>Flyphim Trending</h1>
                <div className='MovieSlider'>
                    {movieList.slice(0,10).map((movie) => (
                        <div key={movie.id} className='movieItem'>
                            <img
                            src={'https://image.tmdb.org/t/p/w500/${"poster_path}'}
                            alt={movie.title}
                        />
                        <div className='movieName'>{movie.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}