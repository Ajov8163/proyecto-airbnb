import React from "react";
import { Link } from "react-router-dom";

const Popuppago = () => {
  return (
    <div className=" flex  justify-center items-center w-full h-full  top-1/2 left-1/2 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 z-40 fixed ">
      <div className="border rounded-xl w-4/12 h-72 bg-white shadow-xl ">
        <div className="flex justify-center items-center p-7 flex-col text-center">
          <div className="bg-green-200 rounded-full w-12 h-12 flex justify-center items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#16A34A"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7L10 17l-5-5"
              />
            </svg>
          </div>
          <div className="font-semibold text-xl mb-3">
            <h1>Pago exitoso !</h1>
          </div>
          <div>
            <h1>
              Gracias por reservar con{" "}
              <span className="text-rose-500 font-semibold">Airbnb</span>
              <br /> Disfruta tu estadia{" "}
            </h1>
          </div>
          <div className="flex justify-center py-4">
            <Link to={"/"}>
              <button className="bg-rose-500 rounded-lg py-2 px-28 font-semibold text-white">
                Volver al inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popuppago;
