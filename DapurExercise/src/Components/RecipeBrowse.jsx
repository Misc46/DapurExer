import CategoryCard from "./CategoryCard";
import chicken from "/chicken.png";
import duck from "/bebekgoyeng.png";
import gradient from "/bebekgradient.png";
import { HiArrowLongRight } from "react-icons/hi2";

const RecipeBrowse = () => {
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
  </div>
  );
};

export default RecipeBrowse;
