import React from "react";
import './productImage.css'

function ProductImage({ src , style}) {
  return (
    <div>
      <img className="img" src={src} style={style} ></img>
    </div>
  );
}

export default ProductImage;
