import React, { Fragment } from "react";
import { Col } from "reactstrap";
import "./PricingCard.scss";

const PricingCard = ({ data, ispopular, openModal }) => {
  let totalPrice = data.leads * data.leadPrice + data.platformPrice;
  return (
    <Col className="plan-card">
      <div className={ispopular ? "plan-card__tag popular" : "plan-card__tag "}>
        <span>Most Popular</span>
      </div>
      <div className="plan-card__title">
        <span> {data.planName} </span>
      </div>
      <div className="plan-card__details">
        {data.leadPrice ? (
          <Fragment>
            {" "}
            <div className="plan-card__details__leadPrice">
              <span>${data.leadPrice}</span>
              <br />
              Per Qualified Lead
            </div>
            <div className="plan-card__details__leadValue">
              Qualified Leads Per Month <br />
              <span>{data.leads}</span>
              <br />
            </div>
            <div className="plan-card__details__leadMonth">
              Platform Fee Per Month
              <br />
              <span>${data.platformPrice}</span>
              <br />
            </div>
            <div className="plan-card__details__price">
              ${totalPrice.toLocaleString()}/mo
            </div>
          </Fragment>
        ) : (
          data.description
        )}
      </div>
      <div
        className="plan-card__finalise"
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
