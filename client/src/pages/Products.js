import React from "react";
import ProductCards from "../components/ProductCards";

const productCategories = ['men', 'women']

export default function Products(){
    return (
        <div>
            <h1>Products</h1>
            <ul>Categories</ul>
                <ProductCards pCards={productCategories}/>
            
        </div>
    )

}