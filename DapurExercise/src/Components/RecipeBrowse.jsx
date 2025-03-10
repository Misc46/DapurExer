import CategoryCard from "./CategoryCard";
import MealDBRecipeCard from "./MealDBRecipeCard";
import chicken from "/chicken.png";
import vegetable from "/vegetable.png";
import seafood from "/seafood.png";
import beef from "/beef.png";
import { useState, useEffect } from "react";
import duck from "/bebekgoyeng.png";
import gradient from "/bebekgradient.png";
import { HiArrowLongRight } from "react-icons/hi2";
import About from "./About";

const RecipeBrowse = () => {
  const [randomMeals, setRandomMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        const meals = [];
        for (let i = 0; i < 5; i++) {
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php",
          );
          const data = await response.json();
          if (data.meals && data.meals[0]) {
            meals.push(data.meals[0].idMeal);
          }
        }
        setRandomMeals(meals);
      } catch (error) {
        console.error("Failed to fetch random meals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMeals();
  }, []);

  return (
    <div className="mx-0 pt-7">
      <h1 className="mb-5 text-center text-3xl font-extrabold">
        What would you like to{" "}
        <span className="text-lime font-extrabold">cook</span> today?
      </h1>

      <div className="from-lime to-darklime bg-gradient-to-r px-4 py-4 text-white">
        <p className="text-lg font-medium">
          Depok's #1 <span className="font-bold">Trusted Recipe Source</span>{" "}
          since 2025
        </p>
      </div>

      <div className="relative my-auto w-full bg-cover bg-center">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={duck}
            alt=""
          />
          
          <img
            className="absolute top-0 left-0 object-cover object-center h-full w-full"
            src={gradient}
            alt=""
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <h2 className="mt-35 md:mt-70 pb-5 text-4xl font-semibold">
              Recipe of the month!
            </h2>

            <button className="text-semibold bg-opacity-50 flex items-center gap-4 rounded border-2 border-white bg-transparent px-9 py-1 text-xl text-white transition-all duration-200 hover:bg-zinc-400 hover:scale-110">
              Bebek Goreng{" "}
              <span className="text-3xl">
                <HiArrowLongRight />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-10 p-10">
        <div className="mb-15">
          <h2 className="mb-5 text-3xl font-bold">Categories:</h2>

          <div className="flex w-full flex-wrap justify-center gap-8">
            <CategoryCard
              image={chicken}
              name={"Chicken"}
              route={"/category/Chicken"}
            />
            <CategoryCard image={beef} name={"Beef"} route={"/category/Beef"} />
            <CategoryCard
              image={seafood}
              name={"Seafood"}
              route={"/category/Seafood"}
            />
            <CategoryCard
              image={vegetable}
              name={"Vegetable"}
              route={"/category/Vegan"}
            />
          </div>
        </div>

        {/* <div>
        <h2 className="mb-5 text-3xl font-bold">Local Recipes:</h2>
        <div className="mx-auto flex flex-wrap justify-center gap-8">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div> */}

        <div>
          <h2 className="mb-5 text-3xl font-bold">International Recipes:</h2>
          <div className="mx-auto flex flex-wrap justify-center gap-4">
            {loading ? (
              <div>Loading recipes...</div>
            ) : (
              randomMeals.map((mealId) => (
                <MealDBRecipeCard key={mealId} mealId={mealId} />
              ))
            )}
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-white-500 border-1 border-black text-black px-4 py-2 rounded-lg mt-5 hover:bg-gray-200 scale-110 hover:scale-125 transition-all duration-200">
              Load More
            </button>
          </div>
        </div>
      </div>

      <About/>

    </div>
  );
};

export default RecipeBrowse;
