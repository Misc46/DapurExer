import React, { useState, useEffect } from "react";
import MealDBRecipeRow from "./MealDBRecipeRow";
import { useParams } from "react-router";

const CategoryRecipeList = () => {
  const [chickenMeals, setChickenMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

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
          setError(`No ${category} recipes found`);
        }
      } catch (err) {
        setError(`Failed to fetch ${category} recipes`);
      } finally {
        setLoading(false);
      }
    };

    fetchChickenMeals();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold">{category} Recipes</h1>

        {error && (
          <div className="mb-6 rounded-md bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center p-10">
            <div className="text-xl text-gray-600">
              Loading {category} Recipes...
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-6">
            {chickenMeals.map((mealId) => (
              <MealDBRecipeRow key={mealId} mealId={mealId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryRecipeList;
