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
          {/* Featured Items */}
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

      <div class='shopSection row'>
        <div class='CategorySection col'>
          <button class='CategoryLink  ' onClick={() => {
            handleClick('6221a2e42136b90022d83a75')
          }}>Shop Shirts</button>
          <button class='CategoryLink  ' onClick={() => {
            handleClick('6221a2e42136b90022d83a77')
          }}>Shop Slacks</button>
          <button class='CategoryLink  ' onClick={() => {
            handleClick('6221a2e42136b90022d83a7b')
          }}>Shop Accessories</button>
        </div>
      </div>

      <div class='statementSection'>
        <p class='statementTitle'>A <i>SMALL</i> ALTERATION CAN CHANGE THE WORLD</p>
        <p class='statementText'>
          Tailor/Thrift exists to provide a low cost option to form fitting ware. We aim to help our customers find purpose in the repurposed. We do this by providing selections of quality inspected previously-owned clothing combined with our alteration services to get the right fit. With our eco-friendly up cycling model through, our customers not only feel confident in their clothes but in where they bought it as well.
        </p>
      </div>


      <div class='MeasurementSection row'>
        <div class='col measure1 measure'>
          <img src={Measure} alt="" class='measurePhoto' />
          <p className='measureTitle'>Guide To Measuring Yourself</p>
        </div>
        <div class='col measure2 measure'>
          <CarouselTest />
        </div>
      </div>


    </div>
  );
};

export default Home