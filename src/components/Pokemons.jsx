import { useEffect, useState } from "react";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  const getPokemon = async (url = URL_DEFAULT) => {
    //Get data from API
    const response = await fetch(url);
    const pokemonList = await response.json();
    const { next, results } = pokemonList;

    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          image: poke.sprites.other.home.front_default,
          type: poke.types[0].type.name,
        };
      })
    );
    return { next, pokemons, morePokemons }
  };

  const handleGetPokemon = async () => {
    const { next, pokemons } = await getPokemon();
    setPokemon(pokemons)
    setNextUrl(next)
  }

  const morePokemons = async () => {
    const { next, pokemons } = await getPokemon(nextUrl);
    setPokemon(prev => [...prev, ...pokemons])
    setNextUrl(next)
  }


  useEffect(() => {
    handleGetPokemon()
  }, []);
  // return { pokemon, morePokemons };

  return (
    <section className="grid lg:grid-cols-5 grid-cols-2 gap-4 p-3 max-w-[1200px] mx-auto mt-8">
      {pokemon.map((pokemon) => {
        return (
          <div
            key={pokemon.id}
            className="flex flex-col justify-center items-center rounded-3xl py-2 bg-gray-200 shadow-md shadow-gray-300 transition-all duration-500 hover:scale-105 cursor-pointer hover:shadow-md hover:shadow-gray-300"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-40 h-40 my-1"
            />
            <p className="flex justify-between items-center bg-gray-500 text-fuchsia-200 font-bold py-1 px-2 rounded-xl shadow-sm w-28 shadow-gray-600 mt-2 capitalize flex-col">
              <span className="text-gray-100 font-bold">#{pokemon.id}</span>
              <span className="text-gray-100 font-bold">{pokemon.name}</span>
              <span className={`text-gray-600 p-1 rounded-lg ${
                pokemon.type === "grass" ? "bg-green-400" : "" || pokemon.type === "fire" ? "bg-red-400" : "" || pokemon.type === "water" ? "bg-blue-400" : "" || pokemon.type === "bug" ? "bg-green-600" : "" || pokemon.type === "normal" ? "bg-gray-400" : "" || pokemon.type === "poison" ? "bg-purple-400" : "" || pokemon.type === "electric" ? "bg-yellow-400" : "" || pokemon.type === "ground" ? "bg-yellow-600" : "" || pokemon.type === "fairy" ? "bg-pink-400" : "" || pokemon.type === "fighting" ? "bg-red-600" : "" || pokemon.type === "psychic" ? "bg-pink-600" : "" || pokemon.type === "rock" ? "bg-gray-600" : "" || pokemon.type === "ghost" ? "bg-purple-600" : "" || pokemon.type === "ice" ? "bg-blue-600" : "" || pokemon.type === "dragon" ? "bg-blue-800" : "" || pokemon.type === "dark" ? "bg-gray-800" : "" || pokemon.type === "steel" ? "bg-gray-500" : "" || pokemon.type === "flying" ? "bg-blue-300" : ""
              }`} >{pokemon.type}</span>
              {/* change type color depending of pokemon type */}
            </p>
          </div>
        );
      })}
      <button onClick={morePokemons}>View more pokemons</button>
    </section>
  );
};

export default Pokemons;
