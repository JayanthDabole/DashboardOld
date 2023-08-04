import './App.css';
import Home from './Components/Home';
import {Routes, Route} from "react-router-dom";
import TVShows from './Components/TV Shows';
import Navbar from './Components/Navbar';
import MoviesBody from './Components/MoviesBody';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='movies' element={<MoviesBody/>}></Route>
          <Route path='tvshows' element={<TVShows/>}></Route>
      </Routes>
</>
  );
}

export default App;
