import React from 'react'
import Cart from "../components/Cart";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";



const Home = () => {
  return (
    <div>
        Home page
         {/* currently using boiler plate element from activities */}
        <CategoryMenu />
        <ProductList />
        <Cart / >
    </div>
  )
}

export default Home