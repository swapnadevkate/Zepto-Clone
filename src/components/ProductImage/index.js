import React from "react";
import './productImage.css'

function ProductImage({ src }) {
  return (
    <div>
      <img className="img" src={src}></img>
    </div>
  );
}

export default ProductImage;
