import React, {useState} from "react";


export const Registro = ({ cerrar }) => {


  return (
    <div onClick={cerrar} className=" bg-[#2c2c2c73] flex justify-center  w-full h-full  top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-40 fixed ">
      <div className="  w-full max-w-md max-h-full items-center flex">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-start gap-20 items-center p-5">
            <button
              
              type="button"
              className=" text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white mr-16"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <h5 className="font-semibold">Registrase</h5>
          </div>

          <div className="p-4 md:p-5">
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
              Te damos la bienvenida a Airbnb
            </h5>
            <form className="space-y-4" action="#">
              <div>
                <input
                  type="name"
                  name="name"
                  id="namereg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="emaireg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Correo"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="passwordreg"
                  placeholder="Contraseña"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                <p className="text-[11px]">
                  Te vamos a confirmar el número por teléfono o mensaje de
                  texto. Sujeto a las tarifas estándar para mensajes y datos.
                  <span className="font-semibold underline cursor-pointer">
                    Política de privacidad
                  </span>
                </p>
              </div> 
              <button
                type="submit"
                className="w-full text-white bg-rose-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Registrarse
              </button>
              <div className="font-bold gap-2 flex flex-col text-sm ">
                <div className="border border-black rounded-md p-2  flex items-center gap-24 cursor-pointer">
                  <img
                    className="w-5"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYfRZOfRyyDskFIvBevwSIXv7vDjxMRl7_Jg&s"
                    alt=""
                  />
                  <p>Continúa con facebook</p>
                </div>
                <div className="border border-black rounded-md p-2  flex items-center gap-24 cursor-pointer">
                  <img
                    className="w-5"
                    src="https://e7.pngegg.com/pngimages/760/624/png-clipart-google-logo-google-search-advertising-google-company-text-thumbnail.png"
                    alt=""
                  />
                  <p>Continúa con Google</p>
                </div>
                <div className="border border-black rounded-md p-2  flex items-center gap-24 cursor-pointer">
                  <img
                    className="w-5"
                    src="https://w7.pngwing.com/pngs/775/812/png-transparent-apple-logo-apple-logo-cupertino-company-apple-iphone-electronics-leaf-computer-thumbnail.png"
                    alt=""
                  />
                  <p>Continúa con Apple</p>
                </div>
                <div className=" border border-black rounded-md p-2  flex items-center gap-12 cursor-pointer">
                  <img
                    className="w-5"
                    src="https://cdn-icons-png.freepik.com/512/9034/9034199.png"
                    alt=""
                  />
                  <p>Continúa con el correo electrónico</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
