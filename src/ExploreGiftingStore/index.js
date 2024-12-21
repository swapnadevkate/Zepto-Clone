import React from "react";
import ProductImage from "../components/ProductImage";
import Text from "./../components/Text";
import { Link } from "react-router-dom";
import "./style.css";
function ExploreGiftingStore({ explores, title }) {
  const divHandler = (index) => {};
  return (
    <>
      <div className="giftTitle">{title}</div>
      <div className="ExploreGiftStore">
        {explores.map((data) => {
          return (
            <Link to={`/ExploreGiftingStore/${data.id}`}>
              <div onClick={divHandler} className="giftproduct">
                <ProductImage src={data.giftimage} />
                <Text text={data.giftname} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default ExploreGiftingStore;
