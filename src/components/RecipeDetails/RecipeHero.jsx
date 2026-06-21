import Image from "next/image";

const RecipeHero = ({ recipe }) => {
  return (
    <div className="overflow-hidden ">
      <img
        src={recipe.recipeImage}
        alt={recipe.recipeName}
        className="w-full h-[160px] md:h-[250px]  object-cover"
      />
    </div>
  );
};

export default RecipeHero;
