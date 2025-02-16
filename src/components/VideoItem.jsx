import React from "react";

const VideoItem = ({ index, title, img }) => {
  return (
    <div className="col-lg-4">
      <div className="videoCard">
        <img src={img} alt={`${index} Video`} />
        <div>
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              width={20}
              height={20}
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>
          </a>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;