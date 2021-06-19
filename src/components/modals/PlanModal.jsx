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
} from "reactstrap";
import { objToString } from "lib/util";
import "./PlanModal.scss";
const PlanModal = ({ modalOpen, selectedPlan, closeModal }) => {
  const [heardfrom, setHeardFrom] = useState(null);

  /**
   * Handle form submission (validates using input field attributes)
   * FormData generates formValues object accessed using entries function
   * Lead Source name assigned to multi select checkboxes therefore its values need to be concatenated
   * @param {*Event Object} e 
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let obj = { "Plan Name": selectedPlan?.planName };

    for (var [key, value] of formData.entries()) {
      if (value) {
        if (key === "Lead Source") {
          obj[key] = Array.isArray(obj[key]) ? [...obj[key], value] : [value];
        } else {
          obj[key] = value;
        }
      }
    }
    closeModal();
    setHeardFrom(null);
    setTimeout(() => {
      window.alert(objToString(obj));
    }, 0);
  };

/**
 * Updates Heard About Us Checkboxes value based on {@var heardfrom } 
 * as it is a single select from multiple checkboxes 
 * @param {*Checbox checked onChange event object} e 
 */

  const updateCheckbox = (e) => {
    if (e.target.value === heardfrom) setHeardFrom(null);
    else setHeardFrom(e.target.value);
  };

  return (
    <Modal isOpen={modalOpen} toggle={closeModal} className={"plan-modal"}>
      <ModalHeader toggle={closeModal}>Get Started With SquadVoice</ModalHeader>
      <ModalBody>
        <div className="plan-modal__plan-title">
          <span>Plan Selected:&nbsp;</span>
          {selectedPlan?.planName}
        </div>

        <div className="plan-modal__form">
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
                  onChange={updateCheckbox}
                  checked={heardfrom === "Google"}
                />{" "}
                <Label>Google</Label>
                <Input
                  type="checkbox"
                  id="hearSource1"
                  value="Facebook"
                  onChange={updateCheckbox}
                  checked={heardfrom === "Facebook"}
                />
                <Label>Facebook</Label>
                <Input
                  type="checkbox"
                  id="hearSource2"
                  value="Email"
                  name="Heard About Us"
                  onChange={updateCheckbox}
                  checked={heardfrom === "Email"}
                />
                <Label>Email</Label>
                <Input
                  type="checkbox"
                  value="Friends"
                  name="Heard About Us"
                  onChange={updateCheckbox}
                  checked={heardfrom === "Friends"}
                />
                <Label>Friends</Label>
                <Input
                  type="checkbox"
                  value="Real Closers"
                  name="Heard About Us"
                  onChange={updateCheckbox}
                  checked={heardfrom === "Real Closers"}
                />
                <Label>Real Closers</Label>
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
