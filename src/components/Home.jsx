import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";



import MovieList from './MovieList';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Mouse from './Mouse';
import { useGlobalContext } from '../context';

const Home = () => {
  const {loading,movie}=useGlobalContext();
  return (
    <>
    {
      loading ? (<Loader/>) :   <div className='home'>
      <Carousel
      showArrows={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      transitionTime={3}
      showStatus={false}
      preventMovementUntilSwipeScrollTolerance={true}
      showIndicators={true}
      
      >
      
          {       
           movie && movie?.map((item,index)=>(
          <Link key={index} to={`movie/${item.id}`} >
               <div   className="carousel_container">
          
          <div className="posterImage">
            <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" />
          </div>
          <div className="posterImage_overlay">
              <div className="title">{item.title}</div>
              <span className='rating'><i className="fa-solid fa-star"></i>{item.vote_average}</span>
              <p className="des">{item.overview.slice(0,100)}...</p>
          </div>    
          </div>
          </Link>
        ))
         }
      
      </Carousel>
      <MovieList/>
    </div>
    }
    </>
  )
}

export default Home
