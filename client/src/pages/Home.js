import React from 'react'
import Banner from '../assets/banner.png'
import '../assets/css/Home.css'
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
import FeatureCards from '../components/FeatureCards';



const Home = () => {
  return (
    <div>

<div class='logoContainer'>
<img src={Banner} alt='banner' class='banner'/>
<p class='bannerText'>Bring Confidence To What You Wear.</p>
</div> 
<div>
    <div class='featureSection'>  
    <div>
      {FeatureCards}
    </div>
        <h1>Test</h1>    <h1>Test</h1>    <h1>Test</h1>

    </div>

</div>


         {/* currently using boiler plate element from activities */}
        {/* <CategoryMenu />
        <ProductList /> */}
        {/* <Cart /> */}

    </div>
  );
};

export default Home