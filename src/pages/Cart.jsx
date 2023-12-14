import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/cartSlice";
import { removePrice } from "../store/priceSlice";
const Cart = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);
  function removeProduct(id, price) {
    dispatch(removeFromCart(id));
    dispatch(removePrice(price))
  }
  return (
    <div className="content-cart">
      <span className="cart__close" onClick={() => item(false)}>
        ✘
      </span>
      {products.length >= 1 ? (
        products.map((product, index) => (
          <div className="cart__block" key={`${product}__${index}`}>
            <div className="cart__item">
              <img src={product.imageUrl} alt="img" className="cart__img"></img>
              <div className="cart__wrapper">
                <div className="cart__title">{product.name}</div>
                <div className="cart__info">
                  <div className="cart__price">{product.price} $</div>
                  <img
                    onClick={() => removeProduct(product.id, product.price)}
                    src="img/trash.png"
                    className="cart__trash"
                    alt="remove__icon"
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>Cart is empty 😕</h2>
            <p>
              You did not ordered yet
              <br />
              To order go to the main page.
            </p>
            <img src="img/empty-cart.png" alt="Empty cart" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
