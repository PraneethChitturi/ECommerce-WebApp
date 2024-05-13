import React from 'react'
import Banner from '../components/Banner'
import Category from '../components/Category'
import FlashSale from '../components/FlashSale'
import Offer from '../components/Offer'
import BestSeller from '../components/products'
import Arrived from '../components/Arrived'
import Brands from '../components/Brands'

const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <FlashSale />
      <Offer/>
      <BestSeller/>
      <Arrived/>
      <Brands />
    </div>
  )
}

export default Home