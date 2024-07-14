import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div>
      <div className=" justify-start">
        <h1 className="text-3xl font-semibold pb-8">A dónde irás</h1>
        <p className="text-xl pb-8">Palomino, La Guajira, Colombia</p>
      </div>
      <div className="border-b-2 pb-[60px] mb-16 flex w-full  flex-col justify-center items-center">
        <MapContainer
          className="rounded-lg w-[1000px] h-[500px]"
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
        <div className=" justify-start flex w-full">
          <p className="text-xl font-semibold mt-10 underline cursor-pointer">
            Mostrar más
          </p>
        </div>
      </div>
    </div>
  );
};
export default Map;
