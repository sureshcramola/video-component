import React, { Component } from "react";
import UploadVideoModal from "../../components/common/UploadVideoModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

import "./channelpage.scss";

class ChannelPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="center">
            <FontAwesomeIcon icon={faVideo} className="img1" />
            <br></br>
            <br></br>

            <UploadVideoModal />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ChannelPage;
