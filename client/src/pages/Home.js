import React from 'react'
import Banner from '../assets/banner.png'
import '../assets/css/Home.css'
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import FeatureCards from '../components/FeatureCard/FeatureCards.js';
import Feature1 from '../assets/Feature1.png'
import Feature2 from '../assets/Feature2.png'
import Feature3 from '../assets/Feature3.png'
import Feature4 from '../assets/Feature4.png'
import Measure from '../assets/measurePhoto.png'


const Home = () => {
  return (
    <div>

      <div class='logoContainer'>
        <img src={Banner} alt='banner' class='banner' />
        <p class='bannerText'>Bring Confidence To What You Wear.</p>
      </div>
      <div class='featureSection row'>
        <p class='featureTitle'>
          Featured Items
        </p>
        <div class='featureCard  col feature1'><FeatureCards />
        <img src={Feature1} alt='' class='feature'/> </div>
        <div class='featureCard col feature2'><FeatureCards />
        <img src={Feature2} alt='' class='feature'/></div>
        <div class='featureCard col feature3'><FeatureCards />
        <img src={Feature3} alt='' class='feature'/></div>
        <div class='featureCard col feature4'><FeatureCards />
        <img src={Feature4} alt='' class='feature'/></div>
      </div >
      <div class='CategorySection row'>
        <div class='featureLink col'> 
        <p>Shop Tops</p>
        </div>
        <div class='featureLink col'>
        <p>Shop Bottoms</p>
        </div>
        <div class='featureLink col'>
        <p>Shop Accessories</p>
        </div>


      </div>

      <div class='MeasurementSection row'>
        <div class='col measure1 measure'> Test</div>
        <div class='col measure2 measure'> 
        <img src={Measure} alt="" class='measurePhoto'/></div>

      </div>

      {/* currently using boiler plate element from activities */}
      {/* <CategoryMenu />
        <ProductList /> */}
      {/* <Cart /> */}


    </div>
  );
};

export default Home