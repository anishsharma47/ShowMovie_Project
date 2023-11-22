import React ,{useEffect}from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
import Loader from './Loader';
import { useGlobalContext } from '../context';


const MovieList = () => {
const {movie,loading,fetchMovie}=useGlobalContext();
  let {type}=useParams();
 
  useEffect(()=>{
    window.scrollTo(0,0)
    fetchMovie(type);
  },[type]);



  return (
<>
{
  loading ? (<Loader/>) : (     <div className="movielist">
  <h1>{type ? type.toUpperCase(): "POPULAR"}</h1>
<div className='row'>

  {
    movie?.map((item,index)=>(
    
      <Card key={index} actualData={item}/>
    ))
  }
</div>
</div>)
}
</>
  )
 
  
}

export default MovieList
