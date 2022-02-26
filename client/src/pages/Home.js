import React from 'react'
import Cart from "../components/Cart";
import Banner from '../assets/banner.png'
import '../assets/css/Home.css'


const Home = () => {
  return (
    <div>
        <div>
          <img src={Banner} alt='banner' class='banner'/></div>
          
        <Cart / >
    </div>
  )
}

export default Home