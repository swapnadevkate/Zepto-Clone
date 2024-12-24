import React from 'react';
import ProductImage from '../../../../../../components/ProductImage';
import Text from '../../../../../../components/Text';
import './style.css';

function CategorySection({ productList, clickHandler }) {
  return (
    <div className="categoryDataDiv">
      {Array.isArray(productList) &&
        productList.map((productsData, categoryIndex) =>
          productsData.categorySection.map((csproduct) => (
            <div
              key={csproduct.categoryname}
              className="categoryData"
              onClick={() => clickHandler(categoryIndex)}
            >
              <ProductImage
                src={csproduct.CategoryImage}
                style={{ height: '50px', width: '50px' }}
              />
              <Text text={csproduct.categoryname} />
            </div>
          ))
        )}
    </div>
  );
}

export default CategorySection;
