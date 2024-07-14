import Logo from "../../assets/img/logo.png";
import Mundo from "../../assets/img/mundo.png";
import Menu from "../../assets/img/menu.png";
import Usuario from "../../assets/img/usuario.png";
import { useState } from "react";
import Login from "../login";
import img from "../../assets/img/buscar.png";
import img1 from "../../assets/img/linea.png";
import { Link } from "react-router-dom";
import Registroinicio from "../registroeinicio";

export const NavbarPaginas = () => {


  const [sesion, setSesion] = useState(false);

  const toggle = () => {
    setSesion(!sesion);
  }

  return (
    <div className="flex items-center justify-between px-16 py-1 mx-[180px] mb-5">
      {sesion && <Registroinicio toggle={toggle}/>}
     <Link to={"/"}>
     <div className="flex items-center justify-start ">
        <img className="w-8 " src={Logo} />
        <h1 className="text-rose-500 text-xl font-bold">airbnb</h1>
      </div>
     </Link>
      <div className="flex gap-4 text-sm font-semibold border rounded-full py-1 px-4 shadow-md">
        <h2>En cualquier lugar del mundo</h2>
        <img className="opacity-90" src={img1} alt="" width={10} />
        <h2>Cualquier semana</h2>
        <div className="flex gap-4">
          <h1 className="opacity-65">¿Cuantos?</h1>
          <div className="bg-rose-500 flex justify-center items-center  w-6 h-6  rounded-full ">
            <img className="w-[12px] h-[12px] flex " src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5 text-sm font-semibold ">
        <h2>Pon tu espacio en Airbnb</h2>
        <div>
          <img className="w-4 " src={Mundo} />
        </div>
        <div
         onClick={toggle}
          className="registro flex gap-6 items-center 
 border-2 border-grey rounded-full w-20 py-2 justify-center cursor-pointer hover:shadow-md ease-in-out duration-300 "
        >
          <div>
            <img className="w-3 " src={Menu} />
          </div>
          <div>
            <img className="w-6 " src={Usuario} />
          </div>
        </div>
      </div>
    </div>
  );
};
