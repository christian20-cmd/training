import { motion } from "framer-motion";
import ContactButton from "./ContactButton";
import studioImage from '../assets/images/Nstudioimage.jpeg';
import { ShoppingCart } from "lucide-react";

const RecordImage = () => {
    return (
        <div className="relative">
            {/* Image de fond */}
            <div className="w-full h-screen overflow-hidden">
                <img 
                    src={studioImage} 
                    alt="Studio professionnel"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Contenu superposé avec animations */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center mt-28">
                <motion.h1 
                    className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 max-w-4xl leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Donnons vie à vos histoires avec nos services vidéo <br className="hidden md:block" />
                    et son de qualité professionnelle
                </motion.h1>

                <motion.button
                    className="flex items-center bg-white text-black hover:bg-gray-100 transition-all duration-300 
                               py-2 px-8 rounded-md text-lg md:text-xl font-medium shadow-lg hover:shadow-xl
                               transform hover:scale-105"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <ShoppingCart className="mr-2" />
                    Passer une commande
                </motion.button>
            </div>

            {/* Bouton de contact */}
            <ContactButton/>
        </div>
    )
}

export default RecordImage;