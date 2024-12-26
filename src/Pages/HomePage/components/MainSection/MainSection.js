import React from "react";
import "./MainSection.css";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <>
      <nav></nav>
      <div id="mainSection">
        <div id="firstsec">
          <div id="firstsecpara">
            <p> Wedding store</p>
          </div>
        </div>
        <div id="secondsec">
          <div class="corners">
            <Link to="/shopingStore/womensStore">
              <img
                src={"/Images/61d184bb-e0a7-4669-ba6d-94f434e00639.webp"}
                style={{
                  width: "350px",
                  height: "350px",
                  marginTop: "10px",
                  marginLeft: "20px",
                }}
              ></img>
            </Link>
          </div>
          <div class="corners">
            <Link to="/shopingStore/mensStore">
              <img
                src={"/Images/51c03e9c-00d1-4543-8144-657e3cbfb77b.png"}
                style={{
                  width: "350px",
                  height: "350px",
                  marginTop: "10px",
                  marginLeft: "20px",
                }}
              ></img>
            </Link>
          </div>
          <div class="corners">
            <Link to="/shopingStore/gifitingSpecialStore">
              <img
                src={"/Images/ea397c47-8886-4565-9665-6455dfffea64.png"}
                style={{
                  width: "350px",
                  height: "350px",
                  marginTop: "10px",
                  marginLeft: "20px",
                }}
              ></img>
            </Link>
          </div>
        </div>
        <div id="thirdSec">
          <div id="textpara1">
            <p>
              We are now open <b>24*7</b> in your area
            </p>
          </div>
          <div id="textpara2">
            <img src={"/Images/aef6ed2c-1f08-493a-a2c0-bdb7e0974bcc.webp"} style={{ width: "1000px", height: "90px" }}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSection;
