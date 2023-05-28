import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";
import PokemonDetails from "./PokemonDetails";
const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [viewMore, setViewMore] = useState(true);

  const getPokemon = async (url = URL_DEFAULT) => {
    //Get data from API
    const response = await fetch(url);
    const pokemonList = await response.json();
    const { next, results } = pokemonList;

    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        const abilities = poke.abilities.map((ability) => ability.ability.name);
        const stats = poke.stats.map((stats) => {
          return {
            name: stats.stat.name,
            base: stats.base_stat,
          };
        });
        // const types = poke.types.map((type) => type.type.name);
        const type1 = poke.types[0].type.name;
        const type2 = poke.types[1]?.type.name;

        return {
          id: poke.id,
          name: poke.name,
          // If render image is too slow, use this: poke.sprites.other.dream_world.front_default
          image:
            poke.sprites.other.home.front_default || poke.sprites.front_default,
          //Two types of pokemon
          type: type1,
          type2: type2 || "",
          abilities,
          stats,
        };
      })
    );
    return { next, pokemons, morePokemons, viewMore };
  };

  const handleGetPokemon = async () => {
    const { next, pokemons } = await getPokemon();
    setPokemon(pokemons);
    setNextUrl(next);
  };

  const morePokemons = async () => {
    const { next, pokemons } = await getPokemon(nextUrl);
    setPokemon((prev) => [...prev, ...pokemons]);
    next === null && setViewMore(false);
    setNextUrl(next);
  };

  useEffect(() => {
    handleGetPokemon();
  }, []);
  // return { pokemon, morePokemons };
  const [show, setShow] = useState({ show: false, pokemon: {} });
  const handleShow = (pokemon) => {
    setShow({ show: true, pokemon });
  };
  const handleClose = () => {
    setShow({ show: false, pokemon: {} });
  };

  return (
    <>
      <PokemonDetails {...show} close={handleClose} />
      <InfiniteScroll
        dataLength={pokemon.length}
        next={morePokemons}
        hasMore={viewMore}
        loader={<Loader />}
        endMessage={
          <h3 className="text-3xl font-normal text-center col-span-2 lg:col-span-5 mt-6">
            Sorry, there are not more pokemons
          </h3>
        }
        className="grid lg:grid-cols-5 grid-cols-2 gap-4 p-3 max-w-[1200px] mx-auto mt-8"
      >
        {pokemon.map((pokemon) => {
          return (
            <div
              onClick={() => handleShow(pokemon)}
              key={pokemon.id}
              className="flex flex-col justify-center items-center rounded-3xl py-2 bg-gray-200 shadow-md shadow-gray-300 transition-all duration-500 hover:scale-105 cursor-pointer hover:shadow-md hover:shadow-gray-300"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-40 h-40 my-1"
              />
              <p className="flex justify-between items-center bg-gray-500 text-fuchsia-200 font-bold py-1 px-2 rounded-xl shadow-sm w-36 shadow-gray-600 mt-2 capitalize flex-col">
                <span className="text-gray-100 font-bold">N° {pokemon.id}</span>
                <span className="text-gray-100 font-bold">{pokemon.name}</span>
                <div className="flex justify-between gap-4 p-1">
                  <span
                    className={`text-gray-600 p-1 rounded-lg ${
                      pokemon.type === "grass"
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
                    }`}
                  >
                    {pokemon.type}
                  </span>
                  {/* change type color depending of pokemon type */}
                  <span
                    className={`text-gray-600 p-1 rounded-lg ${
                      pokemon.type2 === "" ? "hidden" : "" ||
                      pokemon.type2 === "grass"
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
                    }`}
                  >
                    {pokemon.type2}
                  </span>
                </div>
              </p>
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
};

export default Pokemons;
