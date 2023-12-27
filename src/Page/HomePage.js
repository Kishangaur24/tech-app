import React from 'react'
import Header from '../components/Header/Header'
import Carousel from '../components/Carousel/Carousel'
import Placement from '../components/Placement/Placement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SapModule from '../components/SapModule/SapModule'
import GetInTouch from '../components/GetInTouch/GetInTouch'
// import Header1 from '../components/Header/Header'

const HomePage = () => {
  return (
    <div>
     <Header/>
     <Carousel/>
     <SapModule/>
     <Placement/>
     <GetInTouch/>
    </div>
  )
}

export default HomePage
