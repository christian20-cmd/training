import { PlusCircle } from "lucide-react"

const NosServices = () => {
    return (
        <div className="max-w-7xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-16 my-36 mx-4 sm:mx-10 md:mx-10 lg:mx-32">
            <div className="bg-white p-8 rounded-3xl">
                <h1 className="text-5xl font-bold">Nos services</h1>
                <p className="py-4 text-sm">Courte présentation des deux domaines
                    principaux : Vidéo et Son. Quae libero, aona
                    dia consequuntur iusto facilis nostrum
                    adipisci ab quia illum molestiae deserunt
                    aliquam commodi eveniet quo ad nulla
                    expedita nam!Lorem ipsum, dolor sit amet </p>
                <button className="flex items-center  bg-red-600 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                        PLUS DE DETAILS <PlusCircle className="ml-2"/>
                </button>
            </div>

            {/* Photo */}
            <div className="bg-white shadow-2xl p-8 rounded-3xl transition duration-500 ease-in-out hover:-rotate-12 hover:scale-105 hover:text-white hover:bg-black">
                <h1 className="text-5xl font-bold">Photo</h1>
                <p  className="py-4 text-sm">Courte présentation des deux domaines
                    principaux : Vidéo et Son. Quae libero, aona
                    dia consequuntur iusto facilis nostrum
                    adipisci ab quia illum molestiae deserunt
                    aliquam commodi eveniet quo ad nulla
                    expedita nam!Lorem ipsum, dolor sit amet </p>
                <span>PLUS D&#39;INFORMATION</span>
            </div>

            {/* Videos item */}
            <div className="bg-white shadow-2xl p-8 rounded-3xl transition duration-500 ease-in-out hover:-rotate-12 hover:scale-105 hover:text-white hover:bg-black">
                <h1 className="text-5xl font-bold">Vidéo</h1>
                <p  className="py-4 text-sm">Courte présentation des deux domaines
                    principaux : Vidéo et Son. Quae libero, aona
                    dia consequuntur iusto facilis nostrum
                    adipisci ab quia illum molestiae deserunt
                    aliquam commodi eveniet quo ad nulla
                    expedita nam!Lorem ipsum, dolor sit amet </p>
                <span>PLUS D&#39;INFORMATION</span>
            </div>

            {/* Impression item */}
            <div className="bg-white shadow-2xl p-8 rounded-3xl transition duration-500 ease-in-out hover:-rotate-12 hover:scale-105 hover:text-white hover:bg-black">
                <h1 className="text-5xl font-bold">Impression</h1>
                <p  className="py-4 text-sm">Courte présentation des deux domaines
                    principaux : Vidéo et Son. Quae libero, aona
                    dia consequuntur iusto facilis nostrum
                    adipisci ab quia illum molestiae deserunt
                    aliquam commodi eveniet quo ad nulla
                    expedita nam!Lorem ipsum, dolor sit amet </p>
                <span>PLUS D&#39;INFORMATION</span>
            </div>

            {/* Conception item */}
            <div className="bg-white shadow-2xl p-8 rounded-3xl transition duration-500 ease-in-out hover:-rotate-12 hover:scale-105 hover:text-white hover:bg-black">
                <h1  className="text-5xl font-bold">Conception</h1>
                <p className="py-4 text-sm">Courte présentation des deux domaines
                    principaux : Vidéo et Son. Quae libero, aona
                    dia consequuntur iusto facilis nostrum
                    adipisci ab quia illum molestiae deserunt
                    aliquam commodi eveniet quo ad nulla
                    expedita nam!Lorem ipsum, dolor sit amet </p>
                <span>PLUS D&#39;INFORMATION</span>
            </div>

            {/* confection item */}
            <div className="bg-white shadow-2xl p-8 rounded-3xl transition duration-500 ease-in-out hover:-rotate-12 hover:scale-105 hover:text-white hover:bg-black">
                <h1  className="text-5xl font-bold">Confection</h1>
                <p className="py-4 text-sm">Courte présentation des deux domaines
                    principaux : Vidéo et Son. Quae libero, aona
                    dia consequuntur iusto facilis nostrum
                    adipisci ab quia illum molestiae deserunt
                    aliquam commodi eveniet quo ad nulla
                    expedita nam!Lorem ipsum, dolor sit amet </p>
                <span>PLUS D&#39;INFORMATION</span>
            </div>
        </div>
    )
}
export default NosServices