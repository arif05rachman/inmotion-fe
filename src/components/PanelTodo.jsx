import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Today, Upcoming } from "./";
import "./panelTodo.css";
const PanelPeoject = () => {
  const { todos } = useSelector((state) => state.todoReducer);
  const { project } = useSelector((state) => state.projectReducer);
  return (
    <div className="bg-todo p-2 m-4 rounded-lg">
      <div>
        <h2>{project.name ? project.name : "Project Name"}</h2>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="my-2">
        <h5>Today</h5>
        <Today todos={todos} />
      </div>
      <div className="my-2">
        <h5>Upcoming</h5>
        <Upcoming todos={todos} />
      </div>
      <div className="d-flex justify-content-end">
        <Button
          variant="primary"
          size="sm"
          style={{ fontSize: "1.8rem" }}
          className="px-3 rounded-lg shadow-lg"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default PanelPeoject;
