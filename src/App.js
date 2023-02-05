import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  const APP_ID = "3452faaa";
  const APP_KEY = "89d4e457a15feeaf338f0fdac43b84c0	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecepies();
  }, [query]);

  const getRecepies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <div className="shadow-md w-full relative top-0 left-0">
        <div className="md:flex items-center justify-between bg-[#ece6c2]  px-5">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
          >
            Waseda Foddy
          </div>
          <form onSubmit={getSearch} className="flex justify-end py-4">
            <input
              className="block w-full px-4 py-2 text-black-700 bg-white border rounded-md focus:border-lightblue-400  focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="what for today?"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button
              className="btn px-4 text-black bg-[#73bda8]  border-l  hover-[#73bda8]-700 rounded-md"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="App-header">
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.image}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
