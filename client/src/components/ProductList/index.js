import React, { useEffect } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import './style.css'

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

 console.log('Current STATE!!!!', state)

  const { loading, data } = useQuery(QUERY_PRODUCTS);
  console.log(data)
  useEffect(() => {
    if (data) {

      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    console.log('Current catuefory in filtered products!!!', state)
    if (!state.currentCategory) {
      return state.products;
    }
console.log('WE r after the if in fileted!!')
    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  const test = filterProducts()
console.log('TEST FILTERED ((((((((((', test)
console.log('RIght if statement test', !state.currentCategory)

  return (
    <div className=" productSection">
      {/* <h2>Our Products:</h2> */}
      {state.products.length ? (
        <div className="row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              description={product.description}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              size={product.size}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
