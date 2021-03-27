import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, Form, InputGroup, Button, Toast } from 'react-bootstrap';
import "./videosharemodal.scss";

const VideoShareModal = ({isVisible, modalHandler, videoSrc}) => {
    const copyInputRef = useRef(null);
    const [isCopied, copyVideoLink] = useState(false)

    const copyVideoShareLink = () => {
        copyInputRef.current.select();
        document.execCommand('copy');
        copyVideoLink(true);
    }

    return (
        <>
            <Modal show={isVisible} onHide={modalHandler} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Share Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <InputGroup>
                            <Form.Control type="text" defaultValue={videoSrc} ref={copyInputRef} readOnly />
                            <InputGroup.Append>
                                <Button variant="primary" onClick={copyVideoShareLink}>Copy</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </Modal.Body>
            </Modal>
            {
                <Toast show={isCopied} delay={1000} onClose={() => copyVideoLink(false)} autohide>
                    <Toast.Body><FontAwesomeIcon icon={faCheckCircle} /> Video link copied Successfully</Toast.Body>
                </Toast>
            }
        </>
    )
}

export default VideoShareModal;
