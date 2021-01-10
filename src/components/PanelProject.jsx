import React, { useEffect, useState } from "react";
import { Form, FormControl, Card, CardDeck, Spinner } from "react-bootstrap";
import "./panelProject.css";
import { getProjects, getProject } from "../store/actions/project";
import { getTodos } from "../store/actions/todo";
import { useDispatch, useSelector } from "react-redux";
import randomRgb from "../helpers/randomRgb";
const PanelPeoject = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projectReducer);
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(getProjects(search));
  }, []);

  const handleClick = (id) => {
    dispatch(getTodos(id));
    dispatch(getProject(id));
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    dispatch(getProjects(value));
  };
  return (
    <div className="d-flex justify-content-center p-5">
      <div style={{ backgroundColor: "#262A41" }}>
        <h2>Hi Arif</h2>
        <h5>Welcome back to the workspace, we miss you!</h5>
        <div className="py-4">
          <Form>
            <FormControl
              type="text"
              placeholder="Search Task or Project"
              className="bg-search"
              onChange={handleSearch}
              style={{ color: "#dbdbdb" }}
            />
          </Form>
        </div>
        <div className="pt-4">
          <h6 className="my-3">Project ({projects ? projects.length : 0})</h6>
          <CardDeck className="d-flex wrapper">
            {projects ? (
              projects.map((project, idx) => (
                <div className="col-4" key={idx}>
                  <Card
                    className="bg-card d-flex justify-content-center align-items-center btn"
                    onClick={() => handleClick(project.id)}
                  >
                    <h3
                      className="bg-light rounded-lg p-3"
                      style={{
                        background: `linear-gradient(rgba(${randomRgb()},${randomRgb()},${randomRgb()},0.9),transparent)`,
                      }}
                    >
                      {project.short_name}
                    </h3>
                    <p
                      className="text-center text-light"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {project.name}
                    </p>
                  </Card>
                </div>
              ))
            ) : (
              <Spinner animation="border" variant="success" />
            )}
          </CardDeck>
        </div>
      </div>
    </div>
  );
};

export default PanelPeoject;
