import React from 'react'

const GalleryCard = (props) => {
  return (
    <div className="card text-bg-dark mb-3" style={{width: "22rem"}}>
    <img style={{height:"200px", width:"350px"}} src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <p className="card-text">{props.title}</p>
        </div>
    </div>
  )
}

export default GalleryCard