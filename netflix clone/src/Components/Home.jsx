import React from 'react'
import TVShows from './TV Shows'
import MoviesBody from './MoviesBody'
import Slides from './Slides'

const Home = () => {
  return (
    <div className="home">
        {/* <Slides/> */}
        <MoviesBody/>
        <TVShows/>
    </div>
  )
}

export default Home