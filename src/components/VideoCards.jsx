import React from "react";
import VideoItem from "./VideoItem";

const VideoCards = ({ videosCard }) => {
  return (
    <div className="container">
      <div className="row">
        {videosCard.map((item, index) => (
          <VideoItem
            key={item.img}
            index={index}
            title={item.name}
            img={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCards;