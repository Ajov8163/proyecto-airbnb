import React from "react";
import { Navbar } from "../Navbar";
import Barrabusqueda from "../Barrabusqueda";
import Barracate from "../Barracate";
import Card from "../compoCard/card";

function Frente() {
  return (
    <div>
      <Navbar />
      <Barrabusqueda />
      <hr />
      <Barracate />
      <div className="flex justify-around flex-wrap mx-4">
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/59c0427b-73e6-4d2e-bc13-8e9b0845ddac.jpg?im_w=320"
          }
          titulo={"Casa en la playa con vista al mar, surf, yoga, paz"}
          anfi={"Mardel"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/f676ab32-e0d9-445f-a099-24600fe19d40.jpg?im_w=320"
          }
          titulo={"Apartamento en Playa El Palmar -PANAMA"}
          anfi={"Jerenny Bethancourt"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/14091951/f97666ff_original.jpg?im_w=320"
          }
          titulo={"villa in contadora, las perlas"}
          anfi={"Vincent"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/8723170d-3107-4c7d-808c-ef207d3a84d9.jpg?im_w=320"
          }
          titulo={"Sensacionales vistas al mar en el lujoso ático"}
          anfi={"Frank"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1176889428467627030/original/46d22adf-e2d7-4645-9a83-02137234fd8b.jpeg?im_w=320"
          }
          titulo={"The Breeze en Blue Bay Beach & Golf Resort"}
          anfi={"Carlos "}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/35499adc-bc2b-4962-8ed0-b3c085402b42.jpg?im_w=320"
          }
          titulo={"Casa de la playa Penélope"}
          anfi={"Juan"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-949878644399246186/original/a711880d-3c0a-4bf8-8dc8-ba850d7836ea.jpeg?im_w=320"
          }
          titulo={"The Ridge New Luxury Condo con piscina privada infinita"}
          anfi={"Lisette"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/9c3203c6-be60-4a14-9f94-a4cfc67df67f.jpg?im_w=320"
          }
          titulo={
            "Casa de playa ecológica para 2 personas con capacidad para 6 personas"
          }
          anfi={"Hayte"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
      </div>
      <div className="flex items-center mt-16 flex-col">
        <p className="xl:text-3xl sm:xl:text-3xl">
          Sigue explorando la categoría Frente al lago
        </p>
        <button className="bg-zinc-900 text-white text-2xl px-7 py-3 rounded-lg mt-4 hover:bg-black cursor-pointer font-semibold mb-10">
          Mostrar más
        </button>
      </div>
    </div>
  );
}

export default Frente;
