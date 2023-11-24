import React from "react";
import { Outlet, Link } from "react-router-dom";
import RoundButton from "./components/RoundButton";
import "./index.css";

function App() {
  return (
    <div>
      <div className="bg-black text-white h-header flex items-center font-primary relative">
        <nav className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link
            to="/band"
            className="w-40 flex items-center justify-center text-lg hover:text-shaolinRed duration-300"
          >
            A BANDA
          </Link>
          <Link
            to="/band"
            className="w-40 flex items-center justify-center text-lg hover:text-shaolinRed duration-300"
          >
            CONTRATAR
          </Link>
          <Link
            to="/"
            className="text-shaolinRed flex flex-col items-center w-min font-medium text-4xl cursor-pointer select-none"
          >
            <h1>SHAOLIN</h1>
            <h2>MONKEYS</h2>
          </Link>
          <Link
            to="/band"
            className="w-40 flex items-center justify-center text-lg hover:text-shaolinRed duration-300"
          >
            AGENDA
          </Link>
          <Link
            to="/band"
            className="w-40 flex items-center justify-center text-lg hover:text-shaolinRed duration-300"
          >
            MÍDIA
          </Link>
        </nav>
        <div className="absolute right-64">
          <RoundButton
            text="@USESHAOLIN"
            link="https://www.instagram.com/useshaolin/"
            target="_blank"
          ></RoundButton>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
