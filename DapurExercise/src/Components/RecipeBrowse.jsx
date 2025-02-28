import CategoryCard from "./CategoryCard";
import chicken from "/chicken.png";

const RecipeBrowse = () => {
  return (
    <div className="p-10 mx-10">
      <div>
        <h2 className="font-bold text-3xl mb-5">Categories:</h2>

        <div className="w-full flex justify-center gap-8 flex-wrap">
          <CategoryCard image={chicken} name={"Chicken"} />
          <CategoryCard image={chicken} name={"Chicken"} />
          <CategoryCard image={chicken} name={"Chicken"} />
          <CategoryCard image={chicken} name={"Chicken"} />
        </div>
      </div>

      <div>
        <h2 className="font-bold text-3xl mb-5">Recipes:</h2>

        <div></div>
      </div>
    </div>
  );
};

export default RecipeBrowse;
