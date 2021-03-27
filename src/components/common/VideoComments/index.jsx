import React, { Component } from "react";
import { Button, FormControl, Row, Col } from "react-bootstrap";
import "./videocomments.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faReply
} from "@fortawesome/free-solid-svg-icons";

class VideoComments extends Component {
  render() {
    return (
      <>
        <div className="comments-wrapper">
          <p>Comments</p>
          <hr className="hr" />

          <div>
            <Row>
              <Col md={12}>
                <div className="d-flex flex-column post-comment-card">
                  <div className="d-flex flex-row align-items-start">
                    <img
                      className="rounded-circle m-2"
                      alt=""
                      src="https://i.imgur.com/RpzrMR2.jpg"
                      height="40"
                      width="40"
                    />
                    <FormControl
                      as="textarea"
                      rows="3"
                      placeholder="Write your Comment here....."
                      resize={"false"}
                    />
                  </div>
                  <div className="mt-3 text-right">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    &nbsp;
                    <Button variant="primary" type="submit">
                      Cancel
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <div className=" mt-3">
              <Row>
                <Col md={12}>
                  <div className="d-flex flex-column user-comment-card">
                    <div className="user-comment-body">
                      <div className="d-flex user-info">
                        <img
                          className="rounded-circle"
                          src="https://i.imgur.com/RpzrMR2.jpg"
                          width="40"
                          height="40"
                          alt=""
                        />
                        <div className="d-flex flex-column justify-content-start ml-2">
                          <span className="d-block font-weight-bold user-name">
                            Marry Andrews
                          </span>
                          <span className="comment-post-date">
                            10 min ago - Jan 2020
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="comment-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      <div className="d-flex">
                        <div className="comment-icon">
                          <FontAwesomeIcon icon={faThumbsUp} />
                          <span className="ml-1">Like</span>
                        </div>
                        <div className="comment-icon">
                          <FontAwesomeIcon icon={faThumbsDown} />
                          <span className="ml-1">Dislike</span>
                        </div>
                        <div className="comment-icon">
                          <FontAwesomeIcon icon={faReply} />
                          <span className="ml-1">Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column user-comment-card user-comment-card-nested  mt-4 ">
                    <div className="user-comment-body">
                      <div className="d-flex flex-row user-info">
                        <img
                          className="rounded-circle"
                          src="https://i.imgur.com/RpzrMR2.jpg"
                          alt=""
                          width="40"
                          height="40"
                        />
                        <div className="d-flex flex-column justify-content-start ml-2">
                          <span className="d-block font-weight-bold user-name">
                            Nick James
                          </span>
                          <span className="comment-post-date">
                            4 hrs ago - Jan 2020
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="comment-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      <div>
                        <div className="d-flex">
                          <div className="comment-icon">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span className="ml-1">Like</span>
                          </div>
                          <div className="comment-icon">
                            <FontAwesomeIcon icon={faThumbsDown} />
                            <span className="ml-1">Dislike</span>
                          </div>
                          <div className="comment-icon">
                            <FontAwesomeIcon icon={faReply} />
                            <span className="ml-1">Reply</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default VideoComments;
