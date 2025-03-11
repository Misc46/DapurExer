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

      if (name == "" && quantity == "") {
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
      setParsedIngredient(parseIngredient(meal));
    }
  }, [meal]);

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
    <div className="px-20 py-10">
      <div className="flex flex-row">
        <div className="w-1/3">
          <img
            src={meal.strMealThumb}
            className="h-80 w-full rounded object-cover"
          />
        </div>
        <div className="w-2/3 ps-10">
          <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
          {/* for testing only 
          <p>{JSON.stringify(meal)}</p>
          <p>{meal.strInstructions}</p> */}

          <ul className="list-decimal">
            {parsedSteps.map((val, i) => (
              <li key={i}>{val}</li>
            ))}
          </ul>

          <ul className="list-disc">
            {parsedIngredient.map((val, i) => (
              <li key={i}>
                {val.quantity} - {val.name}{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default RecipeDetail;
