import React from "react";
import "./App.css";

const fetchPokemonList = ({ page }) =>
  fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${page * 10}&limit=${10}`
  ).then((response) => response.json());

const fetchPokemon = ({ name }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) =>
    response.json()
  );

const Pokemon = ({ pokemon: { name, sprites }, ...props }) => {
  return (
    <div className="pokemon" {...props}>
      <div className="pokemon-name">{name}</div>
      <div style={{ width: 100, height: 100 }}>
        {sprites?.front_default && (
          <img alt={`${name} front`} src={sprites?.front_default} />
        )}
      </div>
    </div>
  );
};

function App() {
  const onClickGetMore = () => {
    // TODO
  };

  const onClickToggleGrouping = (grouping) => {
    // TODO
  };

  return (
    <div className="app">
      <div
        style={{
          gap: 10,
          marginTop: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="button" onClick={onClickGetMore}>
          Get more pokemon!
        </button>
        <button className="button" onClick={onClickToggleGrouping}>
          Change the groups!
        </button>
      </div>
      <div style={{ marginTop: 40 }} className="pokemon-list">
        Pokemon!
      </div>
    </div>
  );
}

export default App;
