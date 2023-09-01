import React, { useState } from 'react';
import img from  "../assets/pngwing.com.png"
import { Link } from 'react-router-dom';


const Header = () => {
  const [showMenu,setShowMenu]=useState(false);
 

  document.onclick=function(e){
    if(e.target.className !== "header-part2 show_menu" && e.target.className !== "fa-solid fa-xmark"){
       setShowMenu(false)
    }
  }

  return (
   <nav className='header'>
    <Link style={{textDecoration:'none'}} to="/"> 
    <img src={img} alt="logo" />
    </Link>

     <div className={showMenu ? "header-part2 show_menu":"header-part2"}>
      <Link to="/">Home</Link>
      <Link to="/movies/popular">Popular</Link>
      <Link to="/movies/upcoming">UpcomingMovie</Link>
      <Link to="/movies/top_rated">Top_RatedMovie</Link>
     </div>
      <i  onClick={()=>setShowMenu(!showMenu)} className={showMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
   </nav>
  )
}

export default Header
