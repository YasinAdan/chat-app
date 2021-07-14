import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({message: {text, user}, name}) => {
    let sentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName) {
        sentByCurrentUser = true;
    }

    return (
        sentByCurrentUser ? (
            <div className="flex justify-end items-center ml-20">
            <p className="italic mr-2">{trimmedName}</p>
            <div className="bg-blue-500 rounded-md p-3 mx-1 mt-1">
              <p className="text-white">{ReactEmoji.emojify(text)}</p>
            </div>
          </div>
          )
          : (
            <div className="ml-1 flex justify-start items-center mr-20">
              <p className="text-black italic mr-2">{user}</p>
              <div className="bg-gray-200 rounded-md p-3 mx-1 mt-1">
                <p className="text-black">{ReactEmoji.emojify(text)}</p>
              </div>
            </div>
          )
    )
}

export default Message
