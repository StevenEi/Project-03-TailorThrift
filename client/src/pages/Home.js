import React from 'react'
import Banner from '../assets/banner.png'
import '../assets/css/Home.css'
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";


const Home = () => {
  return (
    <div>
        <div>
          <img src={Banner} alt='banner' class='banner'/></div>
          <CategoryMenu />
      <ProductList />
        <Cart />
    </div>
  );
};

export default Home