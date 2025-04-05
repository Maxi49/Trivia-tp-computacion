import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.tsx";
import Game from "./Routes/Game.tsx";
import Categories from "./Routes/Categories.tsx";
import Difficulties from "./Routes/Difficulties.tsx";
import { TriviaProvider } from './context/TriviaContext.tsx';

function App() {
  return (
    <>
        <TriviaProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/difficulties" element={<Difficulties />} />  
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<h1>Página no encontrada</h1>} />
          </Routes>
      </Router>
        </TriviaProvider>
    </>
  );
}
export default App
//todo lo de route es el children del provider por eso tanto children