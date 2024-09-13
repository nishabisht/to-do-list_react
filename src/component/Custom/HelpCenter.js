import React from "react";
import { FaSearch } from "react-icons/fa";
import "./HelpCenter.css";

const HelpCenter = ({ helpCenter }) => {
  return (
    <>
      <div className="d-flex flex-column flex-wrap flex-grow justify-content-center align-content-center my-5">
        <div className="d-flex flex-column flex-wrap flex-grow align-content-center m-3">
          <h1 className="d-flex align-items-center justify-content-center">
            How can we <span className="text-theme">help you?</span>
          </h1>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
            <span className="shortcut">Ctrl K</span>
          </div>
        </div>

        <div className="mb-5">
          {helpCenter.map((card, index) => (
            <div className="d-inline-flex align-content-center justify-content-center gap-3 mx-1 px-3">
              <div
                className="card shadow p-1 mb-3 rounded border-white"
                key={index}
                style={{ width: "6rem;" }}
              >
                <img
                  src={card.image}
                  className="card-img-top"
                  alt="card image"
                />
                <div className="card-body">
                  <p className="card-text fs-5">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { HelpCenter };
