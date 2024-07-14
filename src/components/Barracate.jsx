import React from "react";
import { Link } from "react-router-dom";

const Barracate = () => {
  return (
    <div>
      <div className="flex justify-between overflow-hidden mt-8 mx-[3%]">
        <Link to={"/"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              className="opacity-75 image"
              src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75 texx">Icónicos</p>
          </div>
        </Link>
        <Link to={"/piscinas"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              className="opacity-75 image"
              src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75 texx">Piscinas Increíbles</p>
          </div>
        </Link>
        <Link to={"/cabañas"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              className="opacity-75 image"
              src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75 texx">Cabañas</p>
          </div>
        </Link>
        <Link to={"/minicasas"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              className="opacity-75 image"
              src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75 texx">Minicasas</p>
          </div>
        </Link>
        <Link to={"/frente"}>
          <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
            <img
              className="opacity-75 image"
              src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
              alt=""
              width={30}
            />
            <p className="font-medium opacity-75 texx">Frente al lago</p>
          </div>
        </Link>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Surf</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Casas rurales</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Vistas increíbles</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Cúpulas</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Frente a la playa</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Casas de árbol</p>
        </div>
        <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Mansiones</p>
        </div>
        {/* <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Habitaciones</p>
        </div> */}
        {/* <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Islas</p>
        </div> */}
        {/* <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Granjas</p>
        </div> */}
        {/* <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Castillos</p>
        </div> */}
        {/* <div className=" flex flex-col items-center cont hover:bg-slate-100 w-fit p-3 rounded-md cursor-pointer">
          <img
            className="opacity-75 image"
            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            alt=""
            width={30}
          />
          <p className="font-medium opacity-75 texx">Impresionantes</p>
        </div> */}
      </div>
    </div>
  );
};

export default Barracate;
