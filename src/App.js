import './App.css';
import './components/FilmDetails/FilmDetails.css';
import data from "./components/MOCK_DATA"
import { FilmDetails } from "./components/FilmDetails/FilmDetails"
import Header from './components/Header/Header';
import { useState , useEffect } from 'react';
import './components/Header/Search.css';
import AllFilms from './components/AllFilms';
import Search from './components/Header/Search';



function App() {
  let [movieList , set_movieList] = useState(data)
  
  


  return (
    <div className="App">
      <Header />
      <Search set_movieList={set_movieList} movieList={movieList} />
      <AllFilms movieList={ movieList}/>
     

    </div>
  );
}

export default App;
