import React from "react";
import img from "../assets/img/buscar.png";
import img1 from "../assets/img/linea.png";

const Barrabusqueda = () => {
  return (
    <div className=" flex justify-center mt-5 mb-10 px-16">
      <div className=" flex items-center border  rounded-full  shadow-md">
        <div className="hover:bg-[#EBEBEB] px-10 py-5 rounded-full cursor-pointer">
          <p className="flex flex-col font-semibold mr-36">
            <p> Dónde</p>
            <p className="opacity-60">Explora destinos</p>
          </p>
        </div>
        <img className="opacity-55" src={img1} alt="" width={40} />
       <div className="hover:bg-[#EBEBEB] px-10 py-5 rounded-full cursor-pointer">
       <p className="flex flex-col font-semibold">
          <p> Llegada</p>
          <p className="opacity-60">Agregar Fech...</p>
        </p>
       </div>
        <img className="opacity-55" src={img1} alt="" width={40} />
        <div className="hover:bg-[#EBEBEB] px-10 py-5 rounded-full cursor-pointer">
        <p className="flex flex-col font-semibold">
          <p> Salida</p>
          <p className="opacity-60">Agregar Fech...</p>
        </p>
        </div>
        <img className="opacity-55" src={img1} alt="" width={40} />
        <div className="hover:bg-[#EBEBEB] px-5 py-3.5 rounded-full cursor-pointer flex items-center">
        <p className=" font-semibold mr-16">
          <p>Quién</p>
          <p className="opacity-60">¿Cuantos?</p>
        </p>
        <div className="bg-rose-500 flex items-center gap-2 py-4 px-6 rounded-full ">
          <img className="w-[20px] h-[20px] flex " src={img} alt="" />
          <p className="text-white text-xl font-bold">Buscar</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Barrabusqueda;
