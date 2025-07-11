import { BrowserRouter, Routes, Route } from "react-router-dom"
import Accueil from "./pages/Accueil"
import Services from "./pages/Services"


const  App = () => {

  return (
    < div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
