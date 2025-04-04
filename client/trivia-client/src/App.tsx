import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.tsx";
import Game from "./Routes/Game.tsx";
import Categories from "./Routes/Categories.tsx";
import Difficulties from "./Routes/Difficulties.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/difficulties" element={<Difficulties />} />
          <Route path="/game" element={<Game />} />

          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </Router>
    </>
  );
}
export default App
// Paz mira -> vos podes mover las routes en el componente game directamente porq tecnicamente a partir de ahi es que se empiezan a renderizar las cosas
