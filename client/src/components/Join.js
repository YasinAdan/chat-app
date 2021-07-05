import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Join = () => {
  const [ name, setName ] = useState("");
  const [ room, setRoom ] = useState("");

  return (
    <div class="h-screen flex flex-col items-center justify-center bg-gray-900 mb-8">
      <div className="w-40 divide-y-4 divide-white mb-4">
        <p className="flex justify-center text-white text-4xl">Join</p>
        <p></p>
      </div>
      <form class="w-1/2 flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="">
          <label for="name" className="block text-sm font-bold">
            Name:
          </label>

          <input
            type="text"
            className="w-full bg-gray-100 rounded py-3 
            placeholder-blue-400 border border-transparent 
            focus:outline-none focus:ring-2 focus:ring-blue-600 
            focus:border-transparent"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>

        <div className="mt-2">
          <label for="room" className="block text-sm font-bold">
            Room:
          </label>

          <input
            type="text"
            className="w-full bg-gray-100 rounded py-3 
            placeholder-blue-400 border border-transparent 
            focus:outline-none focus:ring-2 focus:ring-blue-600 
            focus:border-transparent"
            id="room"
            placeholder="Room"
            onChange={(e) => setRoom(e.target.value)}
          ></input>
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 
        text-white font-bold py-2 px-4 border-b-4 border-blue-700 
        hover:border-blue-500 rounded mt-8"
          >
            Sign-in
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Join;
