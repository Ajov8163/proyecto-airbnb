import React from "react";
import { Navbar } from "../Navbar";
import Barrabusqueda from "../Barrabusqueda";
import Barracate from "../Barracate";
import Card from "../compoCard/card";
import BarraMovil from "../BarraMovil";
import Mostrarpreciomobil from "../Mostrarpreciomobil";

function Minicasas() {
  return (
    <div>
      <div className="hidden sm:block">
        <Navbar />
        <Barrabusqueda />
        <hr />
        <Barracate />
      </div>
      <div className="sm:hidden sticky top-0  z-40">
        <BarraMovil />
      </div>
      <div className="flex justify-around flex-wrap mx-4">
      <div className="sm:hidden ">
          <Mostrarpreciomobil />
        </div>
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-823325081590184412/original/76fb4fb5-e58b-46b2-9705-dfe91ce5f0b0.jpeg?im_w=320"
          }
          titulo={"Gran estudio"}
          anfi={"Juan"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/e4ca84c8-fc6f-428d-b9e3-d50ac0f605a1.jpg?im_w=320"
          }
          titulo={"Tiny House Cubo Nube Santa Elena 40 Min. Medellín"}
          anfi={"Samuel Y Pala"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-53638277/original/6a36f0b0-be0d-4a66-ba16-ac4c0b4f2a82.jpeg?im_w=320"
          }
          titulo={"Finca La Diva Bed & Breakfast"}
          anfi={"Juan David"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/airflow/Hosting-597989913100952433/original/312876bf-6b56-45d2-aa53-6c3bb1656e98.jpg?im_w=320"
          }
          titulo={"Glamping Desierto Santa María Villa de Leyva - T"}
          anfi={"Sebastian"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/540eb4f4-470e-4efc-90f9-2c5ae3a9081f.jpg?im_w=320"
          }
          titulo={"Cabaña El Encanto De los Pinos"}
          anfi={"Sandro"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-47701401/original/17677409-28e9-48e1-8dfa-6d7b494cd88a.jpeg?im_w=320"
          }
          titulo={"Ecoparque Tangara - Ecolodge 2"}
          anfi={"Ecoparque"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-39048787/original/6abf4713-5b2d-4bed-acc7-98ef9e9641bf.jpeg?im_w=320"
          }
          titulo={"Refugio San Felix. Un pequeño refugio cerca de Medellín"}
          anfi={"Juan Y Angela"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/11f548f1-0905-4cc4-9b00-e40c21968ead.jpg?im_w=320"
          }
          titulo={"Maloka Tierra en las montañas de los Andes"}
          anfi={"Pedro"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
      </div>
      <div className="flex items-center mt-16 flex-col">
        <p className="xl:text-3xl sm:xl:text-3xl">
          Sigue explorando la categoría Minicasas
        </p>
        <button className="bg-zinc-900 text-white text-2xl px-7 py-3 rounded-lg mt-4 hover:bg-black cursor-pointer font-semibold mb-10">
          Mostrar más
        </button>
      </div>
    </div>
  );
}

export default Minicasas;
