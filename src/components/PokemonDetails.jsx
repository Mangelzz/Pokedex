import React from "react";

const PokemonDetails = ({ show, pokemon, close }) => {
  return (
    <div
      onClick={close}
      style={{ display: show ? "grid" : "none" }}
      className="bg-black bg-opacity-5 fixed top-0 left-0 w-screen h-screen place-items-center transition-all duration-500 z-[1] shadow-md justify-center text-center"
    >
      <section className="bg-white w-[40%] min-w-[400px] rounded-lg absolute p-4 flex justify-between text-center opacity-100">
        <div className="grid place-items-center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-72 my-1 aspect-auto"
          />
          <section className="mt-2 font-bold">
            <span
              className={`text-gray-600 p-1 rounded-lg ${
                pokemon.type === "grass" //Check first type of pokemon and add a class to the span
                  ? "bg-green-400"
                  : "" || pokemon.type === "fire"
                  ? "bg-red-400"
                  : "" || pokemon.type === "water"
                  ? "bg-blue-400"
                  : "" || pokemon.type === "bug"
                  ? "bg-green-600"
                  : "" || pokemon.type === "normal"
                  ? "bg-gray-400"
                  : "" || pokemon.type === "poison"
                  ? "bg-purple-400"
                  : "" || pokemon.type === "electric"
                  ? "bg-yellow-400"
                  : "" || pokemon.type === "ground"
                  ? "bg-yellow-600"
                  : "" || pokemon.type === "fairy"
                  ? "bg-pink-400"
                  : "" || pokemon.type === "fighting"
                  ? "bg-red-600"
                  : "" || pokemon.type === "psychic"
                  ? "bg-pink-600"
                  : "" || pokemon.type === "rock"
                  ? "bg-gray-600"
                  : "" || pokemon.type === "ghost"
                  ? "bg-purple-600"
                  : "" || pokemon.type === "ice"
                  ? "bg-blue-600"
                  : "" || pokemon.type === "dragon"
                  ? "bg-blue-800"
                  : "" || pokemon.type === "dark"
                  ? "bg-gray-800"
                  : "" || pokemon.type === "steel"
                  ? "bg-gray-500"
                  : "" || pokemon.type === "flying"
                  ? "bg-blue-300"
                  : ""
              } py-1 px-2 m-1 rounded-xl shadow-sm capitalize`}
            >
              {pokemon.type}
            </span>
            <span
              className={`text-gray-600 p-1 rounded-lg ${
                pokemon.type2 === "grass" //Check first type of pokemon and add a class to the span
                  ? "bg-green-400"
                  : "" || pokemon.type2 === "fire"
                  ? "bg-red-400"
                  : "" || pokemon.type2 === "water"
                  ? "bg-blue-400"
                  : "" || pokemon.type2 === "bug"
                  ? "bg-green-600"
                  : "" || pokemon.type2 === "normal"
                  ? "bg-gray-400"
                  : "" || pokemon.type2 === "poison"
                  ? "bg-purple-400"
                  : "" || pokemon.type2 === "electric"
                  ? "bg-yellow-400"
                  : "" || pokemon.type2 === "ground"
                  ? "bg-yellow-600"
                  : "" || pokemon.type2 === "fairy"
                  ? "bg-pink-400"
                  : "" || pokemon.type2 === "fighting"
                  ? "bg-red-600"
                  : "" || pokemon.type2 === "psychic"
                  ? "bg-pink-600"
                  : "" || pokemon.type2 === "rock"
                  ? "bg-gray-600"
                  : "" || pokemon.type2 === "ghost"
                  ? "bg-purple-600"
                  : "" || pokemon.type2 === "ice"
                  ? "bg-blue-600"
                  : "" || pokemon.type2 === "dragon"
                  ? "bg-blue-800"
                  : "" || pokemon.type2 === "dark"
                  ? "bg-gray-800"
                  : "" || pokemon.type2 === "steel"
                  ? "bg-gray-500"
                  : "" || pokemon.type2 === "flying"
                  ? "bg-blue-300"
                  : ""
              } py-1 px-2 m-1 rounded-xl shadow-sm capitalize`}
            >{pokemon.type2}</span>
          </section>
        </div>
        <div>
            <h2 className="text-3xl font-bold text-center">{pokemon.name} ({pokemon.id})</h2>
        </div>
      </section>
    </div>
  );
};

export default PokemonDetails;
