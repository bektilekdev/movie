import './App.scss';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Home from './components/Home/home';
import Popular from './components/Popular/popular';
import TopRated from "./components/TopRated/toprated";
import PageDetails from './Page/PageDetails/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailsActor from "./Page/DetailsActor";
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/popular' }element={<Popular/>}/>
            <Route path={'/toprated'} element={<TopRated/>}/>
            <Route path={'/movie-details/:movieId'} element={<PageDetails/>}/>
            <Route path={'/movie-details/:movieId' }element={<PageDetails/>}/>
            <Route path={'/actor-details/:actorId'} element={<DetailsActor/>}/>
            <Route path={'/movie-search/:movieName'} element={<Search/>}/>
        </Routes>
    </div>
  );
}

export default App;
