import React, { useState, useEffect } from "react";
import MealDBRecipeRow from "./MealDBRecipeRow";
import { useParams } from "react-router";

const CategoryRecipeList = () => {
  const { category } = useParams(); // ✅ Get category from URL
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const meals = [];
        for (let i = 0; i < 15; i++) {
          const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
          const data = await response.json();
          if (data.meals && data.meals[0]) {
            meals.push(data.meals[0].idMeal);
          }
        }
        setRandomMeals(meals);
      } catch (error) {
        console.error("Failed to fetch random meals:", error);
        setError("Failed to load recipes. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeals();
  }, [category]);

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
    </div>
  );
};

export default CategoryRecipeList;
