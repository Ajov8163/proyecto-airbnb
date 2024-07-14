import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popuppago from "../components/popup-pago";

const Pago = () => {
  const [popuppago, setPopuppago] = useState(false);

  const abre = () => {
    setPopuppago(true);
  };
  const cierra = () => {
    setPopuppago(false);
  };

  return (
    <div>
      {popuppago && <Popuppago cierra={cierra} />}
      <div seccion1 className="px-10 border-b hidden sm:block">
        <div className="w-36 ">
          <img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" />
        </div>
      </div>
      <div>
        <div
          seccion2
          className="flex items-end sm:gap-4 gap-24 sm:py-16 p-4 px-22 sm:mx-32"
        >
          <div className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
              />
            </svg>
          </div>
          <div className="hidden sm:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
              />
            </svg>
          </div>
          <div className=" w-full ">
            <h1 className=" sm:text-4xl  font-semibold">Solicita reservar</h1>
          </div>
        </div>
      </div>
      <div seccion3 className="sm:mx-32 sm:px-24 sm:flex sm:mb-28 flex flex-col-reverse sm:flex-row">
        <div seccion31 className="sm:w-1/2  px-6">
          <div className="hidden sm:block">
            <div className="flex  border rounded-xl p-4">
              <div>
                <h1 className="font-semibold text-xl mb-3">¡Buen precio!</h1>
                <p className="text-lg leading-6">
                  El precio en las fechas que elegiste es $152,730 COP más bajo
                  que la tarifa promedio por noche de los últimos 3 meses.
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#e11d48"
                    d="M511.974 271.891a47.744 47.744 0 0 0-14.706-33.008L311.57 57.98a29.9 29.9 0 0 0-21.2-8.731h-33.142l217.754 212.6l.092.088a15.907 15.907 0 0 1 .741 22.337l-156.4 173.355l21.953 21.356L499.447 305.85a47.748 47.748 0 0 0 12.527-33.959"
                  />
                  <path
                    fill="#e11d48"
                    d="M426.9 283.161a23.924 23.924 0 0 0-5.231-24.742c-.106-.111-.2-.231-.306-.34L224.307 57.716l-.094-.094a31.791 31.791 0 0 0-22.628-9.373H60.194A44.244 44.244 0 0 0 16 92.443v141.1a32.121 32.121 0 0 0 10.045 23.28l210.32 200.2l.077.073a23.817 23.817 0 0 0 16.409 6.508q.447 0 .9-.017a24.111 24.111 0 0 0 6.741-1.217a23.854 23.854 0 0 0 10.047-6.517l151.444-164.621a24.033 24.033 0 0 0 4.917-8.071M252.5 428.2L48.077 233.612L48 233.54V92.443a12.208 12.208 0 0 1 12.194-12.194h141.39l191.7 194.918Z"
                  />
                  <path
                    fill="#e11d48"
                    d="M140 112a52 52 0 1 0 52 52a52.059 52.059 0 0 0-52-52m0 72a20 20 0 1 1 20-20a20.023 20.023 0 0 1-20 20"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="font-semibold text-2xl py-6">
            <h1>Tu viaje</h1>
          </div>
          <div className="flex justify-between pb-6">
            <div>
              <h1 className="font-semibold text-lg">Fechas</h1>
              <p>10-15 de jul</p>
            </div>
            <div>
              <h1 className="font-semibold text-lg underline ">Edita</h1>
            </div>
          </div>
          <div className="flex justify-between pb-6 border-b">
            <div>
              <h1 className="font-semibold text-lg">Huéspedes</h1>
              <p>1 huésped</p>
            </div>
            <div>
              <h1 className="font-semibold text-lg underline ">Edita</h1>
            </div>
          </div>
          <div paga con className="py-10 text-lg">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center pb-5">
                <div>
                  <h1 className="font-semibold text-2xl">Paga con</h1>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-9">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmf5rQoOt87qU25VDboIWw9KtxP0rfs6XSqw&s" />
                  </div>
                  <div className="w-5">
                    <img src="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png" />
                  </div>
                  <div className="w-9">
                    <img src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-pay-payment-software-vector-png-image_9183298.png" />
                  </div>
                </div>
              </div>
              <div className="border py-2 rounded-xl flex justify-between px-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="#cccccc"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M2 7v18h28V7Zm3 11h4m-4 3h6" />
                      <path fill="#cccccc" d="M2 11v2h28v-2Z" />
                    </g>
                  </svg>
                </div>
                <select className="w-full px-3">
                  <option>Tarjeta credito</option>
                  <option>Tarjeta débito</option>
                </select>
              </div>
              <div tarjeta className="border flex flex-col rounded-xl text-lg ">
                <div className=" border-b rounded-t-xl">
                  <input
                    className="w-full border-none py-3 px-3 rounded-t-xl"
                    type="text"
                    placeholder="Número de tarjeta"
                  />
                </div>
                <div className="flex ">
                  <div className="sm:w-full border-r">
                    <input
                      className="w-full border-none py-3 px-3 rounded-b-xl"
                      type="text"
                      placeholder="Caducidad"
                    />
                  </div>
                  <div className="sm:w-full">
                    <input
                      className="w-full border-none py-3 px-3 rounded-b-xl"
                      type="text"
                      placeholder="Código CCV"
                    />
                  </div>
                </div>
              </div>
              <div className="border rounded-xl">
                <input
                  className="border-none py-4 w-full rounded-xl px-3"
                  type=""
                  placeholder="Código postal"
                />
              </div>
              <div className="border text-gray-400 w-full rounded-xl py-2 px-3 ">
                <p className="text-sm">Pais/region</p>
                <select className="w-full text-black ">
                  <option>Colombia</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            onClick={abre}
            class="text-white bg-rose-500 hover:bg-rose-600 hover:shadow-xl font-medium rounded-lg sm:text-lg sm:px-5 sm:py-2.5 px-3 py-2 mb-10 "
          >
            Solicitar reserva{" "}
          </button>
        </div>
        <div seccion32 className="sm:w-1/2 flex sm:justify-end h-96 ">
          <div className="border p-5 sm:w-4/12 rounded-lg sm:fixed  ">
            <div className="flex gap-3 border-b pb-5">
              <div className="">
                <img
                  className=" rounded-md w-28 "
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-1015931199471712383/original/55dcb5b8-4a92-4299-84a1-ff59a5d44a9b.jpeg?aki_policy=large"
                />
              </div>
              <div>
                <div>
                  <h1 className="font-semibold truncate">
                    Mapuwi "lujo caribeño" villa lyla
                  </h1>
                </div>
                <div>
                  <h1>Alojamiento entero</h1>
                </div>
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000000"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold">4.86</span>
                    (14 reseñas)
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h1 className="font-semibold text-2xl">Información del precio</h1>
            </div>
            <div>
              <div className="flex justify-between">
                <div>$910,000.00 COP x 5 noches</div>
                <div>$4,550,000.00 COP</div>
              </div>
              <div className="flex justify-between border-b mt-4 pb-6">
                <div className="underline">Tarifa por servicio de Airbnb</div>
                <div>$764,402.86 COP</div>
              </div>
              <div className="font-semibold flex justify-between mt-5 text-lg">
                <div>Total.(COP)</div>
                <div>$,314,402.86 COP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pago;
