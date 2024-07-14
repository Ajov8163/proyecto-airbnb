import React from "react";
import Barracate from "./Barracate";

function BarraMovil() {
  return (
    <div className=" justify-center flex-col items-center bg-white border-b shadow-sm pt-3">
      <div className=" items-center flex  mx-4 rounded-full border shadow-xl h-14 ">
        <div className="m-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06zM10.5 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"/></svg>
        </div>
        <div>
          <h1 className="font-semibold ">¿A dónde quieres ir?</h1>
          <p className="text-sm">En cualquier lugar / Cualquier / ¿cuanto</p>
        </div>
      </div>
      <div className="hidde sm:block w-ful">
        <Barracate />
      </div>
    </div>
  );
}

export default BarraMovil;

