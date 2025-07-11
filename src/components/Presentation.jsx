import { useEffect, useRef, useState } from 'react';
import presenationVideos from '../assets/videos/presenationVideos.mp4';

const Presentation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      },
      {
        threshold: 0.4, // 30% visible déclenche l’animation
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* Texte - vient de la gauche */}
        <div
          className={`order-2 lg:order-1 transition-transform transition-opacity duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}
          `}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6">
            Presentation dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nam,
            voluptate sequi enim ratione ea vitae, omnis nulla doloremque beatae
            doloribus consequatur sit deserunt velit saepe nostrum corrupti aperiam
            asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-10 rounded-lg transition duration-300 transform hover:scale-105">
            PLUS D&#39;INFORMATION
          </button>
        </div>

        {/* Vidéo - vient de la droite */}
        <div
          className={`order-1 lg:order-2 relative transition-transform transition-opacity duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
          `}
        >
          <div className="aspect-w-16 aspect-h-9 overflow-hidden shadow-xl">
            <video
              controls
              autoPlay={false}
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={presenationVideos} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
