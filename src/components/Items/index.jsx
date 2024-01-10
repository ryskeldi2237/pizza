import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { addPrice } from "../../store/slices/priceSlice";
import "./Items.css";
export default function Items({ item, sizes, types }) {
  const [activeSize, setActiveSize] = useState(item.sizes[0]);
  const [activeType, setActiveType] = useState(item.types && item.types[0]);
  const dispatch = useDispatch();
  function toggleActiveSize(index) {
    setActiveSize(index);
  }
  function toggleActiveType(index) {
    setActiveType(index);
  }
  const addProduct = (product) => {
    dispatch(addToCart(product));
    dispatch(addPrice(product.price));
  };
  return (
    <div className="items-block">
      <img className="items-block__image" src={item.imageUrl} alt="Pizza" />
      <h4 className="items-block__title">{item.name}</h4>
      <div className="items-block__selector">
        <ul>
          {item.types &&
            types
              .filter((type, index) => item.types.includes(index))
              .map((type, index) => (
                <li
                  key={`size_${index}`}
                  onClick={() => toggleActiveType(index)}
                  className={
                    activeType === index
                      ? "active"
                      : !item.types.includes(index)
                      ? "disabled"
                      : ""
                  }
                >
                  {type}
                </li>
              ))}
        </ul>
        <ul>
          {sizes &&
            sizes.map((size, index) => (
              <li
                key={`size_${index}`}
                onClick={() => toggleActiveSize(index)}
                className={
                  activeSize === index
                    ? "active"
                    : !item.sizes.includes(index)
                    ? "disabled"
                    : ""
                }
              >
                {size}
              </li>
            ))}
        </ul>
      </div>
      <div className="items-block__bottom">
        <div className="items-block__price">from {item.price} $</div>
        <div
          className="button button--outline button--add"
          onClick={() => addProduct(item)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span> Add to bag</span>
        </div>
      </div>
    </div>
  );
}
