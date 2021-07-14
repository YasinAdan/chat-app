import React from 'react';

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className='flex justify-center'>
            <input
                className='w-10/12 p-4 outline-none rounded-bl'
                type='text'
                placeholder='Type a message...'
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} 
            />
            <button className='flex justify-center w-2/12 bg-blue-500 p-4 text-center text-white rounded-br' onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input
