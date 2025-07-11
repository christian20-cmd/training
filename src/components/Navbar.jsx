import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermer le menu mobile quand on clique à l'extérieur
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('.mobile-menu-container')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <div className="mobile-menu-container">
            {/* Navbar principale */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/100 backdrop-blur-sm shadow-red-300 shadow-md' : 'bg-black/60 backdrop-blur-sm'}`}>
                <div className="container mx-auto px-4 sm:px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <NavLink to="/">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="w-12 h-auto sm:w-14 md:w-16 transition-transform hover:scale-105"
                                />
                            </NavLink>
                        </div>

                        {/* Menu desktop */}
                        <div className="hidden md:block">
                            <ul className="flex space-x-6 lg:space-x-10 text-lg xl:text-2xl">
                                {[
                                    { path: "/", name: "Accueil" },
                                    { path: "/services", name: "Services" },
                                    { path: "/realisations", name: "Réalisations" },
                                    { path: "/apropos", name: "A propos" }
                                ].map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) => 
                                                `relative py-1 px-2 transition-all duration-300
                                                ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}
                                                after:content-[''] after:absolute after:bottom-0 after:left-0 
                                                after:w-full after:h-0.5 after:bg-white after:transition-all 
                                                after:duration-300 ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Bouton menu mobile */}
                        <div className="md:hidden">
                            <button
                                className="flex flex-col justify-center items-center w-10 h-10 group focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Menu"
                            >
                                <span className={`block w-8 h-0.5 rounded-full transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`block w-8 h-0.5 rounded-full mt-1.5 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-8 h-0.5 rounded-full mt-1.5 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Menu mobile */}
            <div
                className={`
                    md:hidden fixed top-24 left-0 w-full bg-black/95 backdrop-blur-sm z-40
                    transition-all duration-300 overflow-hidden
                    ${isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}
                `}
            >
                <ul className="flex flex-col items-center space-y-6 px-4">
                    {[
                        { path: "/", name: "Accueil" },
                        { path: "/services", name: "Services" },
                        { path: "/realisations", name: "Réalisations" },
                        { path: "/apropos", name: "A propos" }
                    ].map((item) => (
                        <li key={item.path} className="w-full text-center">
                            <NavLink
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => 
                                    `block w-full py-3 text-xl font-medium transition-all duration-300
                                    ${isActive ? 'text-white border-b-2 border-white' : 'text-white/80 hover:text-white'}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;