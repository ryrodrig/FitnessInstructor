import React from "react";

const HeroSection = () => {
  return (
    <div
      className="jumbotron rounded"
      style={{
        backgroundImage: `url(
          "HeroDefault.jpg"
        )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container">
        <div class="row">
          <div className="col shadow p-3 mb-5 bg-white rounded">
            <h1 className="display-4" style={{ fontFamily: "Raleway" }}>
              <b>IT'S TIME TO WORK IT OUT</b>
            </h1>
            <p className="lead">
              Fit Gymz's Top skilled trainers will get you in shape.
            </p>
            <hr className="my-4" />
            <p>Reach the perfect fit with the outfit you've always wanted</p>
          </div>
          <div className="col bg-Transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
