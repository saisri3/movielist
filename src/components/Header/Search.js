import data from '../MOCK_DATA.json';
import "./Search.css";
import {useState} from 'react'
import { FilmDetails } from '../FilmDetails/FilmDetails';

    
function Search() {
    const [SearchTerm, setSearchTerm] = useState([])


    const FilteredFilms = data.filter(data => {
        return data.title.includes(SearchTerm)
    })
    


    return (
       
      

    <div className="search">
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Search For LatestMovies</span>
            </label>
            <input
                type="text"
                id="header-search"
                 placeholder="Enter movie Name..."
                onChange={event => {setSearchTerm(event.target.value)}}
                />
                
           <button className="go" type="submit">GO</button>
            </form>

                      
    {FilmDetails(FilteredFilms)}


    </div>
);
}

export default Search;