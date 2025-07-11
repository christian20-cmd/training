import image1 from '../assets/images/o.png'
import image2 from '../assets/images/video-depositions.jpg'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/OIP (1).webp'
import image5 from '../assets/images/R (1).jpeg'
import image6 from '../assets/images/OIP (3).webp'
import image7 from '../assets/images/OIP (2).webp'

const GridImages = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="lg:flex grid grid-cols-1 gap-8 items-start place-self-center">
        {/* Grande image à gauche */}
        <div>
          <img src={image1} className="w-full lg:w-[27rem] h-full object-cover" alt="Grande illustration" loading="eager" />
        </div>
        {/* Grille à droite */}
        <div className="flex flex-col h-full justify-between">
          {/* Grille 2x2 */}
          <div className="grid grid-cols-2 grid-rows-2 gap-8 mb-8">
            <img src={image2} className="w-80 h-[12rem] object-cover" alt="Vidéo dépositions" loading="lazy" />
            <img src={image3} className="w-80 h-[12rem] object-cover" alt="Image 3" loading="lazy" />
            <img src={image4} className="w-80 h-[12rem] object-cover" alt="OIP 1" loading="lazy" />
            <img src={image5} className="w-80 h-[12rem] object-cover" alt="R 1" loading="lazy" />
          </div>
          {/* Texte et boutons */}
          <div>
            <h2 className="text-2xl font-bold mb-2">TITLE</h2>
            <p className="mb-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>Lorem dolor sit amet.</p>
            <div className="flex gap-4 mt-4">
              <button className="border border-black px-4 py-2 rounded">Vidéo</button>
              <button className="border border-black px-4 py-2 rounded">Photo</button>
              <button className="border border-black px-4 py-2 rounded">Conception</button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex grid grid-cols-1 gap-8 items-start place-self-center my-20">
        <div className='grid gap-8'>
            <div className='flex flex-col md:flex-row gap-8 h-full justify-between'>
                <img src={image4} alt="OIP 1" className='w-96 h-[12rem] object-cover' loading="lazy"/>
                <img src={image6} alt="OIP 3" className='w-96 h-[12rem] object-cover' loading="lazy"/>
            </div>
            {/* Texte et boutons */}
            <div>
                <h2 className="text-2xl font-bold mb-2">TITLE</h2>
                <p className="mb-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>Lorem dolor sit amet.</p>
                <div className="flex gap-4 mt-4">
                <button className="border border-black px-4 py-2 rounded">Impression</button>
                <button className="border border-black px-4 py-2 rounded">Confection</button>
                </div>
            </div>
        </div>
        <div>
            <img src={image7} alt="OIP 2" className="w-full lg:w-[20rem] h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  )
}
export default GridImages
