"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function YoutubePlayer() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
    // event.target.setVolume = 20;
  };

  const opts: YouTubeProps["opts"] = {
    height: "600px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      mute: 1,
      start: 156,
    },

  };

  return (
    <div className="relative z-10">
      <YouTube videoId="_1DVqRYSGM4" opts={opts} onReady={onPlayerReady} />
    </div>
  );
}
