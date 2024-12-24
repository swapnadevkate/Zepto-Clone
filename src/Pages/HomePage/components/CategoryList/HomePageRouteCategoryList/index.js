import React, { useContext, useEffect, useState } from 'react';
import CategorySection from './CategorySection'; // Ensure you import the CategorySection component
import SubCategoryProducts from './SubCategoryProducts'; // Ensure you import the SubCategoryProducts component
import DataContext from '../../../../../context/DataContext/DataContext';
import './style.css';

function HomePageRouteCategoryList() {
  const [productList, setProductList] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  useEffect(() => {
    fetch('/CategoryRouteList.json')
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const clickHandler = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div className="overallData">
      {/* Category Section */}
      <CategorySection
        productList={productList}
        clickHandler={clickHandler}
      />

      {/* Subcategory Products */}
      { (
        <SubCategoryProducts
          selectedCategoryIndex={selectedCategoryIndex}
          productList={productList}
        />
      )}
    </div>
  );
}

export default HomePageRouteCategoryList;
