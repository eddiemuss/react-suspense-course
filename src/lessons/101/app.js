import React from "react";
const PokemonDetail = React.lazy(() => import('./pokemon-detail'));

export default function App() {
  return (
    <div>
      <React.Suspense fallback={<p>Loading ...</p>}>
        <PokemonDetail />
      </React.Suspense>
    </div>
  );
}
