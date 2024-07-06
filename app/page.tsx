import Pokedex from "@/components/Pokedex";
import PokemonList from "@/pokemon.json";

export default function Home() {
  return (
    <Pokedex pokemonList={PokemonList} />
  );
}
