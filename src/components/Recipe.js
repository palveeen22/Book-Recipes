import React from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className="text-semibold text-3xl text-center">{title}</h1>
      <img className="object-contain h-48 w-96" src={image} alt="" />

      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p> Total Calories : {calories}</p>
    </div>
  );
};

export default Recipe;
