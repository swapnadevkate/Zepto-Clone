import React, { useState } from "react";
import ProductImage from "../ProductImage";
import ProductTab from "../../ShoppingStore/ProductTab";
import Text from "../Text";

import "./style.css";

function CategorySection(props) {
  const { categories } = props;
 const [state, setState] = useState(0);

 const onClickHandler = (index) => {
    setState(index);
  };

  return (
    <section className="categorySection">
      <div className="categories">
        {categories.map((data, index) => {
          return (
            <div
              onClick={() => {
                onClickHandler(index);
              }}
              key={data.categoryId}
            >
              <ProductImage src={data.categoryimage} />
              <Text text={data.categoryName} />
            </div>
          );
        })}
      </div>
      <ProductTab products={categories[state].products} />
    </section>
  );
}

export default CategorySection;
