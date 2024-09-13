import React from "react";

const ImageSection = ({ image }) => {
  return (
    <>
      <div className="d-inline-flex p-1 my-5">
        <img src={image} alt="" style={{ width: "35vw", height: "50vh" }} />
      </div>
    </>
  );
};

export { ImageSection };
