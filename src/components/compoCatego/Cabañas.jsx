import React from "react";
import { Navbar } from "../Navbar";
import Barrabusqueda from "../Barrabusqueda";
import Barracate from "../Barracate";
import Card from "../compoCard/card";

function Cabañas() {
  return (
    <div>
      <Navbar />
      <Barrabusqueda />
      <hr />
      <Barracate />
      <div className="flex justify-around flex-wrap mx-4">
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/2aae9259-4a19-47c8-a7ba-6f146e226db6.jpg?im_w=720"
          }
          titulo={"Finca La Diva Bed & Breakfast"}
          anfi={"Juan David"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-33996825/original/ae88e614-cd39-4503-b16c-e2a7a98556f5.jpeg?im_w=720"
          }
          titulo={"Minicasa en Machachi, Ecuador"}
          anfi={" Alex"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/f4628b7c-1fb1-4946-888f-849d4a778abb.jpg?im_w=720"
          }
          titulo={"Cabaña entero en El Jardín, Costa Rica"}
          anfi={"Jose Luis"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />

        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-28153496/original/bca497cc-1515-4e4a-991b-f04d7519d4f6.jpeg?im_w=720"
          }
          titulo={"Cabaña entero en Tres de Junio, Costa Rica"}
          anfi={"Jose Andres"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-46070163/original/caa16dc7-f7fb-4380-8fd1-1970754b2561.jpeg?im_w=720"
          }
          titulo={"Casa del árbol en Sasaima, Colombia"}
          anfi={"Houses In The Sky"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTExNDU2MjU%3D/original/307cf73a-004a-4add-a975-77762cc44f7b.jpeg?im_w=720"
          }
          titulo={"Alojamiento vacacional entero en Costa Rica"}
          anfi={"Bruno"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/e4ca84c8-fc6f-428d-b9e3-d50ac0f605a1.jpg?im_w=720"
          }
          titulo={"Minicasa en Medellín, Colombia"}
          anfi={"Samuel Y Pala"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-38672594/original/5ca095c0-0710-405b-bf7f-a045bc3cbbc9.jpeg?im_w=720"
          }
          titulo={"Minicasa en El Peñol, Colombia"}
          anfi={"Mafe"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
      </div>
      <div className="flex items-center mt-16 flex-col">
        <p className="xl:text-3xl sm:xl:text-3xl">
          Sigue explorando la categoría Cabañas
        </p>
        <button className="bg-zinc-900 text-white text-2xl px-7 py-3 rounded-lg mt-4 hover:bg-black cursor-pointer font-semibold mb-10">
          Mostrar más
        </button>
      </div>
    </div>
  );
}

export default Cabañas;
