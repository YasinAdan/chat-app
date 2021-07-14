import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from "./Message";

const Messages = ({ messages, name }) => {
  return (

    <ScrollToBottom className='h-96 bg-gray-100'>

      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;