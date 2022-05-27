import logo from "./logo.svg";
import "./App.css";
import Map from "./Comp/Map";
import OverlayChat from "./Comp/OverlayChat";
import "flowbite";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Map></Map>

      <OverlayChat open={open} setOpen={setOpen}></OverlayChat>
      <button
        className="absolute inset-x-0 shadow-xl  w-72 mx-auto border-2 border-red-600 -mt-28 z-10 inline-flex items-center justify-center rounded-none  h-10 transition duration-100 ease-in-out bg-white text-gray-900 font-semibold hover:bg-gray-300 focus:outline-none"
        onClick={() => {
          setOpen(true);
        }}
      >
        Send message to Automat Express
      </button>
    </div>
  );
}

export default App;
