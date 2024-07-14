import React from "react";

function Mostrarpreciomobil() {
  return (
   <div className="flex justify-center w-[350px]">
     <div className=" border rounded-xl mt-5  hover:border-black hover:bg-stone-100">
      <div className="flex items-center p-3">
        <div>
          <h1 className="font-semibold">Mostrar el precio total</h1>
          <p className="opacity-60 leading-4 mt-1">
            Incluidas todas las tarifas, pero sin contar los impuestos
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height=""
            viewBox="0 0 2048 1280"
          >
            <path
              fill="#999999"
              d="M0 640q0-130 51-248.5t136.5-204T391.5 51T640 0h768q130 0 248.5 51t204 136.5t136.5 204t51 248.5t-51 248.5t-136.5 204t-204 136.5t-248.5 51H640q-130 0-248.5-51t-204-136.5T51 888.5T0 640m1408 512q104 0 198.5-40.5T1770 1002t109.5-163.5T1920 640t-40.5-198.5T1770 278t-163.5-109.5T1408 128t-198.5 40.5T1046 278T936.5 441.5T896 640t40.5 198.5T1046 1002t163.5 109.5T1408 1152"
            />
          </svg>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Mostrarpreciomobil;
