import React from "react";
let a = [
  { place: "chennai", name: "eugin" },
  { place: "cuddalore", name: "prushoth" },
  { name: "eugin", place: "kanyakumari" }
];

const Map = () => {
  return (
    <div>
      {a
        .filter(({ name }) => name === "eugin")
        .reverse()
        .map(({ name, place }) => {
          return (
            <>
              <p>{name}</p>
              <p>{place}</p>
            </>
          );
        })}
    </div>
  );
};

export default Map;
