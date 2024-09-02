import React from 'react'
import TodaysSale from './components/TodaysSale'
import Product1 from './components/Product1'
import SecondSection from './components/SecondSection'
import NewArrival from './components/NewArrival'
import Footer from './components/Footer'


const Home = () => {
  return (
    <div>
    <TodaysSale/>
    <Product1 />
    <SecondSection />
    <NewArrival />
      
    </div>
  )
}

export default Home
