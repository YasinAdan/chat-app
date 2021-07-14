import React from 'react';

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className='rounded-b-lg'>
            <input
                className='w-10/12 p-4 outline-none'
                type='text'
                placeholder='Type a message...'
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} 
            />
            <button className='w-2/12 bg-blue-500 p-4 text-white' onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input
