
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({actualData}) => {


  return (
    <div className='card'>
      <Link style={{textDecoration:'none'}} to={`/movie/${actualData.id}`}>
      <div className="cardImage">
        <img src={`https://image.tmdb.org/t/p/original${actualData.backdrop_path}`} alt="cardimg" />
      </div>
      <div className="cardImage_overlay">
        <div className="title">{actualData && actualData.title.slice(0,19)}</div>
         <p className="overview">{actualData && actualData.overview.slice(0,60)}...</p>
      </div>
      </Link>
    </div>
   
  )
}

export default Card
