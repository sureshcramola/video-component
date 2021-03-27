import React from "react";
import { Row, Col } from "react-bootstrap";
import VideoPlayer from "../../components/common/VideoPlayer";
import VideoDescription from "../../components/common/VideoPlayer/VideoDescription";
import VideoComments from "../../components/common/VideoComments";
import RelatedVideos from "../../components/RelatedVideos";
import "./videodetail.scss";

const VideoDetail = () => {
    return (
        <div className="video-detail-wrapper">
            <Row>
                <Col xs={12} md={7} lg={8} xl={9}>
                    <VideoPlayer
                        videoSrc={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'}
                        videoPoster={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg'}
                        isControlsVisible
                    />
                    <VideoDescription />
                    <VideoComments />
                </Col>
                <Col xs={12} md={5} lg={4} xl={3}>
                    <RelatedVideos />
                </Col>
            </Row>
        </div>
    )
}

export default VideoDetail;
