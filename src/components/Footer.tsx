
import React from 'react';
import { ChefHat } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold">Recipe Book</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Discover, create, and share amazing recipes. Your culinary journey starts here with our beautiful collection of dishes from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="/recipes" className="text-gray-400 hover:text-emerald-500 transition-colors">All Recipes</a></li>
              <li><a href="/add-recipe" className="text-gray-400 hover:text-emerald-500 transition-colors">Add Recipe</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Breakfast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Lunch</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Dinner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Desserts</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Recipe Book. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
