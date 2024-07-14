import React from "react";
import { NavbarPaginas } from "../../components/compoCatego/Navbarpaginas";
import Map from "../../components/maps/mapa";
const Crea = () => {
  return (
    <div>
      <NavbarPaginas />
      <hr />
      <div className="flex  flex-col mt-6 items-center ">
        <div className="flex   items-center w-[1030px] justify-between mb-8">
          <div>
            <h1 className="font-bold text-3xl">
              Crea pensamientos centrales con Intensa-Mente 2
            </h1>
          </div>
          <div className="flex font-bold gap-5 underline">
            <div className="flex items-center gap-2">
              <img
                className="w-4 h-4"
                src={"https://cdn-icons-png.flaticon.com/128/8113/8113021.png"}
              />
              <p>Compatir</p>
            </div>
            <div className="flex items-center gap-2 ">
              <img
                className="w-4 h-4"
                src={"https://cdn-icons-png.flaticon.com/128/2027/2027396.png"}
              />
              <p>Guardar</p>
            </div>
          </div>
        </div>

        <img
          className="w-[68%] rounded-xl"
          src={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=1440&im_q=highq"
          }
        />
        <div className="flex w-2/3 mb-20">
          <div className="w-[55%]">
            <div className="py-5 border-b">
              <h1 className="font-semibold text-2xl">
                Las Vegas, Nevada, Estados Unidos
              </h1>
              <p className="opacity-70 text-xl">
                huéspedes2 habitaciones2 camas2 baños
              </p>
            </div>
            <div className="flex gap-5 py-5 border-b items-center">
              <div>
                <img
                  className="w-10 rounded-full"
                  src="https://a0.muscache.com/im/pictures/user/User-571407812/original/d3298ae6-1ea8-494c-a001-d00e59ed0935.jpeg?im_w=240"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold text-xl ">Anfitríon: Joy</h1>
                <p className="opacity-70 text-s">Emocion</p>
              </div>
            </div>
            <div className="gap-5 flex flex-col border-b py-9 ">
              <div className="flex gap-7">
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#000000"
                        d="M6 6C4.355 6 3 7.355 3 9v6.78c-.61.552-1 1.342-1 2.22v9h5v-2h18v2h5v-9c0-.878-.39-1.668-1-2.22V9c0-1.645-1.355-3-3-3zm0 2h20c.555 0 1 .445 1 1v6h-2v-1c0-1.645-1.355-3-3-3h-4c-.767 0-1.467.3-2 .78a2.985 2.985 0 0 0-2-.78h-4c-1.645 0-3 1.355-3 3v1H5V9c0-.555.445-1 1-1m4 5h4c.555 0 1 .445 1 1v1H9v-1c0-.555.445-1 1-1m8 0h4c.555 0 1 .445 1 1v1h-6v-1c0-.555.445-1 1-1M5 17h22c.555 0 1 .445 1 1v7h-1v-2H5v2H4v-7c0-.555.445-1 1-1"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">
                    ¡Manda a dormir a tu ansiedad!
                  </h1>
                  <p className="opacity-70">
                    Sientas alegría o ansiedad, ¡hay una habitación perfecta
                    para ti!
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#000000" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/></svg>
                  </div>
                </div>
                <div className="w-[490px]">
                  <h1 className="font-semibold">
                  ¡Haz una búsqueda del tesoro emocional!
                  </h1>
                  <p className="opacity-70 whitespace-nowrap overflow-hidden text-ellipsis">
                  Las pistas te esperan dentro de maletas reales, cada una con su propia carga emocional
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 14 14"><g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"><path d="M.5.5v2.25a2.5 2.5 0 0 0 5 0V.5M3 .5v13m10.5 0a6.5 6.5 0 0 1 0-13"/><path d="M13.5 10.5a3.5 3.5 0 0 1 0-7"/></g></svg>
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold">
                  ¡Disfruta de un festival de pizza!
                  </h1>
                  <p className="opacity-70">
                  Cada ingrediente representa un estado de ánimo.
                  </p>
                </div>
              </div>
              <div className="flex gap-7">
                <div>
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12c4.5 0 9-4.5 9-9c0 4.5 4.5 9 9 9c-4.5 0-9 4.5-9 9c0-4.5-4.5-9-9-9m-1 7.5c.833 0 2.5-1.667 2.5-2.5c0 .833 1.667 2.5 2.5 2.5c-.833 0-2.5 1.667-2.5 2.5c0-.833-1.667-2.5-2.5-2.5M16 5c1 0 3-2 3-3c0 1 2 3 3 3c-1 0-3 2-3 3c0-1-2-3-3-3" color="#000000"/></svg>
                  </div>
                </div>
                <div  className="w-[490px]">
                  <h1 className="font-semibold">
                  ¡Crea tu propia esfera de pensamiento!
                  </h1>
                  <p className="opacity-70opacity-70 whitespace-nowrap overflow-hidden text-ellipsis">
                  Diseña una esfera para guardar tu pensamiento central y llévatela a casa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[45%] flex justify-end ">
            <div className="flex border justify-center w-[400px] h-[180px] items-center  rounded-xl shadow-lg  mt-7 ">
              <div className="flex justify-center items-center flex-col">
                <h1 className="font-semibold text-2xl mb-3">Agotada</h1>
                <button className="boder bg-gray-400 text-white py-4 px-24 rounded-xl">
                  Solicitar
                </button>
              </div>
            </div>
          </div>
        </div>
        <Map />
      </div>
    </div>
    
  );
};

export default Crea;
