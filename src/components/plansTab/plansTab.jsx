import React from "react";
import { Row, Col } from "reactstrap";
import PricingCard from "components/card";
import "./plansTab.css";
const PlansTab = ({ activeTabData, openModal }) => {
  return (
    <div className="plans--tab--wrapper">
      <Row className="plans--row">
        {activeTabData.plans.map((plan, index) => {
          return (
            <PricingCard
              key={index}
              data={plan}
              openModal={openModal}
              ispopular={plan.planName === activeTabData.popularPlan}
            />
          );
        })}

        <Col className="plan--card">
          <div className={"plan--tag "}></div>
          <div className="plan--title">
            <span> Enterprise </span>
          </div>
          <div className="plan--details">
            Want more than 80 qualified leads per month
          </div>

          <div
            className="plan--finalise"
            onClick={() => {
              openModal({ planName: "Enterprise" });
            }}
          >
            Get in Touch
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlansTab;
