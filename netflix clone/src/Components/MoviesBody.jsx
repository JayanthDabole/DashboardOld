import React from 'react'
import requests from '../requests'
import Movies from './Movies'

const MoviesBody = () => {
  return (
    <div className="movies">  
        <h2>Movies</h2>
        <Movies title='Popular' fetchURL={requests.requestPopular}/>
        <Movies title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Movies title='Upcoming' fetchURL={requests.requestUpcoming}/>    
    </div>
  )
}

export default MoviesBody