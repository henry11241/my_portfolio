"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styles from "./YoutubePlayer.module.css";

export default function YoutubePlayer() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    // event.target.setVolume = 20;
  };

  const opts: YouTubeProps["opts"] = {
    height: "500",
    width: "670",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      mute: 1,
    },
  };

  return (
    <div className={styles.responsiveVideo}>
      <YouTube videoId="_1DVqRYSGM4" opts={opts} onReady={onPlayerReady} />
    </div>
  );
}
