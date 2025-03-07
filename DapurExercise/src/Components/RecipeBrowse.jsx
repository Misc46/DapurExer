import CategoryCard from "./CategoryCard";
import RecipeCard from "./RecipeCard";
import MealDBRecipeCard from "./MealDBRecipeCard";
import chicken from "/chicken.png";
import vegetable from "/vegetable.png";
import seafood from "/seafood.png";
import beef from "/beef.png";
import { useState, useEffect } from "react";

const RecipeBrowse = () => {
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const meals = [];
        for (let i = 0; i < 6; i++) {
          const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
          const data = await response.json();
          if (data.meals && data.meals[0]) {
            meals.push(data.meals[0].idMeal);
          }
        }
        setRandomMeals(meals);
      } catch (error) {
        console.error('Failed to fetch random meals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeals();
  }, []);

  return (
    <div className="mx-10 p-10">
      <div>
        <h2 className="mb-5 text-3xl font-bold">Categories:</h2>

        <div className="flex w-full flex-wrap justify-center gap-8">
          <CategoryCard image={chicken} name={"Chicken"} route={"/ayam"} />
          <CategoryCard image={beef} name={"Beef"} route={"#"} />
          <CategoryCard image={seafood} name={"Seafood"} route={"#"} />
          <CategoryCard image={vegetable} name={"Vegetable"} route={"#"} />
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-3xl font-bold">Local Recipes:</h2>
        <div className="mx-auto flex flex-wrap justify-center gap-8">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-3xl font-bold">International Recipes:</h2>
        <div className="mx-auto flex flex-wrap justify-center gap-8">
          {loading ? (
            <div>Loading recipes...</div>
          ) : (
            randomMeals.map((mealId) => (
              <MealDBRecipeCard key={mealId} mealId={mealId} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeBrowse;
