import React from "react";
import { Row, Col } from "reactstrap";
import "./Navigation.scss";
const Navigation = ({ data, activeTab, updateActiveTab }) => {
  return (
    <div className="rangeNav">
      <Row>
        {data.map((ele, index) => (
          <Col
            key={index}
            onClick={() => {
              updateActiveTab(index);
            }}
            className={
              Number(activeTab) === index
                ? "rangeNav__tab active"
                : "rangeNav__tab"
            }
          >
            {ele.range}
          </Col>
        ))}
      </Row>{" "}
    </div>
  );
};

export default Navigation;
