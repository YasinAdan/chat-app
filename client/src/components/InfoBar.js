import React from 'react';
import onlineIcon from '../Icons/onlineIcon.png';
import closeIcon from '../Icons/closeIcon.png';


const InfoBar = ({ room, name }) => (
  <div className="w-full flex justify-start bg-blue-500 rounded">
    <div className="flex justify-start items-center p-1">
      <img src={onlineIcon} alt="online icon" />
      <h3 className='pl-1 text-2xl text-white'>{name}</h3>
    </div>
    <div className='w-full flex justify-center items-center'>
      <p className='text-2xl text-white'>{room}</p>
    </div>
    <div className="flex justify-end items-center" >
      <a href="/"><img src={closeIcon} alt="close icon"/></a>
    </div>
  </div>
);

export default InfoBar;