import React, { Fragment } from "react";
import { Col } from "reactstrap";
import "./pricingCard.css";
const PricingCard = ({ data, ispopular, openModal }) => {
  let totalPrice = data.leads * data.leadPrice + data.platformPrice;
  return (
    <Col className="plan--card">
      <div className={ispopular ? "plan--tag popular" : "plan--tag "}>
        <span>Most Popular</span>
      </div>
      <div className="plan--title">
        <span> {data.planName} </span>
      </div>
      <div className="plan--details">
        {data.leadPrice ? (
          <Fragment>
            {" "}
            <div className="plan--details--leadPrice">
              <span>${data.leadPrice}</span>
              <br />
              Per Qualified Lead
            </div>
            <div className="plan--details--leadValue">
              Qualified Leads Per Month <br />
              <span>{data.leads}</span>
              <br />
            </div>
            <div className="plan--details--leadMonth">
              Platform Fee Per Month
              <br />
              <span>${data.platformPrice}</span>
              <br />
            </div>
            <div className="plan--details--price">
              ${totalPrice.toLocaleString()}/mo
            </div>
          </Fragment>
        ) : (
          data.description
        )}
      </div>

      <div
        className="plan--finalise"
        onClick={() => {
          openModal(data);
        }}
      >
        {" "}
        {data.leadPrice ? "Start Trial" : "Get in Touch"}
      </div>
    </Col>
  );
};

export default PricingCard;
