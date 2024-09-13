import React, { useState } from "react";
import "./CreateTask.css";

const CreateTask = () => {
  const [task, setTask] = useState({
    title: "",
    tDate: "",
    status: "",
    priority: "",
    description: "",
  });

  let [taskData, setTaskData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Task data:", task);
  };

  return (
    <div
      className="d-flex flex-wrap flex-grow align-content-center flex-column mx-3 my-5"
      style={{ width: "75rem" }}
    >
      <div className="h3 d-flex text-body-secondary">Create New Task</div>
      <form
        className="card bg-body-tertiary text-body-secondary d-flex m-1 p-5"
        onSubmit={handleSubmit}
        style={{ width: "30rem" }}
      >
        <div className="mb-3">
          <label htmlFor="date" className="form-label text-body-secondary">
            Target Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={task.date}
            onChange={handleChange}
          />
        </div>

        <div className="d-inline-flex gap-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-body-secondary">
              Priority
            </label>
            <select
              className="form-select text-body-secondary"
              name="priority"
              aria-label="Default select example"
            >
              <option value="Normal" selected>
                Normal
              </option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-body-secondary">
              Status
            </label>
            <select
              className="form-select text-body-secondary"
              name="status"
              aria-label="Default select example"
            >
              <option value="To Do" selected>
                To Do
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-body-secondary">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={task.title}
            placeholder="Enter task title"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="form-label text-body-secondary"
          >
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={task.description}
            placeholder="Enter task description"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn border" id="navbtn">
          Save
        </button>
      </form>
    </div>
  );
};

export { CreateTask };
