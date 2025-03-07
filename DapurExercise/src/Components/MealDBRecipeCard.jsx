import React, { useState, useEffect } from 'react';

const MealDBRecipeCard = ({ mealId }) => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        setError('Failed to fetch recipe');
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
      ? meal.strInstructions.substring(0, 100) + '...' 
      : meal.strInstructions
    : 'No description available';

  return (
    <div className="flex basis-1/6 flex-col items-start gap-2 rounded-xl bg-[#FAF3E0] p-5">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-md"
      />
      <p className="text-base text-slate-700">{meal.strCategory}</p>
      <p className="text-lg font-semibold">{meal.strMeal}</p>
      <p className="text-sm text-gray-600 line-clamp-3">{truncatedDescription}</p>
      <a 
        href={`/recipe/${mealId}`} 
        className="rounded-md bg-[#FF7F50] px-2 py-1 text-base text-white hover:bg-[#FF6B3C]"
      >
        Lihat Resep
      </a>
    </div>
  );
};

export default MealDBRecipeCard; 