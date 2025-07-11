import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-white py-12 px-4 sm:px-8 lg:px-16 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* A propos */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">A propos</h1>
          <p className="text-gray-300 text-xl leading-relaxed">
            N Studio est un dolor sit amet,
            consectetur adipisicing elit.
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>

        {/* Pages */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Pages</h1>
          <ul className="space-y-2 text-gray-300 text-xl">
            <li className="hover:text-white transition-colors cursor-pointer">Accueil</li>
            <li className="hover:text-white transition-colors cursor-pointer">Service</li>
            <li className="hover:text-white transition-colors cursor-pointer">Réalisations</li>
            <li className="hover:text-white transition-colors cursor-pointer">A propos</li>
          </ul>
        </div>

        {/* Coordonnées */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Coordonnées</h1>
          <ul className="space-y-4 text-gray-300 text-lg">
            <li className="flex items-start gap-3">
              <MapPin className="flex-shrink-0 mt-1" />
              <span>Lot 307/807 Soanierana Fianarantsoa</span>
            </li>
            <li className="flex items-start gap-3">
              <MdEmail className="flex-shrink-0 mt-1 text-xl" />
              <span>nizanakolona@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="flex-shrink-0 mt-1" />
              <span>03 39 01 63 65 | 03 82 92 45 15</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 text-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div>
            <p className="flex items-center space-x-4 text-2xl">Nous suivre: <FaFacebook/>  <FaWhatsapp/></p> 
            
        </div>

        <p>© {new Date().getFullYear()}Copyright N Studio.Tous droits réservés, concu par Ask&#39;avao Service</p>
      </div>
    </div>
  );
};

export default Footer;