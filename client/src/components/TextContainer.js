import React from 'react';
import onlineIcon from '../Icons/onlineIcon.png';

const TextContainer = ({users}) => {
    return (
        <div className="hidden lg:block ml-2">
        <div>
          <h1>A Realtime Chat App <span role="img" aria-label="emoji">💬</span></h1>
          <h2>Created with React, Express, Node and Socket.IO</h2>
        </div>
        {
          users
            ? (
              <div>
                <h1>People currently chatting:</h1>
                <div>
                  <h2>
                    {users.map(({name}) => (
                      <div key={name}>
                        <img alt="Online Icon" src={onlineIcon} className='inline-block mr-1'/>
                        {name}
                      </div>
                    ))}
                  </h2>
                </div>
              </div>
            )
            : null
        }
      </div>
    )
}

export default TextContainer
