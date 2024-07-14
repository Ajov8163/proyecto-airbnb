import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div className="">
      <div className="  ">
        <h1 className="sm:text-3xl text-xl font-semibold sm:pb-8">A dónde irás</h1> 
        <p className="sm:text-xl pb-8">Palomino, La Guajira, Colombia</p>
      </div>
      <div className="border-b-2 pb-8 sm:pb-[60px] sm:mb-16 flex w-full  flex-col justify-center items-center">
        <div className=" w-full h-full ">
        <MapContainer
          className="rounded-lg sm:w-[1000px]  sm:h-[500px]  h-44"
          center={[11.245579, -73.558672]}
          zoom={10}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[11.245579, -73.558672]}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Marker>
        </MapContainer>
        </div>
        <div className=" justify-start flex w-full">
          <p className="text-xl font-semibold mt-5 sm:mt-10 underline cursor-pointer">
            Mostrar más
          </p>
        </div>
      </div>
      
    </div>
  );
};
export default Map;
