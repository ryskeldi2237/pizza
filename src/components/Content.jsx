
import React, { useState } from "react";
import Items from "./Items";
import Loading from "./Loading";

export default function Content({ load, setLoad, data }) {
  const [activeItem, setActiveItem] = useState(0);

  function toggleActiveItem(index) {
    setActiveItem(index);
  }

  const items = ["Pizzas", "Combos", "Snacks", "Desserts", "Drinks"],
    sizes = ["small", "medium", "large"],
    types = ["thin", "traditional"];

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <div className="categories">
            <ul>
              {items.map((item, index) => (
                <li
                  key={item}
                  onClick={() => toggleActiveItem(index)}
                  className={activeItem === index ? "active" : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="content__title">
          All {items[activeItem].toLowerCase()}
        </h2>
        <div>
          {Array(5)
            .fill(0)
            .map((_, outerIndex) => (
              <div
                key={outerIndex}
                className={`content__items ${
                  activeItem === outerIndex ? "active-content" : ""
                }`}
              >
                {load
                  ? data[activeItem].map((item, innerIndex) => (
                      <Items
                        key={`${item}__${innerIndex}`}
                        pizza={item}
                        sizes={sizes}
                        types={types}
                      />
                    ))
                  : Array(8).fill(<Loading  />)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}