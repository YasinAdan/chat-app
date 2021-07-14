import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="h-screen bg-gray-900 border-2 flex flex-col justify-center items-center">
      <div>
        <h1 className="text-5xl text-black text-center mb-4 border-b-4 pb-2 text-gray-100">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="bg-gray-200 p-2 rounded"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="bg-gray-200 p-2 rounded mt-5"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
          className='flex justify-center'
        >
          <button className='bg-gray-200 hover:bg-gray-600 hover:text-gray-100 mt-5 p-2 px-6 rounded' type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
