import React, { useState } from "react";
import { Link } from "react-router-dom";

const Barracate = () => {

  
  return (
    <div className="">
      <div className="overflow-x-auto flex justify-between  overflow-hidden mt-2 sm:mt-4 mx-[3%] sm:bg-white text-xs">
        <Link  to={"/"}>
          <div className=" flex flex-col items-center  hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png"
              className="opacity-75"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75">Icónicos</p>
          </div>
        </Link>
        <Link to={"/piscinas"}>
          <div  className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              className="opacity-75"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75   truncate">Piscinas Increíbles</p>
          </div>
        </Link>
        <Link to={"/cabañas"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              className="opacity-75"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75">Cabañas</p>
          </div>
        </Link>
        <Link to={"/minicasas"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              className="opacity-75"
              src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75">Minicasas</p>
          </div>
        </Link>
        <Link to={"/frente"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              className="opacity-75"
              src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75 truncate">Frente al lago</p>
          </div>
        </Link>
        
        <div className=" flex flex-col justify-between items-center hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 "
            src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 ">Surf</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 "
            src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 truncate">Casas rurales</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 "
            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 truncate">Vistas increíbles</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 "
            src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 ">Cúpulas</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75  truncate">Frente a la playa</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 "
            src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 truncate">Casas de árbol</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 "
            src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75">Mansiones</p>
        </div>
      
        
       
      </div>
    </div>
  );
};

export default Barracate;
