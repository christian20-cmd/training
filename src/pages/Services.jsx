
import Navbar from "../components/Navbar"
import ServicesContenues from "../components/ServicesContenues"
import TitlesServices from "../components/TitlesServices"

const Services = () => {
    return(
        <div className="font-MyFontFamily">
            <div className="bg-gray-300">
                <Navbar/>
                <TitlesServices/>
                <ServicesContenues/>
            </div>
        </div>
    )
}
export default Services