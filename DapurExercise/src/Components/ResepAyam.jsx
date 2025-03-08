import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import MealDBRecipeCard from "./MealDBRecipeCard";

const ResepAyam = () => {
  const [chickenMeals, setChickenMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let { category } = useParams();

  useEffect(() => {
    const fetchChickenMeals = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        );
        const data = await response.json();
        if (data.meals) {
          setChickenMeals(data.meals.map((meal) => meal.idMeal));
        } else {
          setError("No chicken recipes found");
        }
      } catch (err) {
        setError("Failed to fetch chicken recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchChickenMeals();
  }, []);

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-[#FF7F50]">
          Resep {category}
        </h1>

        {error && (
          <div className="rounded-md bg-red-50 p-4 text-red-600">{error}</div>
        )}

        {loading ? (
          <div className="flex justify-center">
            <div className="text-xl text-gray-600">Loading recipes...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {chickenMeals.map((mealId) => (
              <MealDBRecipeCard key={mealId} mealId={mealId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResepAyam;
