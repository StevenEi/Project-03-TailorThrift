import React from 'react'
import Banner from '../assets/banner.png'
import '../assets/css/Home.css'
import FeatureCards from '../components/FeatureCard/FeatureCards.js';
import Feature1 from '../assets/Feature1.png'
import Feature2 from '../assets/Feature2.png'
import Feature3 from '../assets/Feature3.png'
import Feature4 from '../assets/Feature4.png'
import Measure from '../assets/measurePhoto.png'
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_CURRENT_CATEGORY,
} from '../utils/actions';
import { useNavigate } from "react-router-dom";

import CarouselTest from '../components/Carousel/Carousel.js';

const Home = () => {
  const [state, dispatch] = useStoreContext();
  let navigate = useNavigate();

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
    navigate("/products", { replace: true });
  };

  return (
    <div>
      <div class='logoContainer'>
        <img src={Banner} alt='banner' class='banner' />
        <p class='bannerText'>Bring Confidence To What You Wear</p>
      </div>
      <div class='featureSection row'>
        <p class='featureTitle'>
          Featured Items
        </p>
        <div class='featureCard  col feature1'><FeatureCards />
          <img src={Feature1} alt='' class='feature' /> </div>
        <div class='featureCard col feature2'><FeatureCards />
          <img src={Feature2} alt='' class='feature' /></div>
        <div class='featureCard col feature3'><FeatureCards />
          <img src={Feature3} alt='' class='feature' /></div>
        <div class='featureCard col feature4'><FeatureCards />
          <img src={Feature4} alt='' class='feature' /></div>
      </div >
      <div class=' row'>
        <div class='CategorySection col'>
          <button  class='CategoryLink  ' onClick={() => {
            handleClick('621e6c37003b7d73144660f7')
          }}>Shop Shirts</button>
          <button class='CategoryLink  ' onClick={() => {
            handleClick('621e6c37003b7d73144660f8')
          }}>Shop Slacks</button>
          <button class='CategoryLink  ' onClick={() => {
            handleClick('621e6c37003b7d73144660fb')
          }}>Shop Accessories</button>
        </div>
      </div>
      <div class='MeasurementSection row'>
        <div class='col measure1 measure'> 
        <CarouselTest/>
        </div>
        <div class='col measure2 measure'> 
        <img src={Measure} alt="" class='measurePhoto'/></div>
      </div>
    </div>
  );
};

export default Home