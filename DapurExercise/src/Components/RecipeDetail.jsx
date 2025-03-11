import { useState, useEffect } from "react";
import { useParams } from "react-router";

const RecipeDetail = () => {
  const { recipeid } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [meal, setMeal] = useState(null);
  const [parsedSteps, setParsedSteps] = useState([]);
  const [parsedIngredient, setParsedIngredient] = useState([]);

  function parseStep(rawtext) {
    let newText;

    if (rawtext.includes("\r\n\r\n")) {
      newText = rawtext.split("\r\n\r\n");
    } else {
      newText = rawtext.split("\n");
    }

    //remove numbering
    const regexvar = [/^\d+\s+.+/, /^\d+\.\s+.+/];
    newText = newText.map((str) => {
      if (regexvar[0].test(str)) {
        return str.substring(3);
      } else if (regexvar[1].test(str)) {
        return str.substring(3);
      } else {
        return str;
      }
    });

    return newText;
  }

  function parseIngredient(meal) {
    let ingredientsArr = [];

    for (let i = 1; i <= 20; i++) {
      let name = meal[`strIngredient${i}`];
      let quantity = meal[`strMeasure${i}`];

      if (name == "" || quantity == "") {
        break;
      }

      ingredientsArr.push({
        name: name,
        quantity: quantity,
      });
    }

    return ingredientsArr;
  }

  let newArray;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeid}`,
        );

        const data = await response.json();

        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError("Recipe not found");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeid]);

  useEffect(() => {
    if (meal && meal.strInstructions) {
      setParsedSteps(parseStep(meal.strInstructions));
      console.log(parseIngredient(meal));
      setParsedIngredient(parseIngredient(meal));
    }
  }, [meal]);

  useEffect(() => console.log(parseIngredient), [parseIngredient]);

  if (loading)
    return (
      <div className="w-full rounded-lg bg-white p-3">Loading recipe...</div>
    );
  if (error)
    return (
      <div className="w-full rounded-lg bg-red-50 p-3 text-red-600">
        {error}
      </div>
    );

  return (
    <div className="mx-auto max-w-[1500px] py-10 sm:px-20">
      <div className="flex w-full flex-col items-center gap-5 md:flex-row md:items-start">
        <div className="w-10/12 md:w-1/3">
          <img
            src={meal.strMealThumb}
            className="h-80 w-full max-w-xl rounded-xl object-cover"
          />
        </div>

        <div className="w-10/12 sm:ps-10 md:w-2/3">
          <h1 className="text-3xl font-bold">{meal.strMeal}</h1>

          <h2 className="mt-5 text-xl font-bold">Bahan-bahan:</h2>
          <ul className="mt-2 list-disc ps-5">
            {parsedIngredient.map((val, i) => (
              <li key={i}>
                {val.quantity} - {val.name}{" "}
              </li>
            ))}
          </ul>

          <h2 className="mt-5 text-xl font-bold">Cara Memasak:</h2>
          <ul className="mt-2 list-decimal ps-5">
            {parsedSteps.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default RecipeDetail;
