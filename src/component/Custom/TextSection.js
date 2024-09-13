import React from "react";

const TextSection = ({ heading, text }) => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center p-1 mx-1">
        <div className="h1">{heading}</div>
        <div className="fs-5">{text}</div>
      </div>
    </>
  );
};

export { TextSection };
