import React from 'react'
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom' 
import Home from './components/Home'
import Header from './components/Header'
import "./App.css"
import MovieList from './components/MovieList'
import Moviedetail from './components/Moviedetail'
import Footer from './components/Footer'
import Mouse from './components/Mouse'

const App = () => {
  return (
    <div className='main'>
      <Router>
        <Header/>
        <Mouse/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/movies/:type' element={<MovieList/>}/>
          <Route exact path='/movie/:id' element={<Moviedetail/>}/>
          <Route path='*'  element={<h1>page not found</h1>}/>
        </Routes>
       <Footer/>
      </Router>
    </div>
  )
}

export default App
