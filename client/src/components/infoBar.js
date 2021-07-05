import React from "react";
import onlineIcon from '../Icons/onlineIcon.png'
import closeIcon from '../Icons/closeIcon.png'

const infoBar = ({room}) => {
  return (
    <div>
      <div>
        <img src={onlineIcon} alt="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div>
        <a href="/">
            <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default infoBar;
