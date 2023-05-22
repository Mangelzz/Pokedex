import React from "react";

const PokemonDetails = ({ show, pokemon, close }) => {
  return (
    <div
      onClick={close}
      style={{ display: show ? "grid" : "none" }}
      className="bg-black bg-opacity-5 fixed top-0 left-0 w-screen h-screen place-items-center transition-all duration-500 z-[1] shadow-md justify-center"
    >
      <section className="bg-white lg:w-auto w-fit min-w-[400px] rounded-lg absolute p-4 flex justify-between opacity-100">
        <div className="grid place-items-center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="lg:w-72 my-1 aspect-auto w-32"
          />
          <section className="mt-2 font-bold max-md:-mt-32">
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
        <div className="grid px-2 gap-3 flex-1 max-md:flex max-md:flex-col">
            <h2 className="text-3xl font-bold text-center">{pokemon.name}</h2>
            <h3 className="text-xl">Habilities</h3>
            <ul>
            {
              pokemon.abilities?.map(abilitie => <li className={`text-gray-700 p-1 rounded-lg font-bold ${
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
              } py-1 px-2 m-1 rounded-xl shadow-sm capitalize`}>{abilitie}</li>)
            }
            </ul>
            <h3 className="text-xl">Stats</h3>
            <div className="grid grid-cols-2 gap-3 max-md:flex max-md:flex-wrap max-md:flex-grow">
              {pokemon.stats?.map(stat => <section className={`flex items-center flex-col capitalize max-md:flex-grow bg-gray-200 p-2 rounded-lg shadow-md shadow-gray-300 font-bold ${pokemon.type === "grass"
                  ? "text-green-500"
                  : "" || pokemon.type === "fire"
                  ? "text-red-400"
                  : "" || pokemon.type === "water"
                  ? "text-blue-400"
                  : "" || pokemon.type === "bug"
                  ? "text-green-600"
                  : "" || pokemon.type === "normal"
                  ? "text-gray-400"
                  : "" || pokemon.type === "poison"
                  ? "text-purple-400"
                  : "" || pokemon.type === "electric"
                  ? "text-yellow-400"
                  : "" || pokemon.type === "ground"
                  ? "text-yellow-600"
                  : "" || pokemon.type === "fairy"
                  ? "text-pink-400"
                  : "" || pokemon.type === "fighting"
                  ? "text-red-600"
                  : "" || pokemon.type === "psychic"
                  ? "text-pink-600"
                  : "" || pokemon.type === "rock"
                  ? "text-gray-600"
                  : "" || pokemon.type === "ghost"
                  ? "text-purple-600"
                  : "" || pokemon.type === "ice"
                  ? "text-blue-600"
                  : "" || pokemon.type === "dragon"
                  ? "text-blue-800"
                  : "" || pokemon.type === "dark"
                  ? "text-gray-800"
                  : "" || pokemon.type === "steel"
                  ? "text-gray-500"
                  : "" || pokemon.type === "flying"
                  ? "text-blue-300"
                  : ""}`}>
                <span className="border-2 border-black rounded-[50%] w-8 h-8 grid place-items-center max-md:border-none max-md:underline">{stat.base}</span>
                <span>{stat.name}</span>
              </section>)}
            </div>
        </div>
      </section>
    </div>
  );
};

export default PokemonDetails;
