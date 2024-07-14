import React from "react";

function Barraalojamiento() {
  return (
    <div className="flex items-center justify-between w-full px-4 mb-5">
      <div className="flex">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="#333333"
            d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"
          />
        </svg>
      </div>
      <div>
        <h1>Alojamiento</h1>
      </div>
      </div>
      <div className="flex gap-4">
        <div>
          {" "}
          <img
            className="w-5 h-5"
            src={"https://cdn-icons-png.flaticon.com/128/8113/8113021.png"}
          />
        </div>
        <div>
          {" "}
          <img
            className="w-5 h-5"
            src={"https://cdn-icons-png.flaticon.com/128/2027/2027396.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default Barraalojamiento;
