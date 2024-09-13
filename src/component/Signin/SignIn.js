import React from "react";
import "./SignIn.css";

const SignIn = () => {
  return (
    <>
      <div
        className="d-flex flex-grow justify-content-center flex-wrap border theme p-3 my-5 rounded-4 shadow "
        style={{ width: "20vw" }}
      >
        <form>
          <div class="mb-3">
            <label for="username" class="form-label">
              User name
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="nishabisht"
              aria-describedby="username"
            />
            {/* <div id="username" class="form-text">
              We'll never share your email with anyone else.
            </div> */}
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="abc@gmail.com"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              placeholder="password"
              id="password"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-theme">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export { SignIn };
