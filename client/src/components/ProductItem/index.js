import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import './style.css';

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    _id,
    name,
    description,
    image,
    price,
    quantity,
    size
  } = item;
  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div class='col'>
      <div className="productCard">
        <Link class='productTitle' to={`/products/${_id}`}>
          <img class='productImgCard'
            alt={name}
            src={image}
          />
          <span className="itemTitle">{name}</span>
          <span class='price'>${price}</span>
        </Link>
        <div>
          <p class='productText'>{size}</p>
          <p class='productText'>{description}</p>
          <div class='productText'>{quantity} {pluralize("item", quantity)} in stock</div>
        </div>
        <span class='price'>${price}</span>
        <button class='addCartButton' onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
