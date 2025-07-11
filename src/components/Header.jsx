
import Navbar from './Navbar';
import RecordImage from './RecordImage';

const Header = () => {
  

  // État pour le menu mobile
  

  return (
    <div className='font-MyFontFamily relative'>
      <Navbar/>
      {/* Contenu principal */}
      <main>
        <RecordImage />
        {/* Section Statistiques */}
        <div className="relative z-10">
          <div className="w-full px-4 md:px-0 -mt-10 mb-20">
            <div className="bg-white shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-12 mx-4 sm:mx-8 lg:mx-24 rounded-3xl">
              {[
                { value: "5 ans", label: "d'expériences", highlight: true },
                { value: "+20", label: "Clients satisfaits" },
                { value: "+10", label: "Prestataires" },
                { value: "+20", label: "Employés" }
              ].map((item, index) => (
                <div key={index} className="text-center md:text-left md:ml-16">
                  <h1 className={`font-bold text-4xl md:text-5xl lg:text-6xl ${item.highlight ? 'text-red-600' : ''}`}>
                    {item.value}
                  </h1>
                  <p className="text-xl md:text-2xl lg:text-3xl mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
