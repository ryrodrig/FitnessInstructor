import React from "react";
import Card from "./Card";

const FeaturedClasses = props => {
  const cardList = props.classes.map(classDetail => {
    return (
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <Card cardDetail={classDetail} />
        </div>
      </div>
    );
  });
  return (
    <div
      className="container-fluid p-5"
      style={{
        backgroundImage: `url(
          "FeaturedClassBkgrnd.jpg"
        )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <h2 className="d-flex justify-content-center pb-5"> FEATURED CLASSES </h2>
      {cardList}
    </div>
  );
};

export default FeaturedClasses;
