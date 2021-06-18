import React, { useState, Fragment } from "react";
import data from "assets/json/data.json";
import Navigation from "components/navigation";
import { isValidTab } from "lib/util";
import PlansTab from "components/plansTab";
const PricingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(
    isValidTab(localStorage.getItem("activeTab"))
      ? localStorage.getItem("activeTab")
      : 2
  );
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const updateActiveTab = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeTab", index);
  };

  return (
    <Fragment>
      <Navigation
        data={data}
        activeTab={activeTab}
        updateActiveTab={updateActiveTab}
      />
      <PlansTab activeTabData={data.find((ele) => ele.key == activeTab)} />
    </Fragment>
  );
};

export default PricingPage;
