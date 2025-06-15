import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat } from 'lucide-react';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data with Romanian recipes
  const mockRecipes = [
    {
      id: 1,
      title: "Tochitura Moldoveneasca",
      description: "Traditionala tochitura moldoveneasca cu carne de porc, carnati si oua, servita cu mamaliga si branza. O mancare consistenta si delicioasa care iti aduce aromele autentic romanesti la masa.",
      image_url: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&h=600&fit=crop",
      ingredients: [
        "500g carne de porc tocata",
        "200g carnati",
        "4 oua",
        "2 cepe mari",
        "3 catei de usturoi",
        "2 linguri ulei",
        "Sare si piper dupa gust",
        "Mamaliga pentru servire",
        "Branza telemea",
        "Smantana pentru servire"
      ],
      instructions: [
        "Incalzeste uleiul intr-o tigaie mare si prajeste carnea tocata pana devine rumena.",
        "Adauga ceapa tocata marunt si gateste pana se inmoaie.",
        "Adauga usturoi tocate si prajeste inca 1 minut.",
        "Taie carnatii rondele si adauga-i in tigaie.",
        "Gateste totul impreuna timp de 10-15 minute.",
        "Condimenteaza cu sare si piper dupa gust.",
        "Rou ouale intr-o tigaie separata.",
        "Serveste tochitura cu mamaliga, oua prajite, branza si smantana."
      ],
      prep_time: "15 minute",
      cook_time: "25 minute",
      servings: 4,
      created_at: "2024-01-15"
    },
    {
      id: 2,
      title: "Pizza Margherita de Casa",
      description: "Pizza italiana clasica cu busuioc proaspat, mozzarella si o crusta crocanta facuta in casa. O reteta atemporala care aduce gustul autentic al Italiei in bucataria ta.",
      image_url: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop",
      ingredients: [
        "2 cani faina",
        "1 lingurita drojdie uscata activa",
        "1 lingurita sare",
        "3/4 cana apa calduta",
        "2 linguri ulei de masline",
        "1/2 cana sos de pizza",
        "200g mozzarella proaspata, feliata",
        "Frunze de busuioc proaspat",
        "Sare si piper dupa gust"
      ],
      instructions: [
        "Intr-un bol mare, combina faina, drojdia si sarea.",
        "Adauga apa calduta si uleiul de masline, amesteca pana se formeaza un aluat.",
        "Framanta aluatul pe o suprafata infarinata timp de 8-10 minute pana devine neted.",
        "Pune-l intr-un bol uns cu ulei, acopera si lasa sa creasca 1 ora.",
        "Preincalzeste cuptorul la 245°C.",
        "Intinde aluatul pe o suprafata infarinata la grosimea dorita.",
        "Transfera pe o piatra de pizza sau o tava de copt.",
        "Intinde sosul uniform, adauga feliile de mozzarella.",
        "Coace timp de 12-15 minute pana crusta devine aurie si branza buhait.",
        "Scoate din cuptor, adauga frunzele de busuioc proaspat inainte de servire."
      ],
      prep_time: "20 minute",
      cook_time: "15 minute",
      servings: 4,
      created_at: "2024-01-14"
    },
    {
      id: 3,
      title: "Biscuiti cu Bucati de Ciocolata",
      description: "Biscuiti perfecti cu bucati de ciocolata care se topesc in gura la fiecare muscatura. Mancarea de confort suprema care nu se demodeaza niciodata.",
      image_url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&h=600&fit=crop",
      ingredients: [
        "2 1/4 cani faina",
        "1 lingurita bicarbonat de sodiu",
        "1 lingurita sare",
        "1 cana unt moale",
        "3/4 cana zahar granulat",
        "3/4 cana zahar brun",
        "2 oua mari",
        "2 lingurite extract de vanilie",
        "2 cani bucati de ciocolata"
      ],
      instructions: [
        "Preincalzeste cuptorul la 190°C.",
        "Intr-un bol, amesteca faina, bicarbonatul si sarea.",
        "Intr-un bol mare, bate untul cu ambele tipuri de zahar pana devine spumos.",
        "Adauga ouale unul cate unul, apoi vanilia.",
        "Incorporeaza treptat amestecul de faina pana se combina.",
        "Adauga bucatile de ciocolata.",
        "Pune linguri rotunjite de aluat pe tavi de copt neunte.",
        "Coace timp de 9-11 minute pana devin aurii.",
        "Lasa sa se raceasca pe tava 2 minute inainte de a le transfera pe gratar."
      ],
      prep_time: "15 minute",
      cook_time: "12 minute",
      servings: 36,
      created_at: "2024-01-13"
    },
    {
      id: 4,
      title: "Musaca Traditionala",
      description: "Musaca delicioasa cu straturi de vinete, carne tocata si sos bechamel cremos. O mancare sanatoasa si delicioasa gata in cateva minute.",
      image_url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&h=600&fit=crop",
      ingredients: [
        "3 vinete mari",
        "500g carne tocata (vita sau miel)",
        "2 cepe tocate",
        "3 catei de usturoi",
        "400g rosii conserva",
        "2 linguri pasta de rosii",
        "1/2 cana vin rosu",
        "50g unt",
        "3 linguri faina",
        "500ml lapte",
        "100g parmezan ras",
        "2 oua",
        "Ulei de masline, sare, piper"
      ],
      instructions: [
        "Taie vinetele felii si sarea-le, lasa 30 minute apoi clasteste.",
        "Prajeste vinetele in ulei pana se rumenesc, lasa pe prosop.",
        "Sotează carnea cu ceapa si usturoiul pana se rumeneste.",
        "Adauga rosiile, pasta de rosii si vinul, fierbe 20 minute.",
        "Pentru bechamel: topeste untul, adauga faina, apoi laptele treptat.",
        "Fierbe pana se ingroasa, adauga branza si ouale batute.",
        "Alterneaza straturi de vinete si carne intr-o tava.",
        "Acopera cu bechamel si coace la 180°C timp de 45 minute."
      ],
      prep_time: "45 minute",
      cook_time: "45 minute",
      servings: 6,
      created_at: "2024-01-12"
    },
    {
      id: 5,
      title: "Tiramisu Italian",
      description: "Desert italian clasic cu piscuri inmuiate in cafea si crema mascarpone. O salata clasica care este mereu pe placul tuturor.",
      image_url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop",
      ingredients: [
        "300g piscuri savoiardi",
        "500ml cafea tare, racita",
        "4 galbenusuri",
        "100g zahar",
        "500g mascarpone",
        "4 albusuri",
        "3 linguri lichior (optional)",
        "Cacao pudra pentru pudrat",
        "Ciocolata neagra pentru decorat"
      ],
      instructions: [
        "Bate galbenusurile cu zaharul pana se albestesc si cresc in volum.",
        "Adauga mascarpone si amesteca delicat.",
        "Bate albusurile spuma si incorporeaza-le in crema.",
        "Amesteca cafeaua cu lichiorul intr-un bol lat.",
        "Inmuie rapid fiecare piscut in cafea si asaza in forma.",
        "Pune un strat de crema peste piscuri.",
        "Repeta straturile, terminand cu crema.",
        "Refrigerează cel putin 4 ore sau peste noapte.",
        "Pudreaza cu cacao inainte de servire."
      ],
      prep_time: "30 minute",
      cook_time: "0 minute",
      servings: 8,
      created_at: "2024-01-11"
    },
    {
      id: 6,
      title: "Chec de Casa",
      description: "Chec pufos si aromat de casa, perfect pentru micul dejun sau o gustare dulce. Perfect pentru o cina rapida in timpul saptamanii sau pentru weekend.",
      image_url: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
      ingredients: [
        "4 oua",
        "200g zahar",
        "200g faina",
        "100ml lapte",
        "100g unt topit",
        "1 plic praf de copt",
        "1 plic zahar vanilat",
        "O lingurita extract de vanilie",
        "O lingurita coaja de lamaie"
      ],
      instructions: [
        "Preincalzeste cuptorul la 180°C si unge o forma de chec.",
        "Bate ouale cu zaharul pana se albestesc si cresc.",
        "Adauga laptele si untul topit, amesteca.",
        "Incorporeaza vanilia si coaja de lamaie.",
        "Cerne faina cu praful de copt si zaharul vanilat.",
        "Adauga faina treptat, amestecand delicat.",
        "Toarna compozitia in forma pregatita.",
        "Coace 45-50 minute sau pana trece testul scobitoarei.",
        "Lasa sa se raceasca inainte de a scoate din forma."
      ],
      prep_time: "15 minute",
      cook_time: "50 minute",
      servings: 8,
      created_at: "2024-01-10"
    }
  ];

  const recipe = mockRecipes.find(r => r.id === Number(id));

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Reteta nu a fost gasita</h2>
          <Link to="/recipes" className="text-emerald-600 hover:text-emerald-700">
            ← Inapoi la retete
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900 overflow-hidden">
        <img 
          src={recipe.image_url} 
          alt={recipe.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="absolute top-8 left-8">
          <Link 
            to="/recipes" 
            className="inline-flex items-center text-white hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Inapoi la Retete
          </Link>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {recipe.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            {recipe.description}
          </p>
        </div>
      </div>

      {/* Recipe Info */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Timp Preparare</h3>
                <p className="text-gray-600 dark:text-gray-400">{recipe.prep_time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Timp Gatire</h3>
                <p className="text-gray-600 dark:text-gray-400">{recipe.cook_time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Portii</h3>
                <p className="text-gray-600 dark:text-gray-400">{recipe.servings} {recipe.servings === 1 ? 'persoana' : recipe.id === 3 ? 'biscuiti' : 'persoane'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ingrediente</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Instructiuni</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                      {instruction}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
