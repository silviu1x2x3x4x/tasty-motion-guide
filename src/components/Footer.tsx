
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
              <span className="text-2xl font-bold">Cartea de Retete</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Descopera, creeaza si impartaseste retete uimitoare. Calatoria ta culinara incepe aici cu colectia noastra frumoasa de mancaruri din intreaga lume.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-emerald-500 transition-colors">Acasa</a></li>
              <li><a href="/recipes" className="text-gray-400 hover:text-emerald-500 transition-colors">Toate Retetele</a></li>
              <li><a href="/add-recipe" className="text-gray-400 hover:text-emerald-500 transition-colors">Adauga Reteta</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorii</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Mic Dejun</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Pranz</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Cina</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">Deserturi</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Cartea de Retete. Facut cu ❤️ pentru iubitorii de mancare.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
