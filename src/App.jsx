import Navbar from "./components/Navbar/Navbar"
import { FoodProvider } from "./context/FoodContext"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from "./pages/Menu/Menu"
import Contact from "./pages/Contact/Contact"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import { LikeRecipes } from "./pages/LikeRecipes/LikeRecipes"
import ItemPages from "./pages/ItemPages/ItemPages"
import FoodItem from "./components/FoodItem/FoodItem"

function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <FoodProvider>
      <Router>
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/likes" element={<LikeRecipes />} />
            <Route exact path="/" element={<FoodItem />} />
            <Route path="/food/:id" element={<ItemPages />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </FoodProvider>

  )
}

export default App
