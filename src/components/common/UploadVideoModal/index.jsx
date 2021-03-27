import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import "./uploadvideomodal.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

function UploadVideoModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow}> Upload Videos</Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header">
          Uplaod Videos
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="center">
              <FontAwesomeIcon icon={faUpload} className="imgg" />
              <br></br>
              <br></br>
              <div className="button-wrap">
                <label className="new-button" for="upload">
                  <FontAwesomeIcon icon={faUpload} />
                  &nbsp;&nbsp; Select File
                </label>

                <input id="upload" type="file" accept=".mp4" />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UploadVideoModal;
