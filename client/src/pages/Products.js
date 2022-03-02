import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import ProductBanner from '../assets/productsBanner.png'
import '../assets/css/Product.css'

export default function Products(){
    return (
        <div>
            <div>
            <img src={ProductBanner} alt='' className="productBanner"/>    
            </div>    
            <CategoryMenu />
            <ProductList />
            <Cart />
        </div>
    )
}
