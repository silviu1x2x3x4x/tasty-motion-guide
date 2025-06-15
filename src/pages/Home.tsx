
import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Search, BookOpen, Heart, Sparkles, Users } from 'lucide-react';

const Home: React.FC = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Tochitura Moldoveneasca",
      description: "Traditionala tochitura moldoveneasca cu carne de porc si carnati",
      image_url: "https://images.unsplash.com/photo-1565057824294-36bdf6a28a5c?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Musaca Traditionala",
      description: "Musaca delicioasa cu straturi de vinete si carne tocata",
      image_url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Tiramisu Italian",
      description: "Desert italian clasic cu piscuri si crema mascarpone",
      image_url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&h=300&fit=crop",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23059669%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <ChefHat className="w-16 h-16 text-emerald-600 mx-auto mb-6 animate-bounce" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Bine ai venit la
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-orange-500 block">
              Cartea de Retete
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Descopera retete uimitoare, impartaseste creatiile tale culinare si porneste intr-o calatorie delicioasa prin aromele din intreaga lume.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/recipes" 
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Exploreaza Retetele
            </Link>
            <Link 
              to="/add-recipe" 
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Adauga Reteta Ta
            </Link>
          </div>
        </div>
      </section>

      {/* Cooking Inspiration Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Descopera magia gastriei acasa
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fiecare reteta spune o poveste. Fiecare ingredient aduce amintiri. Fiecare masa gatita cu dragoste creeaza momente de neuitat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Gateste cu Dragoste</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Transforma ingrediente simple in mancaruri care iti vor incalzi inima si vor aduce zambetul pe chipurile celor dragi.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Creeaza Amintiri</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fiecare masa pregatita in bucataria ta devine o amintire pretioasa, un moment special impartasit cu familia si prietenii.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Aduna Oamenii</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bucataria este inima casei - locul unde se aduna familiile, se creeaza prietenii si se sarbatoresc momentele importante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Retete Recomandate
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Incearca aceste retete populare iubite de comunitatea noastra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={recipe.image_url} 
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 transition-colors">
                      {recipe.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {recipe.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/recipes" 
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Vezi Toate Retetele
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
