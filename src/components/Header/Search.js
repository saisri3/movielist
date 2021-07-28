import { useState, useEffect } from "react"

export default function Search(props) {
const {set_movieList , movieList} = props
    let [sterm, set_sterm] = useState("")
  // console.log(movieList)

  
  const SearchFunction = (event) => {

    set_sterm(event.target.value)
    
  }

  useEffect(() => {
     
    const FilteredFilms = movieList.filter(movieList=> {
      console.log(movieList.title)
      return movieList.title.toLowerCase().includes(sterm.toLowerCase())
  })
  
    set_movieList(FilteredFilms)
  }, [sterm])
    
    return (
        <div className="search">
        <form >
            <label htmlFor="header-search">
                <span className="visually-hidden">Search For LatestMovies</span>
            </label>
            <input
                type="text"
                id="header-search"
         placeholder="Enter movie Name..."
         value ={sterm}
                 onChange={e => SearchFunction(e) }
                />
                
           <button   className="go" type="submit">GO</button>
            </form>

                      
  


    </div>
    )
}

