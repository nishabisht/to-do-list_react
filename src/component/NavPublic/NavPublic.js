import React from "react";
import logo from "../../assest/img/logo.png";
import "./NavPublic.css";

const NavPublic = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top px-5 theme">
        <div class="container-fluid px-5">
          <a class="navbar-brand" href="#">
            <h3>
              <img src={logo} alt="logo" id="logo" />
              ToDo
            </h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav  mb-2 mb-lg-0 px-3">
              <li class="nav-item mx-3">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  Help Center
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#">
                  Sign In
                </a>
              </li>
              <li className="nav-item mx-3">
                <button
                  className="nav-link btn border border-black"
                  id="navbtn"
                >
                  Sign Up for free
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { NavPublic };
