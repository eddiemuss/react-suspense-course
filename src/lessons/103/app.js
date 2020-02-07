import React from "react";
import ErrorBoundary from "./error-boundary";

// Test the three states we're setup for
// 1. Error: return a rejected promise to React.lazy to enact the ErrorBoundary fallback
// const PokemonDetail = React.lazy(() => Promise.rejected());

// 2. Pending: return a new pending promise to React.lazy to enact the Suspense fallback
// const PokemonDetail = React.lazy(() => new Promise(
//   resolve => setTimeout(() => {
//     resolve()
//   }, 1000)
// ));

// 3. Success: return a new pending promise that resolves a module after a timeout to React.lazy to enact the Suspense fallback
//    Or just fix it to import properly `pokemon-default` module.
const PokemonDetail = React.lazy(() => import('./pokemon-detail'));

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <ErrorBoundary fallback={"Couldn't catch 'em all."}>
        <React.Suspense fallback={"Catching your Pokemon..."}>
          <PokemonDetail />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}
