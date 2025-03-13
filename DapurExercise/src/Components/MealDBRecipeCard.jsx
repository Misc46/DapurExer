import React, { useState, useEffect } from "react";

const MealDBRecipeCard = ({ mealId }) => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
        );
        const data = await response.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError("Recipe not found");
        }
      } catch (err) {
        setError("Failed to fetch recipe");
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [mealId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!meal) return null;

  // Truncate description to 100 characters
  const truncatedDescription = meal.strInstructions
    ? meal.strInstructions.length > 100
      ? meal.strInstructions.substring(0, 100) + "..."
      : meal.strInstructions
    : "No description available";

  return (
    <div className="rows-gap-0 grid w-12/12 max-w-60 grid-rows-[auto,1fr,auto] items-start gap-2 rounded-xl bg-[#FAF3E0] p-5 sm:w-6/12 md:w-4/12 lg:w-2/12">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="grid w-full gap-2 rounded-md transition-all duration-200 hover:scale-110"
      />
      <p className="text-base text-slate-700">{meal.strCategory}</p>
      <p className="text-lg font-semibold">{meal.strMeal}</p>
      <p className="line-clamp-3 text-sm text-gray-600">
        {truncatedDescription}
      </p>
      <a
        href={`/recipe/${mealId}`}
        className="items-center rounded-md bg-[#c52525] px-2 py-1 text-base text-white transition-all duration-200 hover:scale-110 hover:opacity-80"
      >
        Lihat Resep
      </a>
    </div>
  );
};

export default MealDBRecipeCard;
