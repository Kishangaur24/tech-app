import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = () => {
  // Replace 'VIDEO_ID' with the ID of your YouTube video
  const videoId = 'Bj6j1Fq9JIA';

  // Options for the YouTube player (e.g., player height, width, etc.)
  const opts = {
    height: '350',
    width: '450',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Change to 1 to autoplay
    },
  };

  // Function to handle when the video player is ready
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo(); // For example, you can call pauseVideo() here
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default YouTubeVideo;
