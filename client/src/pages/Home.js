import React from 'react'
import Banner from '../assets/banner.png'
import '../assets/css/Home.css'
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";



const Home = () => {
  return (
    <div>

<div class='logoContainer'>
<img src={Banner} alt='banner' class='banner'/></div>        

         {/* currently using boiler plate element from activities */}
        <CategoryMenu />
        <ProductList />
        <Cart />

    </div>
  );
};

export default Home