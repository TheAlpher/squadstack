import React, { useState, Fragment } from "react";
import data from "assets/json/data.json";
import Navigation from "components/navigation";
import { isValidTab } from "lib/util";
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
    <Navigation
      data={data}
      activeTab={activeTab}
      updateActiveTab={updateActiveTab}
    />
  );
};

export default PricingPage;
