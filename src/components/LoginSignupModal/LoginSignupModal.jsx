import React, { useState } from "react";

import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./loginsignup.scss"

function ControlledTabs() {
  const [key, setKey] = useState("login");

  return (
    <Tabs activeKey={key} onSelect={k => setKey(k)} className="flex-row">
      <Tab eventKey="login" title="Login">
        <Login />
      </Tab>
      <Tab eventKey="signup" title="Sign up">
        <Signup />
      </Tab>
    </Tabs>
  );
}

function LoginSignupModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} style={{ fontWeight: "bold" }}>
        Login&nbsp;/&nbsp;Sign up
      </Button>

      <Modal show={show} onHide={handleClose} className="login-signup-modal">
        <Modal.Body>
          <ControlledTabs />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginSignupModal;
