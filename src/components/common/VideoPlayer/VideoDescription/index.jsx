import React, { useState } from "react";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faShare } from '@fortawesome/free-solid-svg-icons';
import VideoShareModal from '../VideoShareModal';
import './videodescription.scss';

const VideoDescription = (props) => {
    const [isVideoLiked, toggleVideoLike] = useState(false);
    const [isVideoDisliked, toggleVideoDisliked] = useState(false);
    const [isVideoShareVisible, toggleVideoShareVisibility] = useState(false);

    const likeVideoHandler = () => {
        toggleVideoLike(!isVideoLiked)
    }

    const dislikeVideoHandler = () => {
        toggleVideoDisliked(!isVideoDisliked)
    }

    const videoShareModalHandler = () => {
        toggleVideoShareVisibility(!isVideoShareVisible)
    }

    return (
        <div className="video-description-wrapper">
            <h1>Sample Video : Beta</h1>
            <div className="video-feedback-controls d-flex justify-content-between align-items-center">
                <div className="left-options">
                    <span className="total-views">12,334 views</span>
                    <span className="publish-date">13 Sept, 2020</span>
                </div>
                <div className="right-feedback-controls">
                    <Button variant="link" onClick={likeVideoHandler} className={isVideoLiked ? 'active': ''}>
                        <FontAwesomeIcon icon={faThumbsUp} /> <span>1.3 M</span>
                    </Button>
                    <Button variant="link" onClick={dislikeVideoHandler} className={isVideoDisliked ? 'active': ''}>
                        <FontAwesomeIcon icon={faThumbsDown} /> <span>1.3 K</span>
                    </Button>
                    <Button variant="link" onClick={videoShareModalHandler}>
                        <FontAwesomeIcon icon={faShare} /> <span>Share</span>
                    </Button>
                </div>
            </div>
            <div className="video-detailed-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <VideoShareModal modalHandler={videoShareModalHandler} videoSrc={'https://youtu.be/QQCtUJgV2b0'} isVisible={isVideoShareVisible} />
        </div>
    )
}

export default VideoDescription;
