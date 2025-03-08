import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MealDBRecipeRow = ({ mealId }) => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        const data = await response.json();
        if (data.meals) {
          setMeal(data.meals[0]);
        } else {
          setError('Recipe not found');
        }
      } catch (err) {
        setError('Failed to fetch recipe');
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [mealId]);

  if (loading) return <div className="w-full p-3 bg-white rounded-lg">Loading recipe...</div>;
  if (error) return <div className="w-full p-3 bg-red-50 rounded-lg text-red-600">{error}</div>;
  if (!meal) return null;
  
  const getShortDescription = () => {
    if (!meal.strInstructions) return "No description available";
    
    const sentences = meal.strInstructions.split('.');
    let description = '';
    let i = 0;
    
    while (description.length < 160 && i < sentences.length) {
      if (sentences[i].trim()) {
        description += sentences[i] + '.';
      }
      i++;
    }
    
    return description;
  };

  return (
    <div className="w-full rounded-xl shadow-md overflow-hidden bg-[#FAF3E0]" style={{ boxShadow: '0 4px 2px -1px rgba(0, 0, 0, 0.4)' }}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/5 flex-shrink-0 h-full">
          <div className="h-40">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col flex-grow justify-between p-3 md:pl-4 md:pt-4 md:pb-4 md:pr-16">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-xl font-bold">{meal.strMeal}</h2>
              <span className="rounded-full bg-[#FFF8E0] px-2 py-0.5 text-xs font-medium">
                {meal.strCategory}
              </span>
              <span className="rounded-full bg-[#FFF8E0] px-2 py-0.5 text-xs font-medium">
                {meal.strArea}
              </span>
            </div>
            <p className="text-sm text-gray-700 mb-2 line-clamp-2 h-10 overflow-hidden">
              {getShortDescription()}
            </p>
          </div>
          
          <div className="flex justify-start">
            <Link 
              to={`/recipe/${mealId}`} 
              className="rounded-md px-3 py-1.5 text-white font-medium hover:opacity-90 transition"
              style={{ backgroundColor: 'rgb(197, 37, 37)' }}
            >
              Lihat Resep
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDBRecipeRow; 