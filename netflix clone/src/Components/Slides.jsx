import React from 'react'
import dark from "../images/series/dark.jpg"
import mnh from "../images/series/Money Heist.jpg"
import wit from "../images/series/witcher.jpg"



const Slides = () => {
  return (
    
    <div className="rootContainer" style={{maxHeight:"300px"}}>
       <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true" style={{height:"400px"}}>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={dark} class="d-block w-50" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={wit} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={mnh} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    </div>
    
   
  )
}

export default Slides