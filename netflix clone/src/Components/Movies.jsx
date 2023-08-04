import React from 'react'
import GalleryCard from './GalleryCard'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "../axios"

const base_url = "https://image.tmdb.org/t/p/original/";

const Movies = (props) => {
  let { title , fetchURL } = props
  let [ movies, setMovies] = useState([])
  let fetchData = () => {
    axios.get(fetchURL)
    .then(res => {setMovies(res.data.results)})
 }
 console.log(movies);

  useEffect(fetchData , [fetchURL]);
  
  return (
   <div>
    <h2>{title}</h2>
     <div className='gallery'>
    {
       movies.map((elem, index)=>{
            return(
            <>              
              <div>
              <a href='google.com' style={{textDecoration : "none", color:"black", textAlign:"center"}}><GalleryCard image={`${base_url}${elem.backdrop_path}`} title={elem.original_title} key={index}/></a>
              </div>
            </>
            )
          })
    }
    </div>
   </div>
  )
}

export default Movies