import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import InicioPage from "./Components/InicioPage/InicioPage"
import Footer from "./Components/Footer/Footer"
import ItemDetailsContainer from "./Components/ItemDetailsContainer/ItemDetailsContainer"
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/inicio' element={<InicioPage/>}/>
          <Route exact path='/' element={<ItemListContainer greetings="Indumentaria Rockera" />}/>
          <Route exact path='/category/:id' element={<ItemListContainer greetings="Indumentaria Rockera" />}/>
          <Route exact path='/products/:productId' element={<ItemDetailsContainer/>}/>

          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
