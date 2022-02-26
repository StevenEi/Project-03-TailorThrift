import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

export default function Products(){
    return (
        <div>
            <CategoryMenu />
            <ProductList />
            <Cart />
        </div>
    )
}
