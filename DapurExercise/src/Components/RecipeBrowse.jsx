import CategoryCard from "./CategoryCard";
import RecipeCard from "./RecipeCard";
import MealDBRecipeCard from "./MealDBRecipeCard";
import chicken from "/chicken.png";
import vegetable from "/vegetable.png";
import seafood from "/seafood.png";
import beef from "/beef.png";
import { useState, useEffect } from "react";
import duck from "/bebekgoyeng.png";
import gradient from "/bebekgradient.png";
import { HiArrowLongRight } from "react-icons/hi2";

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
  <div className="pt-7 mx-0">
    <h1 className="font-extrabold text-3xl mb-5 text-center">
      What would you like to <span className="text-lime font-extrabold">cook</span> today?
    </h1>

    <div className="bg-gradient-to-r from-lime to-darklime text-white py-4 px-4">
      <p className="text-lg font-medium">
        Depok's #1 <span className="font-bold">Trusted Recipe Source</span> since 2025 
      </p>
    </div>

    <div className="relative max-w-7xl w-full h-[90vh] bg-cover bg-center mx-auto">
      
      
      <div className="relative w-full h-full">
      <img className="absolute top-0 left-0 object-center object-cover" 
      src={gradient}
      alt=""
      />

      <img 
      className="w-full object-cover object-center "
      src={duck}
      alt="" 
      />
      

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
        
        <h2 className="text-4xl font-semibold mt-70 pb-5">Recipe of the month!</h2>

          <button className="px-9 py-1 border-2 border-white rounded text-xl flex text-semibold items-center gap-4 text-white bg-transparent">
          Bebek Goreng <span className="text-3xl"><HiArrowLongRight /></span>
        </button>
      </div>
      </div>
      
    </div>

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
  </div>
  );
};

export default RecipeBrowse;
