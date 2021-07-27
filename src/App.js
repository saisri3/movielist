import './App.css';
import './components/FilmDetails/FilmDetails.css';
import Data from "./components/MOCK_DATA"
import { FilmDetails } from "./components/FilmDetails/FilmDetails"
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      
      <div className="films" key={FilmDetails} >
        {Data.map(film => {
          return (
            < FilmDetails
            
              film={film}
              
            />)
                })}

      </div>

    </div>
  );
}

export default App;
