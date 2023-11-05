import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import InicioPage from "./Components/InicioPage/InicioPage"
import Footer from "./Components/Footer/Footer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage"
import CartContextComponent from "./Context/CartContext"
import CartDetail from "./Components/cartDetail/CartDetail"

function App() {

  return (
    <>
      <CartContextComponent>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path='/inicio' element={<InicioPage />} />
            <Route exact path='/' element={<ItemListContainer greetings="Indumentaria Rockera" />} />
            <Route exact path='/category/:id' element={<ItemListContainer greetings="Indumentaria Rockera" />} />
            <Route exact path='/products/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<CartDetail />} />


            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </CartContextComponent>

    </>
  )
}

export default App
