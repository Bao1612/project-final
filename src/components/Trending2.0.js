import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard'

function Trending() {

  const [movies, setMovie] = useState([])
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=4257e6f146690bdd6c3422eba2abad6f').then(Response=>{
      setMovie(Response.data.results)
    }).catch(err=>{console.log(err)})
  },[])

return <div className='flex pb-5 px-5 overflow-x-auto'>
  {movies.map((movie,index)=> {
        return <MovieCard key={index} {...movie} />
      })}
  </div>
}

export default Trending