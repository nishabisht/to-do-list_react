import React from "react";
import "./Dashboard.css";
import Username from "../../assest/img/username.jpg";
import { CreateTask } from "../CreateTask/CreateTask";
import { ListTask } from "../ListTask/ListTask";
import { FaTasks, FaCalendar, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  const username = "Nisha Bisht";
  const designation = "software engineer";
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <div className="d-flex flex-wrap" style={{ height: "100vh" }}>
        <div
          className="d-flex justify-content-start bg-danger bg-opacity-25"
          style={{ width: "8vw" }}
        >
          <ul className="nav flex-column">
            <li className="nav-item pt-5">
              <a className="d-flex nav-link" aria-current="page" href="#">
                <img
                  src={Username}
                  alt="logo"
                  className="border rounded-circle"
                  style={{ width: "3vw" }}
                />
              </a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link" href="#">
                <div className="d-flex align-items-center text-dark">
                  <FaTasks />
                  <div className="d-flex ps-2">Task</div>
                </div>
              </a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link" href="#">
                <div className="d-flex align-items-center text-dark">
                  <FaCalendar />
                  <div className="d-flex ps-2">Calendar</div>
                </div>
              </a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link " aria-disabled="true" href="#">
                <div className="d-flex align-items-center text-dark">
                  <FaSignOutAlt />
                  <div className="d-flex ps-2">Logout</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="d-flex flex-wrap flex-grow bg-danger-subtle p-2 text-white  p-3"
          style={{ width: "15vw" }}
        >
          <ul className="nav flex-column">
            <li className="nav-item pt-3">
              <a
                className="d-flex nav-link flex-column"
                aria-current="page"
                href="#"
              >
                <div className="h3 text-body-secondary">{username}</div>
                <div className="h7 text-body-secondary">{designation}</div>
              </a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link" href="#">
                <div className="d-flex text-body-secondary">
                  <FaTasks />
                  <div className="d-flex ps-1">Listed Task</div>
                </div>
              </a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link" href="#">
                <div className="d-flex align-items-center text-body-secondary">
                  <FaTasks />
                  <div className="d-flex ps-1">Create Task</div>
                </div>
              </a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link" href="#">
                <div className="d-flex align-items-center text-body-secondary">
                  <FaTasks />
                  <div className="d-flex ps-1">Update Task</div>
                </div>
              </a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link " aria-disabled="true" href="#">
                <div className="d-flex align-items-center text-body-secondary">
                  <FaTasks />
                  <div className="d-flex ps-1">Delete Task</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="" style={{ width: "75vw" }}>
          <ListTask />
          {/* <CreateTask /> */}
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
