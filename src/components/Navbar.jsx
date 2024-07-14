import Logo from "../assets/img/logo.png";
import Mundo from "../assets/img/mundo.png";
import Menu from "../assets/img/menu.png";
import Usuario from "../assets/img/usuario.png";
import { useState } from "react";
import Registroinicio from "./registroeinicio";


export const Navbar = () => {


  const [sesion, setSesion] = useState(false);

  const toggle = () => {
    setSesion(!sesion);
  }
  


  return (
    <div className="flex items-center justify-between px-16 py-2 gap-48 ">
      {sesion && <Registroinicio toggle={toggle}/>}
      <div className="flex items-center justify-start ">
        <img className="w-14 " src={Logo} />
        <h1 className="text-rose-500 text-3xl font-semibold">airbnb</h1>
      </div>
      <div className="flex gap-12 font text-2xl font-semibold cursor-pointer">
        <h2>Estadías</h2>
        <h2 className="opacity-70 font-normal cursor-pointer">Experiencias</h2>
      </div>
      <div className="flex items-center gap-5 text-lg font-semibold cursor-pointer">
        <h2>Pon tu espacio en Airbnb</h2>
        <div>
          <img className="w-6 " src={Mundo} />
        </div>
        <div
          onClick={toggle}
          className="registro flex gap-6 items-center 
 border-2 border-grey rounded-full w-28 py-3 justify-center cursor-pointer hover:shadow-md ease-in-out duration-300 "
        >
          <div>
            <img className="w-4 " src={Menu} />
          </div>
          <div>
            <img className="w-8 " src={Usuario} />
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
};
