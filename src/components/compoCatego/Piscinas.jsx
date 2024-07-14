import React from "react";
import Card from "../compoCard/card";
import { Navbar } from "../Navbar";
import Barrabusqueda from "../Barrabusqueda";
import Barracate from "../Barracate";
import { Link } from "react-router-dom";
import Piscina2 from "../../pages/paginasico/piscina2";
 
const Piscinas = () => {
  return (
    <div>
      <Navbar />
      <Barrabusqueda />
      <hr />
      <Barracate />
      <div className="flex justify-around flex-wrap mx-4">
      <Link to={"/piscina1"}>
      <Card
          imagen={
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-51209430/original/c2482da0-beee-4144-9fe9-931f6d8d4d04.jpeg?im_w=720"
          }
          titulo={"Villa entero en Anapoima, Colombia"}
          anfi={" Latin Exclusive"}
          precio={"$2,884,301 COP"}
          noche={"noche"}
        />
      </Link>
      <Link to={"/piscina2"}>
      <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-974691316632214270/original/afd0b15d-5172-47ba-b22c-5e1ec695c869.jpeg?im_w=720"
          }
          titulo={"Villa entero en Anapoima, Colombia"}
          anfi={"  La Calera, Colombia"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
      </Link>
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/1fe3c772-fdbd-4fc5-bd2a-92927ab2daac.jpg?im_w=720"
          }
          titulo={"Casa de campo entero en Fusagasugá, Colombia"}
          anfi={" David"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-958799741574237718/original/73456ef1-7e9c-42e6-a111-5ce8b31d2978.jpeg?im_w=720"
          }
          titulo={"Cabaña entero en Anapoima, Colombia"}
          anfi={" Yuliana"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-837862052943728565/original/b8a58461-511e-4d5f-9be2-125ca58a24e8.jpeg?im_w=720"
          }
          titulo={" Alojamiento entero en Anapoima, Colombia"}
          anfi={" Altisella"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-831905093374954028/original/54b8658e-2c10-4cdb-b054-2a91824c72dd.jpeg?im_w=720"
          }
          titulo={"Alojamiento entero en Colombia"}
          anfi={" Robert"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-53385197/original/3c10c706-2f65-441a-bdf2-0dfff5493ead.jpeg?im_w=720"
          }
          titulo={"Casa de campo entero en Carmen de Apicalá, Colombia"}
          anfi={" Ana"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/1fe3c772-fdbd-4fc5-bd2a-92927ab2daac.jpg?im_w=720"
          }
          titulo={"Casa de campo entero en Fusagasugá, Colombia"}
          anfi={" David"}
          precio={"$1,450,000 COP"}
          noche={"noche"}
        />
      </div>
      <div className="flex items-center mt-16 flex-col">
        <p className="xl:text-3xl sm:xl:text-3xl">
          Sigue explorando la categoría Piscinas increíbles
        </p>
        <button className="bg-zinc-900 text-white text-2xl px-7 py-3 rounded-lg mt-4 hover:bg-black cursor-pointer font-semibold mb-10">
          Mostrar más
        </button>
      </div>
    </div>
  );
};

export default Piscinas;
