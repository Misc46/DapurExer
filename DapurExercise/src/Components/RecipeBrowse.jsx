import CategoryCard from "./CategoryCard";
import RecipeCard from "./RecipeCard";
import chicken from "/chicken.png";
import vegetable from "/vegetable.png";
import seafood from "/seafood.png";
import beef from "/beef.png";

const RecipeBrowse = () => {
  return (
    <div className="mx-10 p-10">
      <div>
        <h2 className="mb-5 text-3xl font-bold">Categories:</h2>

        <div className="flex w-full flex-wrap justify-center gap-8">
          <CategoryCard image={chicken} name={"Chicken"} route={"#"} />
          <CategoryCard image={beef} name={"Beef"} route={"#"} />
          <CategoryCard image={seafood} name={"Seafood"} route={"#"} />
          <CategoryCard image={vegetable} name={"Vegetable"} route={"#"} />
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-3xl font-bold">Recipes:</h2>

        <div className="mx-auto flex flex-wrap justify-center gap-8">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default RecipeBrowse;
