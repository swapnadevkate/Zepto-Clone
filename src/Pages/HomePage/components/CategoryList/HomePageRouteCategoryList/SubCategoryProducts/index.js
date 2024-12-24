import React, { useContext } from 'react';
import ProductImage from '../../../../../../components/ProductImage';
import Text from '../../../../../../components/Text';
import Button from '../../../../../../components/Button';
import DataContext from '../../../../../../context/DataContext/DataContext';
import './style.css';

function SubCategoryProducts({ selectedCategoryIndex, productList }) {
  const { dispatch } = useContext(DataContext);

  const addToCart = () => {
    dispatch({ type: 'Increment' });
  };

  return (
    <div className="subCategoryData">
      {productList[selectedCategoryIndex]?.subCategories.map((data, index) => (
        <div key={index} className="actualProducts">
          <ProductImage src={data.image} />
          <Text text={data.para} />
          <Text text={`Quantity: ${data.quantity}`} />
          <Text text={`Price: ${data.price}`} />
          <Button clickHandler={addToCart} text="Add To Cart" />
        </div>
      ))}
    </div>
  );
}

export default SubCategoryProducts;
