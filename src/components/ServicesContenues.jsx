import { Minus, ShoppingCartIcon } from 'lucide-react'
import photoimage from '../assets/images/photoimage.png'
import ScrollReveal from './ScrollReveal'

const ServicesContenues = () => {
    return (
        <div className='bg-white container md:mx-auto px-10 sm:px-8 mb-96'>

            {/* Photo */}
            <ScrollReveal>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center pt-32'>
                    <img src={photoimage} alt="photoimage" className='w-40' />
                    <div>
                        <h1 className='flex text-3xl font-bold items-center'><Minus />Photo<Minus /></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                        dolore alias? Vero quia amet, eum provident molestias officia quos 
                        exercitationem debitis. Maiores nam exercitationem veniam...</p>
                        <p><span className='text-xl font-bold'>+ 30</span> Clients satisfaits</p>
                        <div className='xl:space-x-8 xl:flex xl:ml-14 space-y-4 xl:space-y-0 mt-4'>
                            <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                En savoir plus
                            </button>
                            <button className="flex items-center bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                <ShoppingCartIcon className='text-blue-400' /> Passer une commande
                            </button>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Video */}
            <ScrollReveal delay={0.2}>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center pt-32 lg:space-x-96'>
                    <div>
                        <h1 className='flex text-3xl font-bold items-center'><Minus />Video<Minus /></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                        dolore alias? Vero quia amet, eum provident molestias officia quos...</p>
                        <p><span className='text-xl font-bold text-blue-600'>+ 25</span> Clients satisfaits</p>
                        <div className='xl:space-x-8 xl:flex xl:ml-14 space-y-4 xl:space-y-0 mt-4'>
                            <button className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                En savoir plus
                            </button>
                            <button className="flex items-center bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                <ShoppingCartIcon className='text-blue-400' /> Passer une commande
                            </button>
                        </div>
                    </div>
                    <img src={photoimage} alt="photoimage" className='w-40' />
                </div>
            </ScrollReveal>

            {/* Conception */}
            <ScrollReveal delay={0.4}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-32'>
                    <img src={photoimage} alt="photoimage" className='w-40' />
                    <div>
                        <h1 className='flex text-3xl font-bold items-center'><Minus />Conception<Minus /></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                        dolore alias? Vero quia amet, eum provident molestias officia quos...</p>
                        <div className='xl:space-x-8 xl:flex xl:ml-14 space-y-4 xl:space-y-0 mt-4 items-center'>
                            <p><span className='text-xl font-bold'>+ 30</span> Clients satisfaits</p>
                            <button className="flex items-center bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                <ShoppingCartIcon className='text-blue-400' /> Passer une commande
                            </button>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Impression */}
            <ScrollReveal delay={0.6}>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center pt-32 lg:space-x-96'>
                    <div>
                        <h1 className='flex text-3xl font-bold items-center'><Minus />Impression<Minus /></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                        dolore alias? Vero quia amet, eum provident molestias officia quos...</p>
                        <div className='xl:space-x-8 xl:flex xl:ml-14 space-y-4 xl:space-y-0 mt-4 items-center'>
                            <button className="flex items-center bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                <ShoppingCartIcon className='text-blue-400' /> Passer une commande
                            </button>
                            <p><span className='text-xl font-bold text-blue-600'>+ 25</span> Clients satisfaits</p>
                        </div>
                    </div>
                    <img src={photoimage} alt="photoimage" className='w-40' />
                </div>
            </ScrollReveal>

            {/* Confection */}
            <ScrollReveal delay={0.8}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-32'>
                    <img src={photoimage} alt="photoimage" className='w-40' />
                    <div>
                        <h1 className='flex text-3xl font-bold items-center'><Minus />Confection<Minus /></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                        dolore alias? Vero quia amet, eum provident molestias officia quos...</p>
                        <div className='xl:space-x-8 xl:flex xl:ml-14 space-y-4 xl:space-y-0 mt-4 items-center'>
                            <p><span className='text-xl font-bold text-blue-600'>+ 30</span> Clients satisfaits</p>
                            <button className="flex items-center bg-black hover:bg-gray-800 text-white font-medium py-2 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                                <ShoppingCartIcon className='text-blue-400' /> Passer une commande
                            </button>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

        </div>
    )
}

export default ServicesContenues
