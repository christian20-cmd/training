import logoNoire from '../assets/images/N studio  Noir.png';

const Relations = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Colonne texte */}
                <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
                    <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-6 md:px-10 rounded-lg transition duration-300 transform hover:scale-105">
                        Quelques réalisations récentes
                    </button>
                    <p className="text-base md:text-lg text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Lorem dolor sit amet.
                    </p>
                </div>

                {/* Colonne image */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                    <img 
                        src={logoNoire} 
                        alt="logo" 
                        className="w-24 sm:w-32 md:w-40 lg:w-56 h-auto"
                    />
                </div>        
            </div>
        </div>
    );
};

export default Relations;
