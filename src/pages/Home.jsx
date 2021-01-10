import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { PanelProject, PanelTodo } from "../components";
import "./home.css";
const Home = () => {
  return (
    <Container className="my-5 rounded-lg bg">
      <Row className="justify-content-md-center">
        <Col className="">
          <PanelProject />
        </Col>
        <Col className="">
          <PanelTodo />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
