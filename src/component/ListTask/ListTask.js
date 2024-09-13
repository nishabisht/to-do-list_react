import React from "react";
import "./ListTask.css"; // Include your CSS file if needed

const ListTask = () => {
  return (
    <div className="d-flex flex-wrap">
      <div className="d-flex m-3">
        <div className="card" style={{ width: "15rem", height: "auto" }}>
          <div className="card-body">
            <h5 className="card-title h7">Task Title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex m-3">
        <div className="card" style={{ width: "15rem", height: "auto" }}>
          <div className="card-body">
            <h5 className="card-title h7">Task Title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content. With supporting text below as a natural lead-in to
              additional content. With supporting text below as a natural
              lead-in to additional content. With supporting text below as a
              natural lead-in to additional content. With supporting text below
              as a natural lead-in to additional content. With supporting text
              below as a natural lead-in to additional content.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex m-3">
        <div className="card" style={{ width: "15rem", height: "auto" }}>
          <div className="card-body">
            <h5 className="card-title h7">Task Title</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListTask };
