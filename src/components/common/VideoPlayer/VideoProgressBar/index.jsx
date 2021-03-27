import React from "react";
import './videoprogressbar.scss';

const VideoProgressBar = ({ videoProgressValue, videoLength, videoProgressBarRef}) => {
    return (
        <div className="video-controls video-progress-wrapper">
            <progress
                value={videoProgressValue}
                min="0"
                max={videoLength}
            />
            <input
                className="seek-input"
                value={videoProgressValue}
                min="0"
                type="range"
                max={videoLength}
                step="1"
                ref={videoProgressBarRef}
                readOnly
            />
        </div>
    )
}

export default VideoProgressBar;