import './App.css';
import Home from "./pages/Home"
import Navbar from "./Navbar"
import YourGame from "./pages/YourGame"
import FindChampionStats from "./pages/FindChampionStats"
import AdvSql from "./pages/AdvSql"
import { Route, Routes } from "react-router-dom"

//import { response } from 'express';

function App() {
  return(
    <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/YourGame" element={<YourGame/>} />        
        <Route path="/FindChampionStats" element={<FindChampionStats/>} />
        <Route path="/AdvSql" element={<AdvSql/>} />
      </Routes>
      </div>
  </>
);
}

export default App;

//npm start
