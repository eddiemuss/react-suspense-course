import React from "react";
import ErrorBoundary from './ErrorBoundary';
const PokemonDetail = React.lazy(() => Promise.reject());
// const PokemonDetail = React.lazy(() => import("./pokemon-detail"));

export default function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <ErrorBoundary>
        <React.Suspense fallback={"Loading your Pokemon..."}>
          <PokemonDetail />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}
