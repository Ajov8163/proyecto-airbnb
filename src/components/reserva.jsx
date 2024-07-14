import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Reserva = () => {
  const State = {
    fecha: new Date(),
  };
  const [fecha, setFecha] = useState(new Date());
  const [fecha2, setFecha2] = useState(new Date());

  return (
    <div className="flex border justify-center  items-center  rounded-xl shadow-lg  mt-7 sm:w-[420px]    w-full">
      <div className="flex justify-center items-center flex-col sm:p-5 p-3 w-full">
        <div className="flex sm:w-[376px] justify-between w-full  sm:mb-3 items-end pb-3">
          <h1 className="font-semibold sm:text-xl line-through opacity-60">
            $1,567,970 COP{" "}
          </h1>
          <h1 className="font-semibold sm:text-xl ">
            $910,000 COP
            <span className="text-xl opacity-70"> noche</span>
          </h1>
        </div>
        <div className="mb-5 w-full ">
          <div className="flex border rounded-t-xl border-slate-400  ">
            <div className="border-r sm:w-[188px] p-2 border-slate-400 ">
              <p className="text-sm font-semibold">Llegada</p>
              <DatePicker
              className="w-full"
                selected={fecha}
                onChange={(date) => setFecha(date)}
              />
            </div>
            <div className=" sm:w-[188px] p-2 ">
              <p className="text-sm font-semibold">Salida</p>
              <DatePicker
               className="w-full"
                selected={fecha2}
                onChange={(date) => setFecha2(date)}
              />
            </div>
          </div>
          <div>
            <div className="border sm:w-[378px] p-2 border-slate-400 rounded-b-xl">
              <p className="text-sm font-semibold">Huéspedes</p>
              <input
                className=" w-60"
                type="number"
                min="0"
                value={State.adultos}
                onChange={(e) =>
                  setState({ ...State, adultos: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <Link to={"/pago"}>
          <button className="boder bg-rose-500 text-white  py-4 sm:w-[376px] px-[130px]  rounded-xl sm:text-xl font-semibold">
            Reserva
          </button>
        </Link>
        <p className="mt-3 text-sm sm:text-base">No se hará ningún cargo por el momento</p>
        <div className="flex mt-4 sm:w-[370px] justify-between">
          <p className="text-lg underline">$910,000 COP x 5 noches</p>
          <p className="text-lg">$4,550,000 COP</p>
        </div>
        <div className="flex mt-4 sm:w-[370px] justify-between border-b pb-8">
          <p className="text-lg underline">Tarifa por servicio de Airbnb</p>
          <p className="text-lg">$764,403 COP</p>
        </div>
        <div>
          <p className="sm:text-lg sm:font-bold font-semibold py-5">
            Total sin incluir impuestos $5,314,403 COP
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reserva;
