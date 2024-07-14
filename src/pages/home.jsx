import Barrabusqueda from "../components/Barrabusqueda";
import Card from "../components/compoCard/card";
import { Navbar } from "../components/Navbar";
import img2 from "../assets/img/futer.png";
import { Link } from "react-router-dom";
import Barracate from "../components/Barracate";


export const Home = () => {

  return (
    <div>
      <Navbar/>
      <Barrabusqueda />
      <hr />
        <Barracate/>
        
      <div cartas className="flex justify-around flex-wrap mx-4">
      <Link to={"/crea"}>
      <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg?im_w=1440&im_q=highq"
          }
          titulo={"Crea pensamientos centrales con Intensa-Mente 2"}
          anfi={"Joy"}
          precio={"$0 COP"}
          noche={"por huésped"}
        />
      </Link>
       <Link to={"/quedate"}>
       <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1440&im_q=highq"
          }
          titulo={"Quédate en la casa de Purple Rain de Prince"}
          anfi={"Wendy And Lisa"}
          precio={"Abre En Agosto"}
        />
       </Link>
       <Link to={"/noche"}>
       <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/cda19e4c-ae11-47b1-831b-a29f94ab76dc.png?im_w=1440&im_q=highq"
          }
          titulo={"Noche VIP con Kevin Hart"}
          anfi={"Kevin Hart"}
          precio={"Abre En Agosto"}
        />
       </Link>
       <Link to={"/mansionx"}>
       <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b676fc8d-8250-4df0-a7cb-728b0486e371.jpeg?im_w=1440&im_q=highq"
          }
          titulo={"Quédate en la Mansión X"}
          anfi={"Jubilee"}
          precio={"Agotada"}
        />
       </Link>
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/872f434b-9348-4ff1-8c6f-754fdbab4010.jpeg?im_w=1440&im_q=highq"
          }
          titulo={"Juega con Khaby Lame"}
          anfi={" Khaby Lame"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjE4NTg5MzIzNjI0NjI2MA%3D%3D/original/e6b26733-2c15-47d9-b097-6968b39bb697.jpeg?im_w=1440&im_q=highq"
          }
          titulo={"Aventura de altura en la casa de Up"}
          anfi={" Carl Fredricksen"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyMzIwMTE1Njc3Njg0MTIzOQ%3D%3D/original/fb9dcb8d-7fa5-402f-91ae-fa2a26e9f097.png?im_w=1440&im_q=highq"
          }
          titulo={"Juega con Khaby Lame"}
          anfi={" Pasa la noche en el Museo Ferrari"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-881808599061267756/original/b16970cf-1d55-4edd-bb1f-e1735d0a228e.jpeg?im_w=1440&im_q=highq"
          }
          titulo={"Juega con Khaby Lame"}
          anfi={" El Pantano de Shrek"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-857387972692815761/original/d106e0ef-f825-4ff8-baf7-86256a54fbd5.jpeg?im_w=1440&im_q=highq"
          }
          titulo={"Casa de los Sueños de Barbie en Malibú, al estilo Ken"}
          anfi={" Ken"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-694055224756906854/original/76f85a0c-b3e2-4f1d-9aa9-d7838f2393c6.jpeg?im_w=1200&im_q=highq"
          }
          titulo={"El pub favorito de Ted Lasso"}
          anfi={" Mae"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/365299e3-f926-47ee-bcbf-606d6a0370b9.jpeg?im_w=1440&im_q=highq"
          }
          titulo={"De vacaciones con Mi pobre angelito"}
          anfi={"  Buzz"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/4595e1b4-1f7a-4cf5-9f3d-c84075a00beb.jpg?im_w=720"
          }
          titulo={"Casa cíclada en Adamantas, Grecia"}
          anfi={"  Faye"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/d20925f9-d86b-4e98-a962-d2ba9ffe75d9.jpg?im_w=720"
          }
          titulo={"Vivienda rentada entero en Aliki, Grecia"}
          anfi={" ¨Pedro"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/miso/Hosting-8420476/original/7d4fa1e6-fbd5-4cb7-b87c-d26ee96d24bc.jpeg?im_w=720"
          }
          titulo={"Vivienda rentada entero en Stavros, Grecia"}
          anfi={" Carrie"}
          precio={"Agotada"}
        />
        <Card
          imagen={
            "https://a0.muscache.com/im/pictures/f3fc70bc-eec6-406b-afd1-f56f4bec2857.jpg?im_w=720"
          }
          titulo={"VISTAS A LAS CÍCLADAS"}
          anfi={" michell"}
          precio={"Agotada"}
        />
      </div>

      <div className="flex items-center mt-16 flex-col">
        <p className="xl:text-3xl sm:xl:text-3xl">
          Sigue explorando la categoría casas cicládas
        </p>
        <button className="bg-zinc-900 text-white text-2xl px-7 py-3 rounded-lg hover:bg-black cursor-pointer font-semibold mt-10">
          Mostrar más
        </button>
      </div>
      <div className="mt-10 xl:block hidden">
        <img className="w-full" src={img2} alt="" />
      </div>
    </div>
  );
};
