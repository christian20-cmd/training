import Presentation from "../components/Presentation"
import Footer from "../components/Footer"
import Header from "../components/Header"
import NosServices from "../components/NosServices"
import WhyChooseUs from "../components/WhyChooseUs"
import Relations from "../components/Relations"
import GridImages from "../components/GridImages"
import ContactUsButton from "../components/ContactUsButton"


const Accueil = () => {
  return(
    <div className="font-MyFontFamily">
      <div>
        <Header/>
        <Presentation/>
        <NosServices/>
        <WhyChooseUs/>
        <Relations/>
        <GridImages/>
        <ContactUsButton/>
        <Footer/>
        
      </div>
    </div>
  )
}
export default Accueil