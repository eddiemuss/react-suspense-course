import React from "react";
import { fetchPokemon, suspensify } from './api';

const initialPokemon = suspensify(fetchPokemon(1));
// 2. Rename the `pokemon` variable to `initialPokemon` to indicate that it is only the first

export default function PokemonDetail() {
  // 1. Use React.useState to track the current PokemonResource and setPokemonResource
  const [pokemonResource, setPokemonResource] = React.useState(initialPokemon);
  // 2. (see above)
  // 3. Provide `initialPokemon` to `React.useState` as default
  // 4. Create an intermediate `pokemon` variable that `read()`s the `pokemonResource`
  const pokemon = pokemonResource.read();
  // 5. Create "Next" button
  //  * When clicked, call `setPokemonResource`
  //  * Use suspensify(fetchPokemon(...)) to fetch the pokemon with the next id
  return (
    <>
      <div>{pokemon.name}</div>
      <button type="button" onClick={() => {
        setPokemonResource(
          suspensify(
            fetchPokemon(pokemon.id + 1)
          )
        )
      }}>Next</button>
    </>
  );
}
