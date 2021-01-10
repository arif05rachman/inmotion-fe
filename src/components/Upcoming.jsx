import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

const Upcoming = ({ todos }) => {
  const { upcoming } = todos;
  const statusCheker = (status) => {
    if (status === "Approved") {
      return (
        <span className="badge badge-success d-flex align-items-center">
          {status}
        </span>
      );
    } else if (status === "in Progres") {
      return (
        <span className="badge badge-info d-flex align-items-center">
          {status}
        </span>
      );
    } else {
      return (
        <span className="badge badge-secondary d-flex align-items-center">
          {status}
        </span>
      );
    }
  };
  return (
    <div>
      {upcoming
        ? upcoming.map((val, idx) => {
            return (
              <Form className="d-flex justify-content-between col" key={idx}>
                <Form.Check
                  custom
                  type="checkbox"
                  id={`upcoming-1`}
                  label={val.name}
                />
                <div>{statusCheker(val.status)}</div>
              </Form>
            );
          })
        : "-"}
    </div>
  );
};

export default Upcoming;
