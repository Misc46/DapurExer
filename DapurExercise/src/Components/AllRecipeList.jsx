import React, { useState, useEffect } from "react";
import MealDBRecipeRow from "./MealDBRecipeRow";
import { useParams } from "react-router";

const AllRecipeList = () => {
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadMore, setLoadMore] = useState(0);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${String.fromCharCode(97 + loadMore)}`,
          );
          const data = await response.json();
          
          if (data.meals) {
            setRandomMeals((prevMeals) => [...prevMeals, ...data.meals.map((meal) => meal.idMeal)]);
          } else {
            setError(`No ${category} recipes found`);
          }
      } catch (err) {
        setError(`Failed to fetch ${category} recipes`);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeals();
  }, [loadMore]);

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold">All Recipes</h1> 

        {error && (
          <div className="mb-6 rounded-md bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center p-10">
            <div className="text-xl text-gray-600">
              Loading recipes...
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-6">
            {randomMeals.map((mealId) => (
              <MealDBRecipeRow key={mealId} mealId={mealId} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center p-10">
        <button onClick={() => setLoadMore((prev) => prev + 1)} className="bg-white border-1 border-black hover:bg-gray-100 hover:scale-115 transition-all font-bold py-2 px-4 rounded">
          Load More
        </button>
      </div>
    </div>
  );
};

export default AllRecipeList;
