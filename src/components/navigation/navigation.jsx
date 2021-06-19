import React from "react";
import { Row, Col } from "reactstrap";
import "./navigation.css";
const Navigation = ({ data, activeTab, updateActiveTab }) => {
  return (
    <div className="nav--wrapper">
      <Row style={{ margin: 0 }}>
        {data.map((ele, index) => (
          <Col
            key={index}
            onClick={() => {
              updateActiveTab(index);
            }}
            className={Number(activeTab) === index ? "nav--tab active" : "nav--tab"}
          >
            {ele.range}
          </Col>
        ))}
      </Row>{" "}
    </div>
  );
};

export default Navigation;
