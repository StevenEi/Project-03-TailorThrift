import React from 'react'
import Banner from '../assets/banner.png'
import '../assets/css/Home.css'

const Home = () => {
  return (
    <div>
      <div>
        <img src={Banner} alt='banner' class='banner' />
      </div>
    </div>
  );
};

export default Home