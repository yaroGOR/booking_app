import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured'
import './home.css'

function Home() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'> Browse by property type</h1>
      </div>
    </div>
  )
}

export default Home