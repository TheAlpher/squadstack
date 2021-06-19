import React from "react";
import { Row, Col } from "reactstrap";
import PricingCard from "components/Card";
import "./PlansTab.scss";
const PlansTab = ({ activeTabData, openModal }) => {
  return (
    <div className="plans-tab">
      <Row className="plans-tab__row">
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

        <Col className="plan-card">
          <div className={"plan-card__tag "}></div>
          <div className="plan-card__title">
            <span> Enterprise </span>
          </div>
          <div className="plan-card__details">
            Want more than 80 qualified leads per month
          </div>

          <div
            className="plan-card__finalise"
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
