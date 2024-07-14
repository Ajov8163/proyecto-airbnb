import React, { useState } from "react";
import Login from "./login";
import Registro from "./Registro";

const Registroinicio = ({ cierra }) => {
  const [geto, setGeto] = useState(false);

  const abrir = () => {
    setGeto(true);
  };
  const cerrar = () => {
    setGeto(false);
  };

  const [registro, setRegistro] = useState(false);

  const abrir1 = () => {
    setRegistro(true);
  };
  const cerrar1 = () => {
    setRegistro(false);
  };

  return (
    <div className=" bg-slate-100 rounded-lg shadow-lg dark:bg-gray-700 flex-col flex w-64  mt-24 mr-20 z-40 absolute -top-2 -right-3">
      {geto && <Login cerrar={cerrar} />}
      {registro && <Registro cerrar={cerrar1} />}
      <div className="p-5 flex flex-col justify-center gap-3 border-b ">
        <div onClick={abrir} className="hover:bg-stone-200 hover:rounded-md">
          {" "}
          <h1 className="hover:font-semibold cursor-pointer px-2">Inicia sesion</h1>
        </div>
        <div onClick={abrir1}  className="hover:bg-stone-200 hover:rounded-md">
          {" "}
          <h1 className="hover:font-semibold cursor-pointer px-2">Registrate</h1>
        </div>
      </div>
      <div className="p-5 flex flex-col justify-center gap-3 ">
        <div  className="hover:bg-stone-200 hover:rounded-md">
          {" "}
        </div>
        <a href="https://www.airbnb.com.co/host/homes"><h1 className="hover:font-semibold cursor-pointer px-2">Pon tu esopacio en Airbnb </h1></a>
          
        <div className="hover:bg-stone-200 hover:rounded-md">
          {" "}
          <a href="https://www.airbnb.com.co/help"><h1 className="hover:font-semibold cursor-pointer px-2">Centro de ayuda</h1></a>
          
        </div>
      </div>
    </div>
  );
};

export default Registroinicio;
