import React from "react";
import { Row } from "reactstrap";
import { extraPlan } from "lib/constants";
import PricingCard from "components/card";
import "./PlansTab.scss";
const PlansTab = ({ activeTabData, openModal }) => {

/** 
 * @param {Object} data - Consists of data for active home value range
 * @returns updated plans array by adding Enterprise plan if it doesnt exist in that array
 */

  const getUpdatedDataPlans = (data) => {
    let oldData = { ...data };
    if (!oldData.plans.find((plan) => plan.planName === extraPlan.planName))
      oldData.plans.push(extraPlan);
    return oldData.plans;
  };

  return (
    <div className="plans-tab">
      <Row className="plans-tab__row">
        {getUpdatedDataPlans(activeTabData).map((plan, index) => {
          return (
            <PricingCard
              key={index}
              data={plan}
              openModal={openModal}
              ispopular={plan.planName === activeTabData.popularPlan}
            />
          );
        })}
      </Row>
    </div>
  );
};

export default PlansTab;
