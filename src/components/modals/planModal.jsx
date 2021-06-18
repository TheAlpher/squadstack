import React, { useState } from "react";
import {
  Modal,
  Row,
  Col,
  Input,
  Label,
  ModalHeader,
  Form,
  FormGroup,
  ModalBody,
  Button,
} from "reactstrap";
import "./planModal.css";
const PlanModal = ({ modalOpen, selectedPlan, closeModal }) => {
  // if(!selectedPlan){

  //   closeModal();
  // }
  const handleSubmit = (e) => {
    console.log(e);
    const formData = new FormData(e.target);
    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }
    e.preventDefault();

    console.log(formData);
    closeModal();
  };

  return (
    <Modal isOpen={modalOpen} toggle={closeModal} className={"plan--modal"}>
      <ModalHeader toggle={closeModal}>Get Started With SquadVoice</ModalHeader>
      <ModalBody>
        <div className="plan--modal--plan-title">
          <span>Plan Selected:&nbsp;</span>
          {selectedPlan?.planName}
        </div>

        <div className="plan--modal--form">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="cName">Name</Label>
              <Input id="cName" name="Name" required={true} />
            </FormGroup>
            <Row form className="row">
              <Col md={6} sm={12} xs={12}>
                <FormGroup>
                  <Label for="cEmail">Email</Label>
                  <Input
                    id="cEmail"
                    name="Email"
                    type="email"
                    required={true}
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <FormGroup>
                  <Label for="cPhone">Phone No.</Label>
                  <Input
                    id="cPhone"
                    name="Phone No."
                    pattern={"^(0|[1-9][0-9]*)$"}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form className="row">
              <Col md={6} sm={12} xs={12}>
                <FormGroup>
                  <Label for="mLeads">
                    Number of leads you generate in a month
                  </Label>
                  <Input
                    id="mLeads"
                    name="Month Leads"
                    defaultValue={selectedPlan?.leads}
                    min={0}
                    type="number"
                    placeholder={"-"}
                  />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <FormGroup>
                  <Label for="tLeads">Total leads in your CRM</Label>
                  <Input
                    id="tLeads"
                    name="Total Leads"
                    min={0}
                    type="number"
                    placeholder={"-"}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form className="row">
              <Col md={6} sm={12} xs={12}>
                <FormGroup>
                  <Label for="CRM">Which CRM do you use?</Label>
                  <Input id="CRM" name="CRM" />
                </FormGroup>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <FormGroup>
                  <Label for="agents">No. of Agents</Label>
                  <Input
                    id="agents"
                    name="No of Agents"
                    type="number"
                    placeholder={"-"}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form className="row">
              <Label> What are your biggest lead sources ? </Label>
              <FormGroup>
                <Input
                  type="checkbox"
                  id="leadSource"
                  name="Lead Source"
                  value="Zillow"
                />{" "}
                <Label for="leadSource">Zillow</Label>
                <Input
                  type="checkbox"
                  id="leadSource"
                  name="Lead Source"
                  value="Realtor"
                />
                <Label for="leadSource">Realtor</Label>
                <Input
                  type="checkbox"
                  id="leadSource"
                  name="Lead Source"
                  value="Ylopo"
                />
                <Label for="leadSource">Ylopo</Label>
                <Input
                  type="checkbox"
                  id="leadSource"
                  name="Lead Source"
                  value="Others"
                />
                <Label for="leadSource">Others</Label>
              </FormGroup>
            </Row>
            <Row form className="row">
              <Label> How did you hear about us ? </Label>
              <FormGroup>
                <Input
                  type="checkbox"
                  id="hearSource"
                  name="Heard About Us"
                  value="Google"
                />{" "}
                <Label for="hearSource">Google</Label>
                <Input
                  type="checkbox"
                  id="hearSource"
                  name="Heard About Us"
                  value="Facebook"
                />
                <Label for="hearSource">Facebook</Label>
                <Input
                  type="checkbox"
                  id="hearSource"
                  name="Heard About Us"
                  value="Email"
                />
                <Label for="hearSource">Email</Label>
                <Input
                  type="checkbox"
                  id="hearSource"
                  name="Heard About Us"
                  value="Friends"
                />
                <Label for="hearSource">Friends</Label>
                <Input
                  type="checkbox"
                  id="hearSource"
                  name="Heard About Us"
                  value="Real Closers"
                />
                <Label for="hearSource">Real Closers</Label>
              </FormGroup>
            </Row>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default PlanModal;
