import React from "react";
import firebase from "firebase/compat/app";
import { useState, useEffect } from "react";

// const [user, setUser] = useState(null);

// useEffect(() => {
//   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//     setUser(user);
//     console.log(user);
//     user ? console.log("usuario logeado") : console.log("usuario no logeado");
//   });
//   return unsubscribe;
// }, []);

export const Login = ({cerrar}) => {

  
  
  return (
    <div className=" bg-[#2c2c2c73] backdrop-blur-sm flex justify-center  w-full h-full   top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2  fixed ">
      <div className="  w-full max-w-md max-h-full items-center flex ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
          <div className="flex justify-start gap-16 items-center p-5">
            <button onClick={cerrar}
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
            <h5 className="font-semibold">Iniciar sesión</h5>
          </div>

          <div className="p-4 ">
            <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
              Te damos la bienvenida a Airbnb
            </h5>
            <form className="space-y-4" action="#">
              <div>
                <input
                  type="email"
                  name="email"
                  id="emaillog"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Correo"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="passwordlog"
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
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
