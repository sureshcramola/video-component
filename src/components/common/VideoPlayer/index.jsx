import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import {
  faPlay,
  faVolumeUp,
  faVolumeMute,
  faPause,
  faExpand,
  faCompress,
  faForward,
  faBackward,
  faPlayCircle
} from "@fortawesome/free-solid-svg-icons";
import { formatTime } from "../../../utils/videoUtils";
import VideoProgressBar from "./VideoProgressBar";
import "./videoplayer.scss";

const VideoPlayer = ({ videoSrc, videoPoster, isControlsVisible }) => {
  const [isPaused, toggleVideoPlay] = useState(true);
  const [isMuted, toggleVideoMute] = useState(false);
  const [isFullscreen, toggleFullScreenMode] = useState(false);
  const [videoProgressValue, setVideoProgress] = useState(0);
  const [duration, setDuration] = useState("00:00");
  const [timeElapsed, setTimeElasped] = useState("00:00");
  const [videoDuration, setVideoDuration] = useState(0);

  // Refs for Video, VideoContainer and ProgressBar Control
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const seekInputRef = useRef(null);
  const initialUpdate = useRef(true);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenExitMode);

    if (videoRef && videoRef.current) {
      videoRef.current.addEventListener("timeupdate", updateVideoProgress);
      videoRef.current.addEventListener("loadedmetadata", initializeVideo);
      videoRef.current.addEventListener("timeupdate", updateTimeElapsed);
    }

    if (seekInputRef && seekInputRef.current) {
      seekInputRef.current.addEventListener("input", skipVideoProgress);
    }

    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullscreenExitMode
      );
      // videoRef.current.removeEventListener("timeupdate", updateVideoProgress);
      // videoRef.current.removeEventListener('loadedmetadata', initializeVideo);
      // videoRef.current.removeEventListener('timeupdate', updateTimeElapsed);
      // seekInputRef.current.removeEventListener('input', skipVideoProgress);
    };
  });

  useEffect(() => {
    isPaused ? videoRef.current.pause() : videoRef.current.play();
  }, [isPaused]);

  useEffect(() => {
    videoRef.current.muted = isMuted;
  }, [isMuted]);

  useLayoutEffect(() => {
    if (initialUpdate.current) {
      initialUpdate.current = false;
      return;
    }
    isFullscreen
      ? videoContainerRef.current.requestFullscreen()
      : document.fullscreen && document.exitFullscreen();
  }, [isFullscreen]);

  const handleFullscreenExitMode = () => {
    !document.fullscreenElement && toggleFullScreenMode(false);
  };

  const initializeVideo = () => {
    const videoDuration = Math.round(videoRef.current.duration);
    const time = formatTime(videoDuration);
    setDuration(time);
    setVideoDuration(videoDuration);
  };

  const updateTimeElapsed = () => {
    const time = videoRef.current && formatTime(Math.round(videoRef.current.currentTime));
    setTimeElasped(time);
  };

  const setVideoPlay = () => {
    toggleVideoPlay(!isPaused);
  };

  const setVideoMute = () => {
    toggleVideoMute(!isMuted);
  };

  const setFullscreenMode = () => {
    toggleFullScreenMode(!isFullscreen);
  };

  const updateVideoProgress = () => {
    var value = videoRef.current && Math.floor(videoRef.current.currentTime);
    if (videoRef.current && videoRef.current.duration === videoRef.current.currentTime) {
      toggleVideoPlay(true);
    }
    setVideoProgress(value);
  };

  const skipVideoProgress = event => {
    const skipTo = event.target.dataset.seek
      ? event.target.dataset.seek
      : event.target.value;
    videoRef.current.currentTime = skipTo;
    setVideoProgress(skipTo);
  };

  const forwardVideo = () => {
    videoRef.current.currentTime = videoRef.current.currentTime + 10;
  };

  const backwardVideo = () => {
    videoRef.current.currentTime = videoRef.current.currentTime - 10;
  };

  const renderControls = () => {
    return (
      <div className="video-controls-wrapper">
        {/* Video Progress Bar */}
        <VideoProgressBar
          videoLength={videoDuration}
          videoProgressValue={videoProgressValue}
          videoProgressBarRef={seekInputRef}
        />
        <div className="d-flex flex-row">
          <div className="video-controls video-controls-left">
            <Button
              variant="link"
              onClick={setVideoPlay}
              data-title={isPaused ? "Play" : "Pause"}
            >
              <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
            </Button>
            <Button
              variant="link"
              onClick={backwardVideo}
              data-title={"backward 10 sec"}
            >
              <FontAwesomeIcon icon={faBackward} />
            </Button>
            <Button
              variant="link"
              onClick={forwardVideo}
              data-title={"forward 10 sec"}
            >
              <FontAwesomeIcon icon={faForward} />
            </Button>
            <Button
              variant="link"
              onClick={setVideoMute}
              data-title={isMuted ? "Unmute" : "Mute"}
            >
              <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
            </Button>
          </div>
          <div className="video-controls video-duration align-self-center">
            <time>{timeElapsed}</time>
            <span> / </span>
            <time>{duration}</time>
          </div>
          <div className="video-controls video-controls-right ml-auto">
            <Button
              variant="link"
              onClick={setFullscreenMode}
              data-title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="video-player-wrapper" ref={videoContainerRef}>
      <div className="video-wrapper">
        <video
          ref={videoRef}
          poster={videoPoster}
          disablePictureInPicture={false}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      {isPaused && (
        <div className="video-over-control">
          <Button variant="link" onClick={setVideoPlay}>
            <FontAwesomeIcon icon={faPlayCircle} />
          </Button>
        </div>
      )}
      {isControlsVisible ? renderControls() : null}
    </div>
  );
};

export default VideoPlayer;
