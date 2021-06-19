import React, { useState, Fragment } from "react";
import data from "assets/json/data.json";
import Navigation from "components/navigation";
import { isValidTab } from "lib/util";
import PlansTab from "components/plansTab";
import PlanModal from "components/modals";
const PricingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(
    isValidTab(localStorage.getItem("activeTab"))
      ? localStorage.getItem("activeTab")
      : 2
  );

  const [selectedPlan, setSelectedPlan] = useState(null);
  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setModalOpen(false);
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
      <PlansTab
        activeTabData={data.find((ele) => ele.key === Number(activeTab))}
        setSelectedPlan={setSelectedPlan}
        openModal={openModal}
      />
      <PlanModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        selectedPlan={selectedPlan}
      />
    </Fragment>
  );
};

export default PricingPage;
