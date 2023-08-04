import React from 'react'
import { tvdata } from './TVShowsData'
import GalleryCard from './GalleryCard'


const TVShows = () => {
  return (
    <div className='tv'>
       <h2>TV Shows</h2>
        <div className='gallery'>
        {
            tvdata.map((elem, index)=>{
                return(
                  <div>
                    <a href={elem.link} style={{textDecoration : "none", color:"black", textAlign:"center"}}><GalleryCard image={elem.image} title={elem.title} key={index} /></a>
                  </div>
                )
              })
        }
    </div>
    </div>
  )
}

export default TVShows