
import React from 'react';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image_url: string;
  ingredients: string;
  instructions: string;
  created_at?: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="group">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={recipe.image_url} 
            alt={recipe.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
            {recipe.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
            {recipe.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-emerald-600 font-medium">Vezi Reteta</span>
            <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
              <span className="text-emerald-600 text-sm">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
