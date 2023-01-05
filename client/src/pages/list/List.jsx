import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

function List() {
  return (
    <div>
        <Navbar />
        <Header listMode={true}/>
    </div>
  )
}

export default List